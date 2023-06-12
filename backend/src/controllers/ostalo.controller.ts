import express from 'express'
import mestoModel from '../models/mesto.model'
import polaganjeModel from '../models/polaganje.model'
import prijavaModel from '../models/prijava.model'

export default class OstaloController{
   sve_prijave_za_usera = (req:express.Request, res:express.Response)=>{
    prijavaModel.find({'username':req.body.username}, (err, resp)=>{
        if(err) console.log(err)
        else return res.json(resp)
    })
   }
   sve_prijave_za_mesto = (req:express.Request, res:express.Response)=>{

    prijavaModel.find({'mesto':req.body.mesto}, (err, resp)=>{
        if(err) console.log(err)
        else {
            res.json(resp)
        }
    })
   }
   dohvati_polaganje = (req:express.Request, res:express.Response)=>{
    polaganjeModel.findOne({'idPrijave':req.body.idPrijave}, (err, resp)=>{
        if(err) console.log(err)
        else return res.json(resp)
    })
   }
   mesto_za_id = (req:express.Request, res:express.Response)=>{
    mestoModel.findOne({'idMesto':req.body.idMesto}, (err, resp)=>{
        if(err) console.log(err)
        else return res.json(resp)
    })
   }
   sva_mesta = (req:express.Request, res:express.Response)=>{
    mestoModel.find({}, (err, resp)=>{
        if(err) console.log(err)
        else return res.json(resp)
    })
   }
   dodaj_prijavu =(req:express.Request, res:express.Response)=>{
    prijavaModel.find({}, (err, resp)=>{
        if(err) {}
        else{
            
            let max_id = 0;
            for(let r of resp){
                if(r['idPrijava']>max_id) max_id = r['idPrijava']
            }
            let prijava = new prijavaModel({
                idPrijava: (max_id+1),
                vrsta: req.body.vrsta,
                mesto: req.body.mesto,
                username: req.body.username,
                status: req.body.status
            })
            prijava.save((err, respp)=>{
                if(err) {}
                else res.json({"message":"ok"})
            })
        }
    })
    
   }
   dodaj_polaganje =(req:express.Request, res:express.Response)=>{
    polaganjeModel.find({}, (err, resp)=>{
        if(err) {}
        else{
            let max_id = 0;
            for(let r of resp){
                if(r['idPolaganja']>max_id) max_id = r['idPolaganja']
            }
            let prijava = new polaganjeModel({
                idPolaganja: (max_id+1),
                idPrijave: req.body.idPrijave,
                brojPoena:req.body.brojPoena,
                datum: req.body.datum,
                polozio: req.body.polozio,
                inspektor: req.body.inspektor
            })
            prijava.save((err, respp)=>{
                if(err) {}
                else{
                    if(prijava.polozio==1){
                        prijavaModel.updateOne({'idPrijava':req.body.idPrijave}, {$set:{'status':1}}, (err, resp)=>{
                            if(err) console.log(err)
                            else res.json({"message":"ok"})
                        })
                    }
                }
                
            })
            
        }
    })
   }
   azuriraj_prijavu=(req:express.Request, res:express.Response)=>{
       
   }
}
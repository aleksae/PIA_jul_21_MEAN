import express from 'express'
import korisnikModel from '../models/korisnik.model'

export default class KorisnikController{
    login = (req:express.Request, res:express.Response)=>{
        korisnikModel.findOne({"username":req.body.username, "password":req.body.password}, (err, resp)=>{
            if(err) console.log(err)
            else {
                res.json(resp)
            }
        })
    }
    dohvati_za_ki = (req:express.Request, res:express.Response)=>{
        korisnikModel.findOne({"username":req.body.username}, (err, resp)=>{
            if(err) console.log(err)
            else {
                res.json(resp)
            }
        })
    }
}
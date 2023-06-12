import express from 'express'
import OstaloController from '../controllers/ostalo.controller'

const ostaloRouter = express.Router()

ostaloRouter.route('/sve_prijave_za_usera').post((req, res)=>{
    new OstaloController().sve_prijave_za_usera(req, res)
})
ostaloRouter.route('/sve_prijave_za_mesto').post((req, res)=>{
    new OstaloController().sve_prijave_za_mesto(req, res)
})
ostaloRouter.route('/dohvati_polaganje').post((req, res)=>{
    new OstaloController().dohvati_polaganje(req, res)
})
ostaloRouter.route('/mesto_za_id').post((req, res)=>{
    new OstaloController().mesto_za_id(req, res)
})
ostaloRouter.route('/sva_mesta').post((req, res)=>{
    new OstaloController().sva_mesta(req, res)
})
ostaloRouter.route('/dodaj_prijavu').post((req, res)=>{
    new OstaloController().dodaj_prijavu(req, res)
})
ostaloRouter.route('/dodaj_polaganje').post((req, res)=>{
    new OstaloController().dodaj_polaganje(req, res)
})




export default ostaloRouter
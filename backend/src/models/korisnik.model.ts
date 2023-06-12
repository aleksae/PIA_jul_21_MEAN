import mongoose from "mongoose";

const Schema = mongoose.Schema

let Korisnik=new Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    ime:{
        type:String
    },
    prezime:{
        type:String
    },
    datumRodjenja:{
        type:String
    },
    mesto:{
        type: Number
    },
    jeInspektor:{
        type: Number
    }
})

export default mongoose.model("KorisnikModel", Korisnik, 'korisnik')
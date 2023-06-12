import mongoose from "mongoose";

const Schema = mongoose.Schema

let Prijava=new Schema({
   
    idPrijava:{
        type: Number
    },
    vrsta:{
        type:String
    },
    mesto:{
        type: Number
    },
    username:{
        type: String
    },
    status:{
        type: Number
    }
}) 
export default mongoose.model("PrijavaModel", Prijava, 'prijava')
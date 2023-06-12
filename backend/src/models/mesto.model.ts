import mongoose from "mongoose";

const Schema = mongoose.Schema

let Mesto=new Schema({
   
    idMesto:{
        type: Number
    },
    naziv:{
        type:String
    }
})

export default mongoose.model("MestoModel", Mesto, 'mesto')
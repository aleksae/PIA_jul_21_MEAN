import mongoose from "mongoose";

const Schema = mongoose.Schema

let Polaganje=new Schema({
   
    idPolaganja:{
        type: Number
    },
    idPrijave:{
        type: Number
    },
    brojPoena:{
        type: Number
    },
    datum:{
        type:String
    },
    polozio:{
        type: Number
    },
    inspektor:{
        type:String
    }
})

export default mongoose.model("PolaganjeModel", Polaganje, 'polaganje')
import mongoose from "mongoose";
const MangaSchema = new mongoose.Schema({
    id_myanime:{
        type:Number,
        required: true
    },
    nombre:{
        type:String,
        required: true,
        min: 1900
    },
    autor:{
        type:String,
        required:true
    },
    portada:{
        type:String,
        required:true
    },
    categorias:{
        type:[String],
        required: false
    },
    descripcion:{
        type:String,
        required:true
    },
    estado:{
        type:String,
        required:true
    },
    fecha_fin:{
      type:String,
      required:false  
    },
    fecha_ini:{
        type:String,
        required:true
    }
});

export default mongoose.model('Manga', MangaSchema);
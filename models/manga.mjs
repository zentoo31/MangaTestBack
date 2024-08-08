import mongoose from "mongoose";

const MangaSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: true
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

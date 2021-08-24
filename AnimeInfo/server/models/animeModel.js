import mongoose from "mongoose";
const Schema = mongoose.Schema;

const animeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type:String,
        required:true
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    }

})


const Anime = mongoose.model("Anime", animeSchema);
export default Anime;
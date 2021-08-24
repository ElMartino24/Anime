import Anime from "../models/animeModel.js"




export const createAnimePost = async (req, res, next) => {

   

   const {title, text} = req.body;
   const newAnime = new Anime({title, text, userId: req.user})
   try{
      const anime = await newAnime.save();
      res.status(201).json({
         message: "Anime wurde erfolgreich gespeichert",
         content: anime,
         isSuccess:true
      })}catch(err){
         res.status(500).json({
            message:"Anime konnte nicht gespeichert werden",
            content: null,
            isSuccess:false
         })
      }
   
}

export const updateAnime = async (req, res, next) => {
   
   const update = req.body
   
   const anime = await Anime.findByIdAndUpdate(update.id, {title: update.title, text: update.text}, {new: true})
   
   try{
      
   res.status(201).json({
      message:"Anime wurde geupdated",
      content: anime,
      isSuccess:  true,
   })
}catch(err){
   res.status(500).json({
      message:"Server error bitte erneut versuchen",
      cotent:  null,
      isSuccess:  false,
   })
}
   
}

export const getAnimes = async(req, res, next) => {
   try{
      const animes = await Anime.find({}).populate("userId", "username")

      res.json({
         message: "Anime wurde gespreichert",
         content: animes,
         isSuccess:true
      })
   }catch(err){
      res.status(500).json({
         message:"Server error bitte erneut versuchen",
         content:null,
         isSuccess: false
      })
   }
}

export const deleteAnimes = async(req, res, next) => {

   const deletePost = req.body

   const anime = await Anime.findByIdAndDelete(deletePost.id)

   try{
      res.json({
         message:"Animes erfolgreich gelöscht",
         content: anime,
         isSuccess:true,
      })

   }catch(err){
      res.status(500).json({
         message:"Server error bitte erneut versuchen",
         content: null,
         isSuccess: false
      })
   }

   
} 

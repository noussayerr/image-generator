const PostSchema = require("../models/image.model")
const sdk= require('@api/eden-ai');
const cloudinary = require ('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports ={
    generatingimage:async (req,res) =>{
      const {input}=req.body;
      sdk.auth('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjlhYWI0MzctYTllZi00YWIzLWFlNWQtMjQ3MjRjNzgyOTgzIiwidHlwZSI6ImFwaV90b2tlbiJ9.KaMiwr2lyXpdWUpLI4Hmm2RzsjpPLoveo65qt9zLbIE');
      data=sdk.image_generation_create({
      response_as_dict: true,
      attributes_as_list: false,
      show_original_response: false,
      num_images: 1,
      text: input,
      resolution: '512x512',
      providers: ['amazon']
    })
      .then((data) => res.status(200).json({ data }))
      .catch(err => console.error(err));
    },
    create:async(req,res)=>{
      try {
        const { name,input, image } = req.body;
        const photoUrl = await cloudinary.uploader.upload(image);

        PostSchema.create({
          name,
          input,
          photo: photoUrl.url,
        })
        
        res.status(200).json({ success: true });
      } catch (err) {
        res.status(500).json({ success: false});
      }
    },allposts:async(req,res)=>{
      PostSchema.find()
        .then(posts=>{res.json(posts)})
        .catch((err)=>res.json(err))
    }


  
  }

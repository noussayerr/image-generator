const mongoose= require ('mongoose');

const Post = new mongoose.Schema({
  name: { type: String, required: true },
  input: { type: String, required: true },
  photo: { type: String, required: true },
});

const PostSchema = mongoose.model('Post', Post);

module.exports=PostSchema
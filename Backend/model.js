const mongoose=require('mongoose');
const blogSchema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});const blog=mongoose.model('product',blogSchema);
module.exports=blog;
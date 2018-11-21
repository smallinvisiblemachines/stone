import mongoose from 'mongoose';

const page = mongoose.model('Page', {
  title: String,
  url: String,
  body: String 
});

export default page;
import mongoose from "mongoose";

const ImageSchema = mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  filepath: {
    type: String,
    required: true,
  },
});

const image = mongoose.model("Image", ImageSchema);


export default image;
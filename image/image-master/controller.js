
import image from "./schema.js";
const postImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(500).json({ error: "No file found" });
    }
    const imageFile = image({
      filename: req.file.filename,
      filepath: req.file.path,
    });

    const savedImage = await imageFile.save();

    res.status(200).json(savedImage);
  } catch (error) {
    console.log(error);
  }
};

export default postImage;

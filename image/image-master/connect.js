import mongoose from "mongoose";

const  connect=async()=> {
  try {
    await mongoose.connect(
      "mongodb+srv://khurramjaffery12:ovYMvecqEd0g0vDE@stack-mern.fuxtu8b.mongodb.net/?retryWrites=true&w=majority&appName=stack-mern/ecommerce"
    );
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
}

export default connect

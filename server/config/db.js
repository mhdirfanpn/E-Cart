import mongoose from "mongoose";

const connection = async()=>{
    try {
      await  mongoose.connect('mongodb://localhost:27017/e-commerce',{useUnifiedTopology:true});
      console.log(`database connected`);
    } catch (error) {
        console.log(`error in connection - ${error.message}`);
    }
}

export default connection;
import mongoose from "mongoose";

const connection = async()=>{
    try {
      await  mongoose.connect('mongodb+srv://mhdirfanpn:NMDCK1yRXkSuK4FY@cluster0.p8wswr7.mongodb.net/passport',{useUnifiedTopology:true});
      console.log(`database connected`);
    } catch (error) {
        console.log(`error in connection - ${error.message}`);
    }
}

export default connection;
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        required: true
      }
    },
    {
      timestamps: true
    }
  );
  

export const users = mongoose.model('users',UserSchema);

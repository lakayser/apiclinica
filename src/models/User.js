import { Schema, model }  from "mongoose";
import bcrypt             from 'bcryptjs';

const userSchema = new Schema({
    userName:     String,
    password:     String,
    roles: [{
        type: Schema.Types.ObjectId,
        ref: "Role"
    }]
}, {
    timestamps: true,
    versionKey: false
})

  userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
  userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
  }

export default model('User', userSchema);
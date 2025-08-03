import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  tg: { type: String, required: true },
  level: { type: Number, required: true },
  gender: { type: String, enum: ['M', 'F'], required: true },
  phone_no: { type: String, required: true }
}, { _id: false });

const userModel = model('User', userSchema);

export {
  userModel,
  userSchema
}
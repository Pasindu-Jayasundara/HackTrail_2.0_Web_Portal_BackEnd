import { Schema, model } from 'mongoose';
import { userSchema } from './user.js';

const teamSchema = new Schema({
  team_id: { type: Number, required: true, unique: true },
  members: [userSchema]
});

const teamModel = model('Team', teamSchema);

export {
  teamModel
}
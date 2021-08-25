import { Schema } from 'mongoose';


//Use momento to date 
const moment = require('moment-timezone');
const date = moment.tz(Date.now(), "America/Guayaquil").tz('UTC').format('YYYY-MM-DD');


export const CharacterSchema = new Schema({
  name: {
    type: String, 
    required:true
  },
  role: String,
  description: String,
  age: Number,
  personality: String,
  hability: String,
  createdAt: {
    type: Date,
    default: date
  },
  creatorName: String,
  avatarPath: String,
});


import { Document  } from 'mongoose';

export interface Character extends Document {
  name: string;
  role: string;
  description: string;
  age: number;
  personality: string;
  hability: string;
  createdAt: Date;
  creatorName: string;
  avatarPath: string;
}
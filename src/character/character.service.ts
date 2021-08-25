import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { Character } from './interfaces/character.interface';
import { CreateCharacterDTO } from './dto/character.dto';

@Injectable()
export class CharacterService {
  constructor(@InjectModel('Character') private readonly characterModel: Model<Character>) {}

  async getCharacters(): Promise<Character[]> {
      const characters = await this.characterModel.find();
      return characters;
    }

    async getCharacter(characterId: string):Promise<Character> {
      const character = await this.characterModel.findById(characterId);
      return character;
    }

    async createCharacter(createCharacterDTO: CreateCharacterDTO):Promise<Character> {
      const character = new this.characterModel(createCharacterDTO);
      return await character.save();
    }

    async updateCharacter(characterId:string, createCharacterDTO:CreateCharacterDTO):Promise<Character> {
      const updatedCharacter = await this.characterModel.findByIdAndUpdate(characterId, createCharacterDTO, {new:true});
      return updatedCharacter;
    }

    async deleteCharacter(characterId:string):Promise<Character> {
      const deletedCharacter = await this.characterModel.findByIdAndDelete(characterId);
      return deletedCharacter;
    }
}

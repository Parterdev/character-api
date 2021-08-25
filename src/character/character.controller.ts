import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDTO } from './dto/character.dto';


@Controller('character')
export class CharacterController {

  constructor(private characterService: CharacterService) {}

  //Routes
  @Post('/')
  async createPost(@Res() res, @Body() createCharacterDTO:CreateCharacterDTO) {
    //console.log(createCharacterDTO);
    const character = await this.characterService.createCharacter(createCharacterDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Product Successfully Created',
      character
    });
  }

  @Get('/')
  async getCharacters(@Res() res):Promise<CreateCharacterDTO>{
    const characters = await this.characterService.getCharacters();
    return res.status(HttpStatus.OK).json(characters);
  }

  @Get('/:characterId')
  async getCharacter(@Res() res, @Param('characterId') characterId:string ) {
    const character = await this.characterService.getCharacter(characterId);
    if(!character) throw new NotFoundException("Character doesn't exist");
    return res.status(HttpStatus.OK).json(character);
  }

  @Delete('/delete')
  async deleteCharacter(@Res() res, @Query('characterId') characterId:string) {
    const character = await this.characterService.deleteCharacter(characterId);
    if(!character) throw new NotFoundException("Character doesn't exist");
    return res.status(HttpStatus.OK).json({
      message: 'Character Deleted Successfully',
      character
    })
  }

  @Put('/:characterId')
  async updateCharacter(@Res() res, @Body() createCharacterDTO: CreateCharacterDTO, 
    @Param('characterId') characterId:string) {
      const character = await this.characterService.updateCharacter(characterId, createCharacterDTO);
      if(!character) throw new NotFoundException("Character doesn't exist");
      return res.status(HttpStatus.OK).json({
        message: 'Character Updated Successfully',
        character
      })
  }
}

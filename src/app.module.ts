import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CharacterModule,
    //Old: mongodb://localhost/characters-nestjs
    //MongoDB Cloud: mongodb+srv://test:development12345678@development.j7k4c.mongodb.net/character-nestjs-api?retryWrites=true&w=majority
    MongooseModule.forRoot(
      'mongodb+srv://test:development12345678@development.j7k4c.mongodb.net/character-nestjs-api?retryWrites=true&w=majority'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PlacesModule } from './places/places.module';
import { OpenaiModule } from './openai/openai.module';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [PlacesModule, OpenaiModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/'), ConfigModule.forRoot({ envFilePath: `.env.${process.env.NODE_ENV}` })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

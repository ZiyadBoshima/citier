import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PlacesModule } from './places/places.module';
import { OpenaiModule } from './openai/openai.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [PlacesModule, OpenaiModule, ConfigModule.forRoot({ envFilePath: `.env.${process.env.NODE_ENV}` })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

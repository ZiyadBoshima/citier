import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PlacesModule } from './places/places.module';
import { OpenaiModule } from './openai/openai.module';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [PlacesModule, OpenaiModule, ConfigModule.forRoot({ envFilePath: `.env.${process.env.NODE_ENV}` }), 
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({uri: config.get('MONGO_URI')}),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

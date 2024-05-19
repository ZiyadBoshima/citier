import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { PlacesGateway } from './places.gateway'
import { OpenaiModule } from 'src/openai/openai.module'
import { MongooseModule } from '@nestjs/mongoose'
import { Place, PlaceSchema } from 'src/schemas/place.schema'

@Module({
  imports: [OpenaiModule, MongooseModule.forFeature([{ name: Place.name, schema: PlaceSchema }])],
  providers: [PlacesService, PlacesGateway],
  controllers: [PlacesController]
})
export class PlacesModule {}

import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { PlacesGateway } from './places.gateway'

@Module({
  providers: [PlacesService, PlacesGateway],
  controllers: [PlacesController]
})
export class PlacesModule {}

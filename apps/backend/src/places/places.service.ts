import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { OpenaiService } from 'src/openai/openai.service'
import { Place } from 'src/schemas/place.schema'

@Injectable()
export class PlacesService {
  private CONTEXT = 'You are a travel guide whose job is to intrigue curious travellers to exploring new cities.'
  private INSTRUCTION = 'Respond with a one-paragraph-long pitch on the relevant' +
    ' city below, naming places of historical, cultural, or innovative significance.' +
    ' Start your sentences in a creative manner. Do not address the travellers directly.' 

  constructor(private readonly openaiService: OpenaiService, @InjectModel(Place.name) private placeModel: Model<Place>) {}

  async getPlaceDetails(placeName: string) {
    const place = await this.placeModel.findOne({ name: placeName.toLowerCase() })

    if (!place) {
      const placeDetails = await this.openaiService.createCompletion(placeName, this.CONTEXT, this.INSTRUCTION)
      const newPlace = await new this.placeModel({ name: placeName.toLowerCase(), details: placeDetails }).save()

      return newPlace.details
    }

    return place.details
  }
}

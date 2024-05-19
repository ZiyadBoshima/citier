import { Injectable } from '@nestjs/common';
import { OpenaiService } from 'src/openai/openai.service'

@Injectable()
export class PlacesService {
  private CONTEXT = 'You are a travel guide whose job is to intrigue curious travellers to exploring new cities.'
  private INSTRUCTION = 'Respond with a one-paragraph-long pitch on the relevant' +
    ' city below, naming places of historical, cultural, or innovative significance.' +
    ' Start your sentences in a creative manner. Do not address the travellers directly.' 

  constructor(private readonly openaiService: OpenaiService) {}

  getPlaceDetails(placeName: string) {
    return this.openaiService.createCompletion(placeName, this.CONTEXT, this.INSTRUCTION)
  }
}

import { Injectable } from '@nestjs/common'
import OpenAI from 'openai'

@Injectable()
export class OpenaiService {
  private readonly openai: OpenAI

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_KEY
    })
  }

  async createCompletion(prompt: string, instruction: string, context: string) {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ 
        role: 'user', 
        content: `Context: ${context} \n\n\nInstruction: ${instruction} \n\n\n${prompt}` 
      }],
      max_tokens: 250,
      temperature: 0.2,
    })

    return completion.choices[0].message.content
  }
}

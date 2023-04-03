import { Body, Controller, Get, Post } from 'amala'
import Persona from '@/models/Persona'
import RewriteBody from '@/validators/RewriteBody.js'
import env from '@/helpers/env.js'

@Controller('/')
export default class LoginController {
  @Get('/')
  index() {
    return 'Nothing to see here, move along.'
  }
  @Post('/rewrite')
  async rewrite(@Body({ required: true }) { persona, text }: RewriteBody) {
    try {
      const { ChatGPTAPI } = await dynamicImport('chatgpt')
      const api = new ChatGPTAPI({
        apiKey: env.OPEN_AI_API_KEY,
        completionParams: { model: 'gpt-4' }, // or 'gpt-4-0314'
        maxModelTokens: 8100, // not 32000 because it's not yet available via API
        systemMessage: `You are GPT-4, a large language model trained by OpenAI. Rewrite this text without extending it more than 20% but less than ${textLength} as if you were ${Persona[persona]} without hashtags with markdown`,
      })

      const res = await api.sendMessage(text)

      return { text: res.text }
    } catch (e) {
      return { text, e }
    }
  }
}

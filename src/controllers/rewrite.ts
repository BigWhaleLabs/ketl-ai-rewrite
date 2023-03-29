import { Body, Controller, Get, Post } from 'amala'
import RewriteBody from '@/validators/RewriteBody.js'
import dynamicImport from '@/helpers/dynamicImport'
import env from '@/helpers/env.js'

@Controller('/')
export default class LoginController {
  @Get('/')
  async index() {
    const { ChatGPTAPI } = await dynamicImport('chatgpt')
    const api = new ChatGPTAPI({
      apiKey: env.OPEN_AI_API_KEY,
      completionParams: { model: 'gpt-4' }, // or 'gpt-4-0314'
      maxModelTokens: 8100, // not 32000 because it's not yet available for via API
      systemMessage: '',
    })

    const res = await api.sendMessage('Hello World!', { name: 'Elon_Musk' })

    return res.text
  }
  @Post('/rewrite')
  rewrite(@Body({ required: true }) { persona, text }: RewriteBody) {
    return { text, persona }
  }
}

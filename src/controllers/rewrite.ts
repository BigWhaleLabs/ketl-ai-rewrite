import { Body, Controller, Ctx, Get, Post } from 'amala'
import { ChatGPTAPI } from 'chatgpt'
import { Context } from 'koa'
import { internal } from '@hapi/boom'
import RewriteBody from '../validators/RewriteBody.js'
import env from '../helpers/env.js'

@Controller('/')
export default class RewriteController {
  @Get('/')
  index() {
    return 'Nothing to see here, move along.'
  }
  @Post('/rewrite')
  async rewrite(
    @Body({ required: true }) { persona, text }: RewriteBody,
    @Ctx() ctx: Context
  ) {
    try {
      const api = new ChatGPTAPI({
        apiKey: env.OPEN_AI_API_KEY,
        completionParams: { model: 'gpt-4' },
        maxModelTokens: 8100,
        systemMessage: `You are ${persona}. Rewrite this text without lengthening it or shortening more than 20% than ${text.length} characters. Do not use hashtags. Do not use markdown.`,
      })

      const res = await api.sendMessage(text)

      return { text: res.text }
    } catch (error) {
      console.error(error)
      return ctx.throw(
        internal(error instanceof Error ? error.message : `${error}`)
      )
    }
  }
}

import { Body, Controller, Get, Post } from 'amala'
import RewriteBody from '@/validators/RewriteBody'

@Controller('/')
export default class LoginController {
  @Get('/')
  index() {
    return 'Nothing to see here, move along.'
  }
  @Post('/rewrite')
  rewrite(@Body({ required: true }) { persona, text }: RewriteBody) {
    return { text, persona }
  }
}

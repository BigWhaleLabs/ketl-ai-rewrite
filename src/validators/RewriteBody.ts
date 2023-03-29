import { IsString } from 'amala'
import { PersonaKeys } from '@/models/Persona'

export default class RewriteBody {
  @IsString()
  persona!: PersonaKeys
  @IsString()
  text!: string
}

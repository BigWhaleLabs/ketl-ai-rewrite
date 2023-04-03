import { IsEnum, IsString } from 'amala'
import Persona from '../models/Persona'

export default class RewriteBody {
  @IsEnum(Persona)
  persona!: Persona
  @IsString()
  text!: string
}

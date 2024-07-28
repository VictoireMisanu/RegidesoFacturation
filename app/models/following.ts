import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Following extends BaseModel {
  @column({ isPrimary: true })
  declare idFollower: number

  @column({ isPrimary: true })
  declare idUser: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

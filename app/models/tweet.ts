import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { EnumType } from 'typescript'

export default class Tweet extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare Title: string

  @column()
  declare TweetCont: string

  @column()
  declare TweetAvatar: string

  @column()
  declare Comment: string

  @column()
  declare Retweet: string

  @column()
  declare Shares: string

  @column()
  declare Likes: string

  @column()
  declare Verified: boolean

  @column()
  declare User: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

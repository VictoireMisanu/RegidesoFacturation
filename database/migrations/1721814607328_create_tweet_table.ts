import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'Tweet'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.string('Title', 255).notNullable()
      table.string('TweetCont', 255).notNullable()
      table.string('TweetAvatar', 255).notNullable()
      table.integer('Comment', 20).notNullable()
      table.integer('Retweet', 20).notNullable()
      table.integer('Shares', 20).notNullable()
      table.integer('Likes', 20).notNullable()
      table.enum('Verified', ['true', 'false']).notNullable()
      table.integer('User').unsigned().references('User.id').notNullable()
      


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
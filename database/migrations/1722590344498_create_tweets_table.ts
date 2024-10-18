import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tweets'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.string('title', 255).notNullable()
      table.string('tweetCont', 255).notNullable()
      table.string('tweetAvatar', 255).notNullable()
      table.integer('comment', 20).notNullable()
      table.integer('retweet', 20).notNullable()
      table.integer('shares', 20).notNullable()
      table.integer('likes', 20).notNullable()
      table.enum('verified', ['true', 'false']).notNullable()
      table.integer('user').unsigned().references('users.id').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'User'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.string('User_name', 50).notNullable()
      table.date('BirthDate').notNullable()

      table.string('TypeAccount', 20).notNullable()
      table.string('Email', 255).notNullable().unique
      table.string('PassWord', 8).notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

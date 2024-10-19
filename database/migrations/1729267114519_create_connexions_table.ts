import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'connexions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable

      table.string('email', 255).notNullable().unique
      table.string('codeGenerated', 255).notNullable()
      table.integer('user').unsigned().references('users.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

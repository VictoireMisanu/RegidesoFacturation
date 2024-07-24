import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'Following'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('idFollower').unsigned().references('User.id').notNullable()
      table.integer('idUser').unsigned().references('User.id').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
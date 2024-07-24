import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'User'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.string('User_name', 50).notNullable()
      table.date('BirthDate').notNullable()
      table.integer('Account').unsigned().references('Account.id')
      
      

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
      
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
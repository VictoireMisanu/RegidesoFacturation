import vine from '@vinejs/vine'

export const createAccountValidator = vine.compile(
  vine.object({
    password: vine.string().fixedLength(8),
    name: vine.string().trim().fixedLength(5),

    email: vine.string().unique(async (db, value) => {
      const email = await db.from('User').where('Email', value).first()
      return !email
    }),
  })
)

import vine from '@vinejs/vine'

export const createAccountValidator = vine.compile(
  vine.object({
    code: vine.string().maxLength(255),
    nom: vine.string().trim().maxLength(50),

    email: vine.string().unique(async (db, value) => {
      const email = await db.from('users').where('email', value).first()
      return !email
    }),
  })
)

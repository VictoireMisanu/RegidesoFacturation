import vine from '@vinejs/vine'

export const createAccountValidator = vine.compile(
    vine.object({
      
      TypeAccount: vine.string().trim(),
      Email: vine.string().email(),
      PassWord: vine.string().trim().fixedLength(8),
      BirthDate: vine.date(),
      

    })
  )

  export const createUserValidator = vine.compile(
    vine.object({
      User_name: vine.string().trim(),
      BirthDate: vine.date(),
      Account: vine.number()
    })
    )
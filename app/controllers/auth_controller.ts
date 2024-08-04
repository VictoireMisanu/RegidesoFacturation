import type { HttpContext } from '@adonisjs/core/http'
import { createAccountValidator } from '../validators/auth.js'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

// import User from '../models/user.js'
// import Account from '../models/account.js'

export default class AuthController {
  // BringToHomePage(ctx: HttpContext) {
  //   // return ctx.response.redirect().toRoute('home')
  //   return ctx.response.redirect().toRoute('welcome')
  // }
  BringToTheFirstPage({ view }: HttpContext) {
    return view.render('pages/welcome')
  }
  async BringToLoginPage({ view }: HttpContext) {
    return view.render('pages/login')
  }
  SignUp({ view }: HttpContext) {
    return view.render('pages/signup')
  }
  ShowTweet({ view }: HttpContext) {
    return view.render('pages/home')
  }

  async registerAccountInfo({ request, response }: HttpContext) {
    const { name, email, password } = await request.validateUsing(createAccountValidator)

    await User.create({ name, email, password })
    return response.redirect('/login')
  }

  async authenticateUser({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    /**
     * Find a user by email. Return error if a user does
     * not exists
     */
    let user = await User.findBy('email', email)
    if (!user) {
      response.abort('Invalid credentials')
    }
    /**
     * Verify the password using the hash service
     */
    await hash.verify(password, password)
    user = await User.verifyCredentials(email, password)
    console.log('is authenticated')
    return response.redirect('/home')
  }
}

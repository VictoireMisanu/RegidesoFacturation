import type { HttpContext } from '@adonisjs/core/http'
import { createAccountValidator, createUserValidator } from '../validators/auth.js'
// import User from '../models/user.js'
// import Account from '../models/account.js'

export default class AuthController {
  BringToHomePage(ctx: HttpContext) {
    // return ctx.response.redirect().toRoute('home')
    return ctx.response.redirect().toRoute('welcome')
  }
  OnTheFirstPage({ view }: HttpContext) {
    return view.render('pages/welcome')
  }
  BringToLoginPage({ view }: HttpContext) {
    return view.render('pages/login')
  }
  SignUp({ view }: HttpContext) {
    return view.render('pages/signup')
  }

  async registerAccountInfo({ request }: HttpContext) {
    const { email, password, name } = await request.validateUsing(createAccountValidator)
    //await User.
  }
}

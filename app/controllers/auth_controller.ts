import type { HttpContext } from '@adonisjs/core/http'
import { createSignUpValidator } from '../validators/AuthValidator.js'
import User from '../models/user.js'

export default class AuthController {
  BringToHomePage(ctx: HttpContext) {
    // return ctx.response.redirect().toRoute('home')
    return ctx.response.redirect().toRoute('welcome')
  }
OnTheFirstPage({view}: HttpContext){
    return view.render('pages/welcome')
}
BringToLoginPage({view}: HttpContext){
    return view.render('pages/login')
}
SignUp({view}: HttpContext){
    return view.render('pages/signup')
}

async saveAccountInfo({request, response}:HttpContext){
  const {User_name, Email, PassWord} = await request.validateUsing(createSignUpValidator)
  
  await User.create({User_name, Email, PassWord})
  return response.redirect().toRoute('login')
}
}


import type { HttpContext } from '@adonisjs/core/http'
import { createAccountValidator, createUserValidator } from '../validators/AuthValidator.js'
import User from '../models/user.js'
import Account from '../models/account.js'

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
  const {TypeAccount, Email, PassWord} = await request.validateUsing(createAccountValidator)
  
  await Account.create({TypeAccount, Email, PassWord})
  return response.redirect().toRoute('login')
}
async saveUserInfo({request, response}:HttpContext){
  const {User_name, BirthDate, Account} = await request.validateUsing(createUserValidator)
  
  await User.create({User_name, BirthDate, Account})
  return response.redirect().toRoute('login')
}

// async registerAccountInfo({request, response, auth}:HttpContext){
//   return 
// }
}


import type { HttpContext } from '@adonisjs/core/http'

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
}


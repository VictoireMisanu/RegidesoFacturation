// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async RenderHomePage({ view }: HttpContext) {
    return view.render('pages/home')
  }
}

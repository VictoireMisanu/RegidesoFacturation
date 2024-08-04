/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const AuthController = () => import('../app/controllers/auth_controller.js')

router.get('/', [AuthController, 'BringToTheFirstPage']).use(middleware.guest())
router
  .get('/welcome', [AuthController, 'BringToTheFirstPage'])
  .as('welcome')
  .use(middleware.guest())
router.get('/login', [AuthController, 'BringToLoginPage']).as('login')
router.get('/signup', [AuthController, 'SignUp']).as('signup')
router.post('/login', [AuthController, 'authenticateUser'])
router.post('/signup', [AuthController, 'registerAccountInfo'])
router.get('/home', [AuthController, 'ShowTweet']).use(middleware.auth())
// router
//   .get('/home', async ({ view }) => {
//     return view.render('pages/home', { tweets })
//   })
//   .as('home')

// router
//   .get('/login', async ({ view }) => {
//     return view.render('pages/login')
//   })
//   .as('login')

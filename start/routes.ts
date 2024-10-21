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
const HomeController = () => import('../app/controllers/home_controller.js')

router.get('/', [AuthController, 'BringToTheFirstPage'])
router.get('/login', [AuthController, 'BringToLoginPage']).as('login')
router.get('/home', [HomeController, 'RenderHomePage'])

router.post('/', [AuthController, 'registerAccountInfo'])
router.post('/login', [AuthController, 'authenticateUser']).use(middleware.guest())
// router
//   .get('/welcome', [AuthController, 'BringToTheFirstPage'])
//   .as('welcome')
//   .use(middleware.guest())

// router.get('/signup', [AuthController, 'SignUp']).as('signup')

// router.get('/home', [AuthController, 'ShowTweet']).use(middleware.auth())

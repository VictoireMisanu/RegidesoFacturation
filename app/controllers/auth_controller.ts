import type { HttpContext } from '@adonisjs/core/http'
import { createAccountValidator } from '../validators/auth.js'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

const tweets = [
  {
    id: 1,
    name: 'CNN',
    username: '@CNN',
    tweetAvatar: 'images/tweet-profile-photo.png',
    date: '7m',
    text: 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    comments: 57,
    retweets: 144,
    likes: 184,
    shares: 0,
    verified: true,
  },
  {
    id: 2,
    name: 'The New York Times',
    username: '@nytimes',
    date: '2h',
    tweetAvatar: 'images/nytimes-avatar.png',
    text: 'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.',
    image: 'images/tweet-image.png',
    comments: 19,
    retweets: 48,
    likes: 484,
    shares: 0,
    verified: true,
  },
  {
    id: 3,
    name: 'Tweeter',
    date: 'Oct 29',
    username: '@twitter',
    tweetAvatar: 'images/tweeter-avatar.png',
    text: 'BIG NEWS lol jk still Twitter',
    comments: '6.8K',
    retweets: '36.6K',
    likes: '267.1K',
    shares: 0,
    verified: true,
  },
  {
    id: 4,
    name: 'Tweeter',
    date: 'Oct 04',
    username: '@twitter',
    tweetAvatar: 'images/tweeter-avatar.png',
    text: 'hello literally everyone',
    comments: '116.7K',
    retweets: '785.5K',
    likes: '3.3M',
    shares: 0,
    verified: true,
  },
  {
    id: 5,
    name: 'Twitter',
    username: '@twitter',
    date: '04 Oct',
    tweetAvatar: 'images/tweeter-avatar.png',
    text: 'hello literally everyone',
    image: 'images/tweet-image.png',
    comments: 19,
    retweets: 48,
    likes: 484,
    shares: 0,
    verified: true,
  },
]
export default class AuthController {
  // BringToHomePage(ctx: HttpContext) {
  //   // return ctx.response.redirect().toRoute('home')
  //   return ctx.response.redirect().toRoute('welcome')
  // }
  BringToTheFirstPage({ view, auth }: HttpContext) {
    const user = auth.user
    return view.render('pages/welcome')
  }
  async BringToLoginPage({ view }: HttpContext) {
    return view.render('pages/login')
  }
  SignUp({ view }: HttpContext) {
    return view.render('pages/signup')
  }
  ShowTweet({ view, auth }: HttpContext) {
    const user = auth.user
    return view.render('pages/home', { tweets, user })
  }

  async registerAccountInfo({ request, response, session }: HttpContext) {
    const { name, email, password } = await request.validateUsing(createAccountValidator)

    await User.create({ name, email, password })
    session.flash('success', 'connexion reussie')
    return response.redirect('/login')
  }

  async authenticateUser({ request, response, session, auth }: HttpContext) {
    // const { email, password } = request.only(['email', 'password'])
    /**
     * Find a user by email. Return error if a user does
     * not exists
     */
    // let user = await User.findBy('email', email)
    // if (!user) {
    //   response.flash('Invalid credentials')
    // }
    try {
      const { email, password } = request.only(['email', 'password'])
      let user = await User.findBy('email', email)

      await hash.verify(password, password)
      user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      console.log('is authenticated')
      session.flash('success', 'connexion reussie')

      return response.redirect('/home')
    } catch (error) {
      console.error(error)
      session.flash('error', "L'email ou le mot de passe est incorrect")
      return response.redirect().back()
    }

    /**
     * Verify the password using the hash service
     */
    // await hash.verify(password, password)
    // user = await User.verifyCredentials(email, password)
    // console.log('is authenticated')
    // return response.redirect('/home')
  }
}

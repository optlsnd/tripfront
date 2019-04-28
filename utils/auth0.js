import { WebAuth } from 'auth0-js'

export const webAuth = new WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID
})

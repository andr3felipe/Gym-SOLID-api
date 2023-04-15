import { env } from './env'
import { app } from './app'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    env.NODE_ENV === 'dev'
      ? console.log(`HTTP Server Running in Port ${env.PORT}`)
      : console.log('HTTP Server Running')
  })

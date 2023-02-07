// file: ~/server/api/auth/[...].ts
import FacebookProvider from 'next-auth/providers/facebook'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '../../services/prisma'
import { NuxtAuthHandler } from '#auth'
const config = useRuntimeConfig()

export default NuxtAuthHandler({
  // A secret string you defilogne, to ensure correct encryption

  secret: config.authSecret,
  adapter: PrismaAdapter(prisma),

  providers: [

    (FacebookProvider as any as { default: typeof FacebookProvider }).default({
      clientId: config.facebookClientID,
      clientSecret: config.facebookSecret

    })
  ],

  callbacks: {

    session({ session, user }) {
      if (session?.user) {
        session.user.id = user.id
      }
      return session
    }
  }

})

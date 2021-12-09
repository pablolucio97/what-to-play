import NextAuth from 'next-auth';
import Providers from 'next-auth/providers'
import connectDb from '../../../services/mongo'
import "regenerator-runtime/runtime"

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks:{
    async signIn(user, account, profile){
      const {email, name}  =  user
      try {
        await connectDb()
        const {db} = await connectDb()
        const hasUser = await db.collection('users').findOne({email})
        if(!hasUser) {
          const newUser = await hasUser.insertOne({
            email,
            name
          })
        }else{
          await hasUser.findOne({email})
        }
        return true
      } catch {
        return false
      }
    }
  }
})
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers'
import connectDb from '../../../services/mongo'

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
    async signIn(user){
      const {email, name}  =  user
      await connectDb()
      try {
        const {db} = await connectDb()
        const userCollection = db.collection('users')
        const hasUser = await userCollection.findOne({email})
        if(!hasUser) {
          const newUser = await userCollection.insertOne({
            email,
            name
          })
        }else{
          await userCollection.findOne({email})
        }
        return true
      } catch (error) {
        return false
      }
    }
  }
})
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers'
import { query as q } from 'faunadb'
import { fauna } from '../../../services/faunadb'

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
    callbacks: {
        async signIn(user) {
            const { email, name } = user;
            try {
                await fauna.query(
                    q.If(
                        q.Not(
                            q.Exists(
                                q.Match(q.Index("get_users"), q.Casefold(user.email))
                            )
                        ),
                        q.Create(q.Collection("users"), { data: { email, name } }),
                        q.Get(q.Match(q.Index("get_users"), q.Casefold(user.email)))
                    )
                );

                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
    }
})
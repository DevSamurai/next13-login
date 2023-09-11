import { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "email", type: "email", placeholder: "your best email" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        const user = { id: '1', name: 'J Smith', email: 'test@example.com', password: 'secret123' }

        if (user &&
            user?.email === credentials?.email &&
            user?.password === credentials?.password) {
          return user
        }

        return null
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error',
    // verifyRequest: '/auth/verify-request',
    // newUser: '/auth/new-user'
  },
}

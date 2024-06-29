const { default: NextAuth } = require("next-auth/next");
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret : process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60,
      updateAge: 24 * 60 * 60,
    },
  
    providers: [
      CredentialsProvider({
          credentials: {
            username: { label: "Email", type: "email", required: true, placeholder: "Enter your Email" },
            password: { label: "Password", type: "password", required: true, placeholder: "Enter your Password" },
          },
          async authorize(credentials){
              
              if(!credentials){
                return null;
              }

              const user = { id: "123", name: "John Doe", email: 'a@a.com', type: 'admin' };
              
              return user
          }
      })

    ],

    callbacks: {
      async jwt({ token, account, user }) {
        // console.log(account, token, user, 'jwt')
        // Persist the OAuth access_token and or the user id to the token right after signin
        if (account) {
          // console.log(token)
          token.type = user.type
        }
        return token
      },
      async session({ session, token }) {
        // console.log(session, user,token, 'session')
        session.user.type = token.type
        return session
      },
    }
    
  }

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
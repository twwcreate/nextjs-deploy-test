import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

export const Options = ({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
          }),
        CredentialsProvider({
            name: "Credentials",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
              // Add logic here to look up the user from the credentials supplied
              const user = { id: "1", name: "ali", password: "ali123" };
        
              if (credentials?.username == user.name && credentials.password == user.password) {
                return user;
              } else {
                return null;
      
              }
            },
          }),
        ],
    pages: {
            signIn:"/",  
        },
    session: {
          strategy: "jwt",
        },
    jwt: {
          secret: process.env.NEXTAUTH_SECRET,
        },
    });
    

const handler=NextAuth(Options)

export {handler as GET , handler as POST};

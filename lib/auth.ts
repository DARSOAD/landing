import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail} from "./data";



export const { auth, handlers, signIn, signOut } = NextAuth({

  session: {
    strategy: "jwt",
  },
  providers: [
     CredentialsProvider({
            credentials: {
              
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (credentials === null) return null;
                
                try {
                    const user = getUserByEmail(credentials?.email as string);
                    if (user) {
                        const isMatch = user?.password === credentials?.password;

                        if (isMatch) {
                            return {
                                id: user.email, // Use email as id or replace with a unique identifier
                                name: user.name,
                                email: user.email,
                                image: user.image,
                            };
                        } else {
                            throw new Error("Email or Password is not correct");
                        }
                    } else {
                        throw new Error("User not found");
                    }
                } catch (error) {
                    throw new Error(error as string);
                }
            },
        }),
   
  ],
});

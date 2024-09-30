import NextAuth, { Account, Profile } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"


const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLEINT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "openid email profile", // Certifique-se de solicitar os escopos corretos
        },
      },
    })
  ],
  debug: true,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("User:", user);
      console.log("Account:", account);
      console.log("Profile:", profile);
      return true; // ou false para rejeitar a autenticação
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token, user }) {
      console.log("Session callback");
      session.user = user;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("JWT callback");
      return token;
    },
  },
});

// Exporta métodos HTTP como GET e POST
export { handler as GET, handler as POST };
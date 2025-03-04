import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => token?.email === "admin@example.com" 
  },
});

export const config = { matcher: ["/admin/:path*"] };
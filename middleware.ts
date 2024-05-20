import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  ignoredRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe'],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
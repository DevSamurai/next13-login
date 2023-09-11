// next auth ref: https://next-auth.js.org/configuration/nextjs#basic-usage

// apply to all pages
export { default } from "next-auth/middleware"

// apply on selected pages or groups
export const config = {
  matcher: ['/dashboard']
}

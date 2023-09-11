import { getServerSession } from "next-auth"
import Link from "next/link"

import UserInfo from "./components/UserInfo"

export default async function Home() {
  const session = await getServerSession()

  return (
    <>
      {session ? (<UserInfo user={session.user} />) : (<div>Not logged in, <Link href="/api/auth/signin">click here to Sign in</Link>.</div>)}
    </>
  )
}

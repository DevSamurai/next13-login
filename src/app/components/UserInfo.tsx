import Image from "next/image";

interface UserInfoProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | undefined
}

export default function UserInfo({user}: UserInfoProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="rounded-lg bg-white p-6 text-lg font-bold text-black">
        Hello {user?.name} 👋
      </div>
      {user?.image ? (
        <Image
          className="rounded-full border-4 border-black shadow-black drop-shadow-xl dark:border-slate-500"
          src={user?.image}
          width={120}
          height={120}
          alt={user?.name ?? "User avatar"}
          priority={true}
        />
    ) : null}
    </div>
  )
}

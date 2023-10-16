'use client'

import { useSession } from 'next-auth/react'

import Image from 'next/image'

export const Profile = () => {
  const { data: session } = useSession()

  return (
    <div className="flex items-center gap-2">
      {session && (
        <>
          <Image
            className="rounded-full"
            src={`${session?.user?.image}`}
            alt="profile image"
            width={50}
            height={50}
          />
          <span className="text-sm font-bold">{session?.user?.name}</span>
        </>
      )}
    </div>
  )
}

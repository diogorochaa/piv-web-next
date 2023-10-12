'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

import { Button } from '@/components/Button'
import { ArrowRightIcon, GoogleIcon } from '@/components/Icons'
import { MainNav } from '@/components/MainNav'
import { mainNavConfig } from '@/config'
import Image from 'next/image'

export const Actions = () => {
  const { data: session } = useSession()

  return (
    <div className="flex items-center gap-2">
      {session ? (
        <>
          <MainNav items={mainNavConfig.mainNav} />
          <Button.Root onClick={() => signOut()}>
            <Button.Content text="Sair" />
            <Button.Icon icon={ArrowRightIcon} />
          </Button.Root>
          <Image
            className="rounded-full"
            src={`${session?.user?.image}`}
            alt="profile image"
            width={50}
            height={50}
          />
        </>
      ) : (
        <Button.Root onClick={() => signIn('google')}>
          <Button.Content text="Entrar com Google" />
          <Button.Icon icon={GoogleIcon} />
        </Button.Root>
      )}
    </div>
  )
}

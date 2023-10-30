'use client'

import { Button } from '@/components/Button'
import { GoogleIcon, SignOutIcon } from '@/components/Icons'
import { MainNav } from '@/components/MainNav'
import { mainNavConfig } from '@/config'
import { signIn, signOut, useSession } from 'next-auth/react'

export const Actions = () => {
  const { data: session } = useSession()

  return (
    <div className="flex items-center gap-2">
      {session ? (
        <>
          <MainNav items={mainNavConfig.mainNav} />
          <Button.Root onClick={() => signOut()}>
            <Button.Content text="Sair" />
            <Button.Icon icon={SignOutIcon} />
          </Button.Root>
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

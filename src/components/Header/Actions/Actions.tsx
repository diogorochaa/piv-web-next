'use client'

import { Button } from '@/components/Button'
import { SignInIcon } from '@/components/Icons'
import { useRouter } from 'next/navigation'

export const Actions = () => {
  const router = useRouter()
  const handleLogin = () => {
    router.push('/login')
  }

  return (
    <div className="flex items-center gap-2">
      <>
        <Button.Root onClick={handleLogin}>
          <Button.Content text="Entrar" />
          <Button.Icon icon={SignInIcon} />
        </Button.Root>
      </>
    </div>
  )
}

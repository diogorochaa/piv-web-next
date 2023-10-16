'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type ProtectedRouteProps = {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { data: session } = useSession()
  const router = useRouter()

  if (!session) {
    // Redirecionar o usuário para a página de login
    router.push('/login')
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {children}
    </div>
  )
}

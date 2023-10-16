import { ProtectedRoute } from '@/components/ProtectedRoute/ProtectedRoute'

export default function About() {
  return (
    <ProtectedRoute>
      <main>
        <div className="my-10">
          <h1>About</h1>
        </div>
      </main>
    </ProtectedRoute>
  )
}

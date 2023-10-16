import { ProtectedRoute } from '@/components/ProtectedRoute/ProtectedRoute'

export default function Units() {
  return (
    <ProtectedRoute>
      <main>
        <div className="my-10">
          <h1>Units</h1>
        </div>
      </main>
    </ProtectedRoute>
  )
}

import { Profile } from '@/components/Profile'
import { siteConfig } from '@/config'

export default function Login() {
  return (
    <main>
      <div className="my-10">
        <Profile items={siteConfig} />
      </div>
    </main>
  )
}

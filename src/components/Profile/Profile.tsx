import { SiteType } from '@/models'
import Image from 'next/image'

type ProfileProps = {
  items: SiteType
}

export const Profile = ({ items }: ProfileProps) => {
  return (
    <div>
      <Image 
        className='rounded-full'
        src="/assets/images/logo.png"
        alt="profile image"
        width={150}
        height={150}
        title="profile image"
        priority
      />

      <h1 className=' my-3 text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-purple-900 via-purple-600 to-violet-600'>{items.title}</h1>
      <p className='text-md'>{items.subtitle}</p>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/assets/images/logo.png" alt="logo" width={80} height={80} />
    </Link>
  )
}

import { mainNavConfig } from '@/config'

import { Logo } from '@/components/Logo'
import { MainNav } from '@/components/MainNav'


export const Header = () => {
  return (
    <header className='fixed z-40 flex h-16 w-full items-center shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out border-b border-violet-400'>
      <div className='flex h-full w-full items-center justify-between px-4'>
        <Logo />

        <MainNav items={mainNavConfig.mainNav} />
      </div>
    </header>
  )
}

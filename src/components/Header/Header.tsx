'use client'
import { mainNavConfig } from '@/config'

import { Logo } from '@/components/Logo'
import { MainNav } from '@/components/MainNav'
import { ButtonRoot } from '../Button/ButtonRoot'
import { ButtonIcon } from '../Button/ButtonIcon'
import { ArrowRightIcon } from '../Icons'
import { ButtonContent } from '../Button/ButtonContent'
import { Actions } from './Actions/Actions'


export const Header = () => {
 
  return (
    <header className='fixed z-40 flex h-16 w-full items-center shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out border-b border-violet-400'>
      <div className='flex h-full w-full items-center justify-between px-4'>
        <Logo />

        <MainNav items={mainNavConfig.mainNav} />
        <Actions />
      </div>
    </header>
  )
}

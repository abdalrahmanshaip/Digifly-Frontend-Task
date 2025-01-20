'use client'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = () => {
  const t = useTranslations('navbar')
  const locale = useLocale()
  const links = ['home', 'categories', 'contactUs', 'about']
  const pathname = usePathname()

  return (
    <div className='flex md:gap-x-4 justify-center items-center  xl:text-base md:text-sm text-xs  capitalize leading-6 '>
      {links.map((label, index) => {
        const href = label === 'home' ? `/${locale}` : `/${locale}/${label}`
        const isActive = pathname === href
        return (
          <Link
            key={index}
            href={`/${locale}`}
            className={`font-normal md:px-4 px-2 ${
              isActive ? 'text-our-green' : 'text-black'
            }`}
            aria-label={`Navigate to ${t(label)}`}
            title={`Navigate to ${t(label)}`}
          >
            {t(label)}
          </Link>
        )
      })}
    </div>
  )
}

export default NavLink

import type { FC } from 'react'
import type { NavCopy } from '../constants/translation-types'
import { memo } from 'react'

interface NavLinksProps {
  nav: NavCopy
  className: string
  onNavigate?: () => void
}

const LINKS = [
  ['#work', 'work'],
  ['#about', 'about'],
  ['#services', 'services'],
  ['#career', 'career'],
  ['#contact', 'contact'],
] as const

export const NavLinks: FC<NavLinksProps> = memo(({ nav, className, onNavigate }) => (
  <>
    {LINKS.map(([href, key]) => (
      <a key={href} href={href} onClick={onNavigate} className={className}>
        {nav[key]}
      </a>
    ))}
  </>
))

NavLinks.displayName = 'NavLinks'

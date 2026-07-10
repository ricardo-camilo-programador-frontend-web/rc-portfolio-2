import type { FC } from 'react'
import { memo } from 'react'

interface NavCopy {
  work: string
  about: string
  services: string
  career: string
  contact: string
}

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

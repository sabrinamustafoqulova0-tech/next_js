'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const path = usePathname()

  const links = [
    { href: '/', label: 'Главная' },
    { href: '/about', label: 'О нас' },
    { href: '/contact', label: 'Контакты' },
  ]

  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '16px 32px', borderBottom: '1px solid #eee' }}>
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          style={{
            textDecoration: 'none',
            fontWeight: path === link.href ? 'bold' : 'normal',
            color: path === link.href ? '#534AB7' : '#666',
          }}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
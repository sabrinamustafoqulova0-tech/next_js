'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const path = usePathname()

  return (
    <nav>
      <Link
        href="/"
        style={{ fontWeight: path === '/' ? 'bold' : 'normal' }}
      >
        Главная
      </Link>
    </nav>
  )
}
"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {useTranslations} from 'next-intl';


export default function Navbar() {
  const path = usePathname()
  
  const t = useTranslations('HomePage');
  return (
    <nav>
      <Link
        href="/"
        style={{ fontWeight: path === '/' ? 'bold' : 'normal' }}
      >
         <h1>{t('title')}</h1>
      </Link>
    </nav>
  )
}
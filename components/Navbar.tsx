'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {


  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '16px 32px', borderBottom: '1px solid #eee' }}>
      
        <Link href={"/"}>Home</Link>
        <Link href={"/todos"}>Todo</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>

    </nav>
  )
}
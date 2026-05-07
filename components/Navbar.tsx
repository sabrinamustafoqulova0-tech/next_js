import "../app/globals.css"
import Link from 'next/link'

export default function Navbar() {


  return (
    <nav style={{ display: 'flex', gap: '50px', justifyContent:"center", padding: '16px 32px', borderBottom: '1px solid #eee' }}>
      
        <Link className='text-[20px] text-purple-800 font-bold' href={"/"}>Home</Link>
        <Link className='text-[20px] text-purple-800 font-bold' href={"/contact"}>Contact</Link>

    </nav>
  )
}
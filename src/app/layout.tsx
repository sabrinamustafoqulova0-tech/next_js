import Prividers from '@/components/Provider'
import Navbar from '../../components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Prividers >
        <Navbar /> 
        {children}  
        </Prividers>
      </body>
    </html>
  )
}
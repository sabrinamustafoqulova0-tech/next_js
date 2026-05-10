import Providers from '@/components/Provider'
import Navbar from '../../components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
        <Navbar /> 
        {children}  
        </Providers>
      </body>
    </html>
  )
}
import Navbar from '../../component/Navbar'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar /> 
        {children}  
      </body>
    </html>
  )
}
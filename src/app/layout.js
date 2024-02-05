import { Sofia_Sans } from 'next/font/google'
import './globals.css'

const SofiaSans = Sofia_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Credential',
  description: 'Credential generator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={SofiaSans.className}>
        <main className=' bg-gradient-to-b from-gray-100 to-gray-500 '>
        {children}
        </main>
        </body>
    </html>
  )
}

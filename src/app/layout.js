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
      <body className={SofiaSans.className}>{children}</body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Image Gallery - @abrahamgalue',
  description: 'A simple image gallery built with Next.js and TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main className='max-w-6xl mx-auto py-8'>{children}</main>
      </body>
    </html>
  )
}

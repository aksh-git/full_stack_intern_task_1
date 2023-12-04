import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat Interface (Task 1)',
  description: 'A simple chat interface ui design assignment for full stack inter.. done by Akash @ydevakash.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        {/* Main Container */}
        <main className='container w-full max-w-7xl p-3 lg:px-4 space-y-2 min-h-screen'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}

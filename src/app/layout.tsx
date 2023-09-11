import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import AuthProvider from './context/AuthProvider'

import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Login',
  description: 'Next login example',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          <main className="flex min-h-screen items-start justify-center p-6">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}

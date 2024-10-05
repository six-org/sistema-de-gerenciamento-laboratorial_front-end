import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SessionWrapper from './components/SessionWrapper'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sistema de Gerenciamento Laboratorial',
  description: 'Um sistema com a finalidade de facilitar o gerenciamento dos laboratórios da UFERSA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="pt-br">
      <SessionWrapper>
          <body className={inter.className}>
              <main className="min-h-screen h-screen w-screen">
                    {children}
              </main>
          </body>
      </SessionWrapper>
    </html>
  )
}
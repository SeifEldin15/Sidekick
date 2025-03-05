import type { Metadata } from 'next'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import Providers from './SessionProvider'

export const metadata: Metadata = {
  title: 'Sidekick',
  description: 'Sidekick marketing agency.',
  icons: {
    icon: '/ico.png', // /public/favicon.ico
    // You can also specify different sizes
    // icon: [
    //   { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    //   { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    // ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

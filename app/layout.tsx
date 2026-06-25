import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '9–5 Reset — Movement breaks that fit between meetings',
  description:
    'Movement breaks that fit in the gaps. Built for the 9-to-5 reality.',
  generator: 'v0.app',
  verification: {
    google: 'SU1NrvjUc2Xg1s_RCFvsMxahQHqXMxSc5kQYKPu_wZM',
  },
  openGraph: {
    title: '9-5 Reset — Movement breaks that fit your calendar',
    description:
      'A Chrome extension that finds the gaps between your meetings and reminds you to move.',
    url: 'https://www.9to5reset.app',
    type: 'website',
    images: ['https://www.9to5reset.app/norm.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '9-5 Reset — Movement breaks that fit your calendar',
    description:
      'A Chrome extension that finds the gaps between your meetings and reminds you to move.',
    images: ['https://www.9to5reset.app/x-preview.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

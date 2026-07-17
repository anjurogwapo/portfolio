import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CyberCursor from './components/CyberCursor'
import LenisScroll from './components/LenisScroll'
import { ProfessionalCursor } from '@/app/components/ProfessionalCursor';
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Chim Anjuro - Portfolio',
  description: 'Professional portfolio showcasing diverse talents in modeling, acting, design, development, and more.',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background dark">
      <body className="font-sans antialiased">
        <LenisScroll>
          <CyberCursor />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LenisScroll>
      </body>
    </html>
  )
}

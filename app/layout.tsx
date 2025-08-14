import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pragyat Mishra - Mobile Frontend Developer',
  description: 'Portfolio of Pragyat Mishra, a results-driven Mobile Frontend Developer with 4 years of experience building scalable, user-centric applications.',
  keywords: 'Pragyat Mishra, Mobile Frontend Developer, React Native, Next.js, JavaScript, TypeScript, Portfolio',
  authors: [{ name: 'Pragyat Mishra' }],
  openGraph: {
    title: 'Pragyat Mishra - Mobile Frontend Developer',
    description: 'Portfolio of Pragyat Mishra, a results-driven Mobile Frontend Developer with 4 years of experience.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  )
}

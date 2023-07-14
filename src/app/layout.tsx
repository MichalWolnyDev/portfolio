import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Michał Wolny - Professional Frontend Developer from Poland.',
  description: 'I am a frontend developer with over four years of experience. So far, I have mainly worked with Vue.js, but I am also ready to work on projects using the React.js + Typescript stack. I am open to new experiences and I want to continue growing in my profession.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

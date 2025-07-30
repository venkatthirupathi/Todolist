import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TodoMaster - Your Personal Task Manager',
  description: 'A beautiful and intuitive todo app with authentication built with Next.js',
  keywords: 'todo, task manager, productivity, nextjs, react',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
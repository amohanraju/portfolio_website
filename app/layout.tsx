import './globals.css'
import Header from "@/components/header";
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adarsh | Personal Portfolio',
  description: 'Adarsh is a rising third year computer science student at UVA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-32`}>
        <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}

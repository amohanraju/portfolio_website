import './globals.css'
import Header from "@/components/header";
import { Inter } from 'next/font/google'

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
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-32`}>
        <div className= "bg-[#6ee7b7] absolute top-[-6rem] -z-10 right-[-5rem] h-[31.25rem] w-[35rem] rounded-full blur-[10rem] sm:w-[68.75rem]"> 
        
        </div>
        <div className= "bg-[#7dd3fc] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[35rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"> 
        
        </div>
        <Header />
        {children}
      </body>
    </html>
  )
}

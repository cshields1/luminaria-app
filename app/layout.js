import { Lora } from "next/font/google"
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

import Header from '@/components/globals/Header/Header'
import Footer from '@/components/globals/Footer/Footer'

import "./globals.scss"

const bodyFont = Lora({ subsets: ["latin"], display: 'swap' })

export const metadata = {
  title: "Luminaria Choir",
  description: "Luminaria is a chamber ensemble composed of all-women musicians, arrangers, teachers, and composers.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <Header />

        {children}

        <Footer />

        <PrismicPreview respositoryName={repositoryName} />
      </body>
    </html>
  )
}

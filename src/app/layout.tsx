import type { Metadata } from "next"

import "./globals.css"
import { Roboto } from "next/font/google"
import Footer from "@/components/Footer"

const font = Roboto({
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "notmycode",
  description: "No one knows the future",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}

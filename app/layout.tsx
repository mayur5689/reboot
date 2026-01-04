import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingActionButton from '@/components/FloatingActionButton'
import { ThemeProvider } from '@/components/ThemeProvider'

const branding = localFont({
  src: [
    {
      path: '../public/fonts/fonnts.com-Branding-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/fonnts.com-Branding-Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/fonnts.com-Branding-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/fonnts.com-Branding-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/fonnts.com-Branding-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-branding',
})

export const metadata: Metadata = {
  title: 'R3BOOT - Recovery & Performance',
  description: 'India\'s First Integrated Recovery Centre',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={branding.variable}>
      <body className={`${branding.className} antialiased font-sans dark:bg-[#0A0A0A] transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <FloatingActionButton />
        </ThemeProvider>
      </body>
    </html>
  )
}


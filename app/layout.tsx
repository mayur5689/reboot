import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingActionButton from '@/components/FloatingActionButton'
import { ThemeProvider } from '@/components/ThemeProvider'
import StudioLayoutWrapper from '@/components/StudioLayoutWrapper'
import BusinessSchema from '@/components/schema/BusinessSchema'

const gaId = process.env.NEXT_PUBLIC_GA_ID
const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-PQ4GT4DX'

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
  icons: {
    icon: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1773062628/R3boot_Logo_za7ymb.png',
    apple: 'https://res.cloudinary.com/dj7bot2uc/image/upload/v1773062628/R3boot_Logo_za7ymb.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={branding.variable}>
      <head>
        {gtmId ? (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        ) : null}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className={`${branding.className} antialiased font-sans dark:bg-[#0A0A0A] transition-colors duration-300`}>
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height={0}
              width={0}
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}
        <BusinessSchema />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <StudioLayoutWrapper
            navbar={<Navbar />}
            footer={<Footer />}
            fab={<FloatingActionButton />}
          >
            {/* hello  */}
            {children}
          </StudioLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}


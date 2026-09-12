import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export default function AquaTherapyDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={plusJakarta.variable}>
      <style>{`
        .demo-page, .demo-page h1, .demo-page h2, .demo-page h3, .demo-page h4 {
          font-family: var(--font-jakarta), system-ui, sans-serif;
        }
      `}</style>
      {children}
    </div>
  )
}

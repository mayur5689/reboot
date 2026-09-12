import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export default function CompressionTherapyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={plusJakarta.variable}>
      <style>{`
        .ct-page, .ct-page h1, .ct-page h2, .ct-page h3, .ct-page h4 {
          font-family: var(--font-jakarta), system-ui, sans-serif;
        }
      `}</style>
      {children}
    </div>
  )
}

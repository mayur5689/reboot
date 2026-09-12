import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export default function PhysiotherapyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={plusJakarta.variable}>
      <style>{`
        .physio-page, .physio-page h1, .physio-page h2, .physio-page h3, .physio-page h4 {
          font-family: var(--font-jakarta), system-ui, sans-serif;
        }
      `}</style>
      {children}
    </div>
  )
}

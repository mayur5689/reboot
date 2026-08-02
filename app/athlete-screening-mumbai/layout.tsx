import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export default function AthleteScreeningMumbaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={plusJakarta.variable}>
      <style>{`
        .as-page, .as-page h1, .as-page h2, .as-page h3, .as-page h4 {
          font-family: var(--font-jakarta), system-ui, sans-serif;
        }
      `}</style>
      {children}
    </div>
  )
}

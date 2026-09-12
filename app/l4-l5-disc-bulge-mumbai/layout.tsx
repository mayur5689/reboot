import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export default function L4L5DiscBulgeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={plusJakarta.variable}>
      <style>{`
        .disc-bulge-page, .disc-bulge-page h1, .disc-bulge-page h2, .disc-bulge-page h3, .disc-bulge-page h4 {
          font-family: var(--font-jakarta), system-ui, sans-serif;
        }
      `}</style>
      {children}
    </div>
  )
}

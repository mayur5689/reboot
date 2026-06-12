'use client'
import nextDynamic from 'next/dynamic'

const NextSanityStudio = nextDynamic(() => import('./_studio-inner'), { ssr: false })

export default function Studio() {
  return <NextSanityStudio />
}

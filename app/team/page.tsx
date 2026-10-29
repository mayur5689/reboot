import { permanentRedirect } from 'next/navigation'

export default function TeamIndexRedirect() {
  permanentRedirect('/about')
}

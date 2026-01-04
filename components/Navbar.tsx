import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-transparent">
      <div className="container mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/REBOOT FINAL LOGO_1.png"
            alt="R3BOOT Logo"
            width={140}
            height={45}
            className="h-9 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Navigation Links - Centered */}
        <div className="hidden lg:flex items-center space-x-10 text-white font-medium text-[15px] tracking-wide">
          <Link href="/about" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
            About us <ChevronDownIcon className="w-4 h-4" />
          </Link>
          <Link href="/services" className="hover:text-gray-300 transition-colors">
            Programs & Classes
          </Link>
          <Link href="/events" className="hover:text-gray-300 transition-colors">
            Events
          </Link>
          <Link href="/pages" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
            All Pages <ChevronDownIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          {/* Cart Icon */}
          <button className="hidden sm:flex relative text-white hover:text-gray-300 transition-colors">
            <ShoppingCartIcon className="w-6 h-6" />
            <span className="absolute -top-1.5 -right-1.5 bg-[#513394] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </button>

          {/* CTA Button */}
          <button
            className="hidden sm:block text-white font-semibold px-6 py-2.5 text-sm rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: '#513394' }}
          >
            Join us today
          </button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white focus:outline-none">
            <MenuIcon className="h-7 w-7" />
          </button>
        </div>
      </div>
    </nav>
  )
}

// Inline Icons
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function ShoppingCartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-xs tracking-tight"
            style={{ background: 'linear-gradient(135deg,#0d7377,#085c60)' }}
          >
            HRA
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-bold text-sm text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
              Health Research Academy
            </div>
            <div className="text-xs font-medium" style={{ color: '#0d7377' }}>Bangladesh</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === l.href
                  ? 'text-white'
                  : 'text-gray-600 hover:text-white hover:bg-teal-700'
              }`}
              style={pathname === l.href ? { background: '#0d7377' } : {}}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/contact"
            className="ml-3 px-5 py-2 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md"
            style={{ background: '#c9a84c' }}
          >
            Enroll Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                pathname === l.href ? 'text-white' : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={pathname === l.href ? { background: '#0d7377' } : {}}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/contact"
            className="block px-4 py-2.5 rounded-md text-sm font-semibold text-white text-center mt-2"
            style={{ background: '#c9a84c' }}
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  )
}

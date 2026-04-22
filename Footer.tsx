import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0c1a2e' }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              style={{ background: 'linear-gradient(135deg,#0d7377,#14b8a6)' }}
            >
              HRA
            </div>
            <div>
              <div className="font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Health Research Academy
              </div>
              <div className="text-xs font-medium" style={{ color: '#c9a84c' }}>Bangladesh</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Research, Training &amp; Supervision — building capacity for evidence-based health and social science practice across Bangladesh and beyond.
          </p>
          <div className="flex gap-3">
            {['F', 'Y', 'in'].map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-xs uppercase tracking-widest mb-5" style={{ color: '#c9a84c' }}>
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {[
              ['/', 'Home'],
              ['/about', 'About HRA'],
              ['/courses', 'All Courses'],
              ['/contact', 'Contact & Enroll'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm flex items-center gap-2 transition-colors hover:text-teal-300"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  <span style={{ color: '#0d7377' }}>›</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="font-semibold text-xs uppercase tracking-widest mt-8 mb-4" style={{ color: '#c9a84c' }}>
            Training Domains
          </h4>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Public Health · Biostatistics · Epidemiology · Nursing · Nutrition · Psychology · Behavioral Science · Health Economics · Environmental Health
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-xs uppercase tracking-widest mb-5" style={{ color: '#c9a84c' }}>
            Contact
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="mt-0.5 text-base" style={{ color: '#0d7377' }}>✉</span>
              <div>
                <div className="text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Email</div>
                <a
                  href="mailto:Hracademy@yahoo.com"
                  className="text-sm transition-colors hover:text-teal-300"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  Hracademy@yahoo.com
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-0.5 text-base" style={{ color: '#0d7377' }}>📞</span>
              <div>
                <div className="text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Phone / WhatsApp</div>
                <a
                  href="tel:+8801315001760"
                  className="text-sm transition-colors hover:text-teal-300"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  +88-01315001760
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-0.5 text-base" style={{ color: '#0d7377' }}>📍</span>
              <div>
                <div className="text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Location</div>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Kochuket, Dhaka, Bangladesh
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="border-t text-center py-5 text-xs"
        style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}
      >
        © {new Date().getFullYear()} Health Research Academy, Bangladesh. All rights reserved.
      </div>
    </footer>
  )
}

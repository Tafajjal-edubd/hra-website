import Link from 'next/link'

const objectives = [
  { icon: '🔬', title: 'Ethical, High-Quality Research', desc: 'Conduct rigorous quantitative and qualitative research in public health, mental health, and social sciences with the highest ethical standards.' },
  { icon: '🎓', title: 'Capacity-Building Training', desc: 'Structured programs equipping junior and mid-level researchers with practical skills in statistical analysis and scientific writing.' },
  { icon: '🌍', title: 'Research Collaboration', desc: 'Promote national and international partnerships between institutions, NGOs, government bodies, and civil society organizations.' },
  { icon: '📊', title: 'Evidence-Based Policy', desc: 'Translate research findings into actionable policy and practice recommendations for the health and development sectors.' },
  { icon: '🧠', title: 'Psychology Domain', desc: 'Extend research and training into psychology — covering behavioral science, mental health, and the psychosocial dimensions of health.' },
]

const team = [
  {
    initials: 'MJU', name: 'Dr. Md. Jamal Uddin',
    role: 'Lead Trainer — Biostatistics & Systematic Review',
    bio: 'Expert in systematic reviews, meta-analysis, and biostatistics. Lead trainer for SPSS, R Programming, and Systematic Literature Review courses.',
  },
  {
    initials: 'SR', name: 'Senior Research Faculty',
    role: 'SPSS & Quantitative Methods',
    bio: 'Specializes in quantitative research design, applied statistics, and SPSS training for health and social science researchers.',
  },
  {
    initials: 'RA', name: 'Research Faculty',
    role: 'R Programming & Data Science',
    bio: 'Specialist in R programming, ggplot2 data visualization, and reproducible research workflows for health data analysis.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg,#0c2a3a,#073a3e)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>
            About Us
          </p>
          <h1
            className="text-white text-4xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Health Research Academy
          </h1>
          <p className="max-w-xl text-base" style={{ color: 'rgba(255,255,255,.72)' }}>
            A private research and training organization based in Dhaka, Bangladesh — committed to
            building evidence-based research capacity across health and social sciences.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#0d7377' }}>
              Our Mission
            </p>
            <h2
              className="text-3xl font-bold mb-5 section-underline"
              style={{ fontFamily: 'Playfair Display, serif', color: '#0c1a2e' }}
            >
              Research, Training & Supervision
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Health Research Academy (HRA) is a private research and training organization dedicated
              to conducting <strong>ethical, high-quality research</strong> in public health, mental
              health, and social sciences — while building the research capacity of health professionals
              across Bangladesh.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              With a highly dedicated team of qualitative and quantitative researchers, data analysts,
              and experienced data collection personnel, HRA is capable of conducting any type of
              research — from community-based surveys to systematic reviews and meta-analyses.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {[
                { label: 'Type', val: 'Research & Training Org (Private)' },
                { label: 'Location', val: 'Kochuket, Dhaka, Bangladesh' },
                { label: 'Focus', val: 'Public Health · Psychology · Social Science' },
              ].map((i) => (
                <div
                  key={i.label}
                  className="rounded-xl p-4 border text-center"
                  style={{ borderColor: '#e2ddd6', background: '#f8f5f0' }}
                >
                  <div
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: '#0d7377' }}
                  >
                    {i.label}
                  </div>
                  <div className="text-xs text-gray-600 leading-tight">{i.val}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-8 text-white"
            style={{ background: 'linear-gradient(135deg,#0c2a3a,#073a3e)' }}
          >
            <h3
              className="text-xl font-bold mb-5"
              style={{ fontFamily: 'Playfair Display, serif', color: '#c9a84c' }}
            >
              Vision Statement
            </h3>
            <blockquote
              className="text-base leading-relaxed italic mb-6"
              style={{
                color: 'rgba(255,255,255,.85)',
                borderLeft: '3px solid #c9a84c',
                paddingLeft: '16px',
              }}
            >
              &ldquo;To be a leading research and training institution that advances health knowledge,
              strengthens research capacity, and promotes evidence-based practice across Bangladesh
              and the broader South Asian region.&rdquo;
            </blockquote>
            <div className="space-y-3">
              {[
                'Public & Mental Health Research',
                'Statistical Capacity Building',
                'Evidence-Based Practice',
                'Psychology & Behavioral Science',
              ].map((v) => (
                <div key={v} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,.7)' }}>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                    style={{ background: 'rgba(13,115,119,.5)' }}
                  >
                    ✓
                  </span>
                  {v}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16" style={{ background: '#f8f5f0' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#0d7377' }}>
              What We Stand For
            </p>
            <h2
              className="text-3xl font-bold mb-2"
              style={{ fontFamily: 'Playfair Display, serif', color: '#0c1a2e' }}
            >
              Core Objectives
            </h2>
            <div className="w-12 h-1 rounded-full mx-auto mt-3" style={{ background: '#0d7377' }} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((o) => (
              <div
                key={o.title}
                className="bg-white rounded-xl p-6 border hover:shadow-md transition-shadow"
                style={{ borderColor: '#e2ddd6' }}
              >
                <div className="text-3xl mb-4">{o.icon}</div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: '#0c1a2e', fontFamily: 'Playfair Display, serif' }}
                >
                  {o.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#0d7377' }}>
              Our People
            </p>
            <h2
              className="text-3xl font-bold mb-2"
              style={{ fontFamily: 'Playfair Display, serif', color: '#0c1a2e' }}
            >
              Faculty & Facilitators
            </h2>
            <div className="w-12 h-1 rounded-full mx-auto mt-3" style={{ background: '#0d7377' }} />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((t) => (
              <div
                key={t.initials}
                className="rounded-2xl border p-7 text-center hover:shadow-lg transition-all"
                style={{ borderColor: '#e2ddd6' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-white mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg,#0d7377,#085c60)' }}
                >
                  {t.initials}
                </div>
                <h4
                  className="font-bold text-base mb-1"
                  style={{ color: '#0c1a2e', fontFamily: 'Playfair Display, serif' }}
                >
                  {t.name}
                </h4>
                <p className="text-xs font-semibold mb-3" style={{ color: '#0d7377' }}>{t.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ background: 'linear-gradient(135deg,#0d7377,#073a3e)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Partner With Us
          </h2>
          <p className="mb-6 text-base" style={{ color: 'rgba(255,255,255,.75)' }}>
            We welcome collaborations with universities, hospitals, NGOs, and research institutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-lg font-semibold text-white hover:opacity-90 transition-all"
              style={{ background: '#c9a84c' }}
            >
              Contact Us
            </Link>
            <Link
              href="/courses"
              className="px-8 py-3.5 rounded-lg font-semibold border-2 text-white hover:bg-white/10 transition-all"
              style={{ borderColor: 'rgba(255,255,255,.4)' }}
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

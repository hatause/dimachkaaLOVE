import React from 'react';
import Link from 'next/link';

/* Animated SVG logo — Solana shield with chain links */
function SolanaLogo() {
  return (
    <div className="relative" style={{ width: 200, height: 200 }}>
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)',
          animation: 'pulse-glow 4s ease-in-out infinite',
        }}
      />
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
        {/* Outer ring */}
        <circle cx="100" cy="100" r="90" stroke="rgba(52,211,153,0.15)" strokeWidth="1" />
        <circle cx="100" cy="100" r="75" stroke="rgba(52,211,153,0.08)" strokeWidth="0.5" strokeDasharray="4 4" />

        {/* Shield shape */}
        <path
          d="M100 25 L155 55 L155 105 Q155 145 100 175 Q45 145 45 105 L45 55 Z"
          fill="rgba(52,211,153,0.06)"
          stroke="rgba(52,211,153,0.4)"
          strokeWidth="1.5"
        />

        {/* Inner shield highlight */}
        <path
          d="M100 40 L145 63 L145 103 Q145 137 100 162 Q55 137 55 103 L55 63 Z"
          fill="none"
          stroke="rgba(52,211,153,0.15)"
          strokeWidth="0.5"
        />

        {/* Solana-inspired parallelogram bars */}
        <path d="M72 80 L128 80 L122 90 L66 90 Z" fill="rgba(52,211,153,0.6)" />
        <path d="M66 100 L122 100 L128 110 L72 110 Z" fill="rgba(52,211,153,0.4)" />
        <path d="M72 120 L128 120 L122 130 L66 130 Z" fill="rgba(52,211,153,0.6)" />

        {/* Chain link dots */}
        <circle cx="60" cy="85" r="3" fill="rgba(52,211,153,0.5)" />
        <circle cx="140" cy="85" r="3" fill="rgba(52,211,153,0.5)" />
        <circle cx="60" cy="105" r="3" fill="rgba(52,211,153,0.3)" />
        <circle cx="140" cy="105" r="3" fill="rgba(52,211,153,0.3)" />
        <circle cx="60" cy="125" r="3" fill="rgba(52,211,153,0.5)" />
        <circle cx="140" cy="125" r="3" fill="rgba(52,211,153,0.5)" />

        {/* Connection lines */}
        <line x1="60" y1="85" x2="60" y2="105" stroke="rgba(52,211,153,0.2)" strokeWidth="0.5" />
        <line x1="60" y1="105" x2="60" y2="125" stroke="rgba(52,211,153,0.2)" strokeWidth="0.5" />
        <line x1="140" y1="85" x2="140" y2="105" stroke="rgba(52,211,153,0.2)" strokeWidth="0.5" />
        <line x1="140" y1="105" x2="140" y2="125" stroke="rgba(52,211,153,0.2)" strokeWidth="0.5" />
      </svg>

      {/* Orbiting particles */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'orbit 12s linear infinite' }}>
        <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(52,211,153,0.6)', boxShadow: '0 0 8px rgba(52,211,153,0.4)' }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'orbit-reverse 9s linear infinite' }}>
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(52,211,153,0.4)' }} />
      </div>
    </div>
  );
}

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
      {/* Left side: Authentication form */}
      <div className="flex w-full flex-col justify-center px-6 md:w-[48%] md:px-12 lg:px-20 relative">
        {/* Subtle background grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(52,211,153,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="mx-auto w-full max-w-[400px] relative z-10">
          {/* Mobile Logo */}
          <div className="flex items-center space-x-2.5 md:hidden mb-10">
            <div className="h-9 w-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #34d399, #059669)' }}>
              <svg className="h-5 w-5 text-[#0a1a14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight">VeriMint</span>
          </div>

          {children}
        </div>
      </div>

      {/* Right side: Branding / Marketing */}
      <div className="hidden md:flex w-[52%] flex-col justify-between overflow-hidden relative" style={{ background: 'linear-gradient(160deg, #0d2219 0%, #0a1a14 50%, #071510 100%)' }}>
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top-right glow */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 60%)' }} />
          {/* Bottom-left glow */}
          <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 60%)' }} />
          {/* Grid overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(52,211,153,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            animation: 'grid-fade 8s ease-in-out infinite',
          }} />
          {/* Corner accent lines */}
          <div className="absolute top-0 right-0 w-80 h-80">
            <svg viewBox="0 0 320 320" className="w-full h-full opacity-10">
              <line x1="320" y1="0" x2="0" y2="320" stroke="#34d399" strokeWidth="0.5" />
              <line x1="320" y1="40" x2="40" y2="320" stroke="#34d399" strokeWidth="0.3" />
              <line x1="320" y1="80" x2="80" y2="320" stroke="#34d399" strokeWidth="0.2" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-10 lg:p-16 h-full flex flex-col justify-between">
          {/* Header with logo */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #34d399, #059669)', boxShadow: '0 4px 20px rgba(52,211,153,0.3)' }}>
              <svg className="h-5 w-5 text-[#0a1a14]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>VeriMint</span>
          </div>

          {/* Center: Logo + Text */}
          <div className="flex flex-col items-center text-center -mt-8">
            <div style={{ animation: 'float 6s ease-in-out infinite' }}>
              <SolanaLogo />
            </div>

            <h1 className="text-3xl lg:text-[2.5rem] font-semibold tracking-tight mt-8 mb-5 leading-[1.2]" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-primary)' }}>
              Токенизируйте ваши<br />IP-активы на Solana
            </h1>
            <p className="text-[15px] leading-relaxed max-w-[440px]" style={{ color: 'var(--text-secondary)' }}>
              Веб-платформа для верификации правообладателей, токенизации IP-активов и их размещения на маркетплейсе с расчётами в Solana.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-2.5 mt-8">
              {['Верификация', 'Токенизация', 'Маркетплейс', 'Solana'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full"
                  style={{
                    background: 'rgba(52,211,153,0.08)',
                    border: '1px solid rgba(52,211,153,0.15)',
                    color: 'var(--accent)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer links */}
          <div className="flex gap-8 text-[13px] font-medium" style={{ color: 'var(--text-muted)' }}>
            <Link href="#" className="hover:text-emerald-400 transition-colors duration-200">Условия использования</Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors duration-200">Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

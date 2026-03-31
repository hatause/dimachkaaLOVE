'use client';
import Link from 'next/link';
import { AuthLayout } from '@/components/AuthLayout';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function SignUpPage() {
  return (
    <AuthLayout>
      <div className="mb-8">
        <h1
          className="text-[2rem] font-semibold tracking-tight mb-2"
          style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-primary)' }}
        >
          Создать аккаунт
        </h1>
        <p className="text-[15px]" style={{ color: 'var(--text-secondary)' }}>
          Присоединяйтесь к платформе VeriMint
        </p>
      </div>

      <form className="space-y-5 flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Полное имя"
          type="text"
          placeholder="Иван Иванов"
          required
          name="name"
        />
        <Input
          label="Email"
          type="email"
          placeholder="name@company.com"
          required
          name="email"
        />

        <div className="flex flex-col space-y-1.5 w-full">
          <label
            className="text-[13px] font-medium tracking-wide uppercase"
            style={{ color: 'var(--text-secondary)' }}
          >
            Пароль
          </label>
          <input
            type="password"
            placeholder="Минимум 8 символов"
            required
            name="password"
            className="flex h-12 w-full rounded-xl px-4 py-2.5 text-sm transition-all duration-200 outline-none"
            style={{
              backgroundColor: 'rgba(13, 34, 25, 0.8)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(52, 211, 153, 0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        <div className="pt-3">
          <Button fullWidth type="submit">
            Зарегистрироваться
          </Button>
        </div>
      </form>

      {/* Divider */}
      <div className="mt-8 flex items-center">
        <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
        <span className="mx-4 text-[11px] tracking-widest uppercase font-medium" style={{ color: 'var(--text-muted)' }}>
          или
        </span>
        <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
      </div>

      {/* Google OAuth */}
      <div className="mt-6">
        <Button variant="outline" fullWidth>
          <svg className="mr-2.5 h-4 w-4" viewBox="0 0 488 512" fill="currentColor">
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
          Google
        </Button>
      </div>

      {/* Wallet */}
      <div className="mt-3">
        <Button variant="outline" fullWidth>
          <svg className="mr-2.5 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M2 10h20" />
            <circle cx="17" cy="14" r="1" fill="currentColor" />
          </svg>
          Solana Wallet
        </Button>
      </div>

      <p className="mt-6 text-[12px] text-center leading-relaxed" style={{ color: 'var(--text-muted)' }}>
        Регистрируясь, вы принимаете{' '}
        <Link href="#" className="underline underline-offset-4 hover:text-emerald-400 transition-colors" style={{ textDecorationColor: 'rgba(52,211,153,0.3)' }}>
          Условия использования
        </Link>
        {' '}и{' '}
        <Link href="#" className="underline underline-offset-4 hover:text-emerald-400 transition-colors" style={{ textDecorationColor: 'rgba(52,211,153,0.3)' }}>
          Политику конфиденциальности
        </Link>.
      </p>

      <div className="mt-6 text-center text-sm" style={{ color: 'var(--text-secondary)' }}>
        Уже есть аккаунт?{' '}
        <Link
          href="/auth/sign-in"
          className="font-semibold transition-colors duration-200"
          style={{ color: 'var(--accent)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-hover)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--accent)')}
        >
          Войти
        </Link>
      </div>
    </AuthLayout>
  );
}

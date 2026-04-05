import Link from 'next/link'

const navItems = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/kyc', label: 'KYC' },
  { href: '/admin/claims', label: 'Claims' },
  { href: '/admin/users', label: 'Users' },
  { href: '/admin/settings', label: 'Settings' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 sticky top-0 z-40 bg-background/90 backdrop-blur">
        <div className="container mx-auto px-4 lg:px-8 h-14 flex items-center justify-between">
          <Link href="/admin" className="font-semibold tracking-tight text-primary">
            VeriMint Admin
          </Link>
          <nav className="flex items-center gap-2 text-sm overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-md border border-border/60 hover:border-primary/40 hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 lg:px-8 py-8">{children}</main>
    </div>
  )
}

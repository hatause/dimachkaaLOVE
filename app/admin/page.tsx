import Link from 'next/link'
import { ShieldCheck, ClipboardList, CheckCircle2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const kpis = [
  { label: 'KYC Queue', value: '43', tone: 'pending', icon: ClipboardList },
  { label: 'IP Claims Review', value: '17', tone: 'review', icon: ShieldCheck },
  { label: 'Approved Today', value: '12', tone: 'approved', icon: CheckCircle2 },
]

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 lg:px-8 py-8 space-y-6">
        <section className="space-y-2">
          <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10">
            Admin panel
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold">Review Control Center</h1>
          <p className="text-muted-foreground max-w-2xl">
            Управляйте очередями KYC и IP-review до допуска к tokenization и размещению на marketplace.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          {kpis.map((item) => (
            <Card key={item.label}>
              <CardHeader className="pb-2">
                <CardDescription>{item.label}</CardDescription>
                <CardTitle className="text-3xl">{item.value}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <StatusPill tone={item.tone} />
                <item.icon className="h-5 w-5 text-primary" />
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>KYC Queue</CardTitle>
              <CardDescription>Просмотр и модерация KYC-заявок.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/admin/kyc">Открыть KYC очередь</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>IP Claims Review</CardTitle>
              <CardDescription>Решения по claim перед tokenization.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/admin/claims">Открыть IP review</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

function StatusPill({ tone }: { tone: string }) {
  if (tone === 'approved') {
    return <Badge className="bg-emerald-500/15 text-emerald-300 border-emerald-500/30">approved</Badge>
  }

  if (tone === 'review') {
    return <Badge className="bg-amber-500/15 text-amber-300 border-amber-500/30">under review</Badge>
  }

  return <Badge variant="outline">pending</Badge>
}

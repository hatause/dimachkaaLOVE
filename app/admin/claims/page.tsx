import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const claimRows = [
  { id: 'CLM-1009', asset: 'NanoSeal Patent', issuer: 'Synthex Labs', score: '92', status: 'under review' },
  { id: 'CLM-1014', asset: 'BioInk Formula', issuer: 'Helix Form', score: '88', status: 'prechecked' },
  { id: 'CLM-1030', asset: 'LensAI Patent', issuer: 'Optix Labs', score: '79', status: 'needs input' },
]

export default function AdminClaimsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 lg:px-8 py-8 space-y-6">
        <section className="space-y-2">
          <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10">Admin · IP Review</Badge>
          <h1 className="text-3xl lg:text-4xl font-bold">IP Claims Moderation</h1>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Claims на модерации</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Claim ID</TableHead>
                  <TableHead>Asset</TableHead>
                  <TableHead>Issuer</TableHead>
                  <TableHead>Pre-check score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Decision</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {claimRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.id}</TableCell>
                    <TableCell>{row.asset}</TableCell>
                    <TableCell>{row.issuer}</TableCell>
                    <TableCell>{row.score}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">{row.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm">Approve</Button>
                        <Button size="sm" variant="outline">Need docs</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

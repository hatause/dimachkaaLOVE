import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const kycRows = [
  { user: 'A. Beketov', country: 'KZ', level: 'L2', submitted: '02 Apr 2026', status: 'manual review' },
  { user: 'M. Tanaka', country: 'JP', level: 'L1', submitted: '02 Apr 2026', status: 'pending' },
  { user: 'S. Ivanova', country: 'DE', level: 'L2', submitted: '01 Apr 2026', status: 'needs input' },
]

export default function AdminKycQueuePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 lg:px-8 py-8 space-y-6">
        <section className="space-y-2">
          <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10">Admin · KYC Queue</Badge>
          <h1 className="text-3xl lg:text-4xl font-bold">KYC Review Queue</h1>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Заявки на проверку</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kycRows.map((row) => (
                  <TableRow key={`${row.user}-${row.submitted}`}>
                    <TableCell className="font-medium">{row.user}</TableCell>
                    <TableCell>{row.country}</TableCell>
                    <TableCell>{row.level}</TableCell>
                    <TableCell>{row.submitted}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">{row.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Review</Button>
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

import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Window Replacement Irving TX',
  description: 'Terms of Service for Replacement Windows of Irving. Read our terms and conditions.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />


      <PageFooter />
    </div>
  )
}

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

      <section className="py-20 pt-32 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl text-charcoal-900 font-light mb-6">
            Terms of Service
          </h1>
          <p className="text-charcoal-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-charcoal-600">
              <div>
                <h2 className="text-2xl font-light text-charcoal-900 mb-4">Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use this website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-charcoal-900 mb-4">Use of Website</h2>
                <p className="leading-relaxed">
                  This website is provided for informational purposes about our window and door installation services. You may use this website for lawful purposes only. You agree not to use the website in any way that could damage, disable, or impair the website or interfere with any other party&apos;s use of the website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-charcoal-900 mb-4">Services</h2>
                <p className="leading-relaxed">
                  We provide window and door installation services in Irving, TX and surrounding areas. All services are subject to availability and scheduling. Project timelines, costs, and specifications will be outlined in individual project quotes and contracts.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-charcoal-900 mb-4">Quotes and Estimates</h2>
                <p className="leading-relaxed">
                  Quotes provided through this website or in-person consultations are estimates only. Final pricing may vary based on actual project requirements, site conditions, and product selections. All quotes are valid for 30 days unless otherwise specified.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-charcoal-900 mb-4">Intellectual Property</h2>
                <p className="leading-relaxed">
                  The content on this website, including text, graphics, logos, images, and software, is the property of Replacement Windows of Irving or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or create derivative works from this content without permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-charcoal-900 mb-4">Limitation of Liability</h2>
                <p className="leading-relaxed">
                  Replacement Windows of Irving shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of this website or our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-charcoal-900 mb-4">Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website following any changes constitutes acceptance of those changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-charcoal-900 mb-4">Contact Information</h2>
                <p className="leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-4">
                  Email: info@replacementwindowsirving.com<br />
                  Phone: 972-284-7995<br />
                  Address: 909 Hidden Ridge Dr #180, Irving, TX 75038
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  )
}

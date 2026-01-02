import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Window Replacement Irving TX',
  description: 'Privacy Policy for Replacement Windows of Irving. Learn how we protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <section className="py-20 pt-32 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-heading-serif text-4xl md:text-5xl text-charcoal-900 font-light mb-6">
            Privacy Policy
          </h1>
          <p className="text-charcoal-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-charcoal-600">
              <div>
                <h2 className="text-2xl font-light text-charcoal-900 mb-4">Information We Collect</h2>
                <p className="leading-relaxed">
                  We collect information you provide directly to us, including your name, email address, phone number, property address, and details about your window or door project when you fill out our contact form or communicate with us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-charcoal-900 mb-4">How We Use Your Information</h2>
                <p className="leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Respond to your inquiries and provide quotes</li>
                  <li>Schedule consultations and installations</li>
                  <li>Communicate with you about your project</li>
                  <li>Improve our services</li>
                  <li>Send you relevant information about our products and services (you may opt out at any time)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-light text-charcoal-900 mb-4">Information Sharing</h2>
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, conducting services, or servicing you, provided they agree to keep this information confidential.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-charcoal-900 mb-4">Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-charcoal-900 mb-4">Your Rights</h2>
                <p className="leading-relaxed">
                  You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-light text-charcoal-900 mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
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

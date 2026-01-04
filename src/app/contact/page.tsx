'use client'

import { useState, useEffect, useRef, FormEvent } from 'react'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'
import { servicesData } from '@/data'

declare global {
  interface Window {
    _turnstileLoaded?: boolean;
    turnstile?: { render: (el: HTMLElement, opts: Record<string, unknown>) => string; execute: (id: string, opts?: Record<string, unknown>) => Promise<string>; reset: (id: string) => void; };
  }
}

function loadTurnstile(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window._turnstileLoaded) return Promise.resolve();
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]');
    if (existing) { window._turnstileLoaded = true; return resolve(); }
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"; s.async = true; s.defer = true;
    s.onload = () => { window._turnstileLoaded = true; resolve(); };
    s.onerror = () => reject(new Error("Turnstile failed"));
    document.head.appendChild(s);
  });
}

type FormData = { fullName: string; phone: string; email: string; service: string; address: string; timeline: string; description: string; };

export default function ContactPage() {
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<FormData>({ fullName: '', phone: '', email: '', service: '', address: '', timeline: '', description: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const [turnstileId, setTurnstileId] = useState<string | null>(null);
  const [turnstileReady, setTurnstileReady] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const windowServices = servicesData.filter(s => s.category === 'Windows');
  const doorServices = servicesData.filter(s => s.category === 'Doors');

  useEffect(() => {
    let cancelled = false;
    const t = setTimeout(async () => {
      if (cancelled || !siteKey) return;
      try {
        await loadTurnstile();
        if (cancelled || !window.turnstile || !captchaRef.current) return;
        const id = window.turnstile.render(captchaRef.current, { sitekey: siteKey, size: "normal", theme: "dark", callback: () => setTurnstileReady(true), "error-callback": () => setTurnstileReady(false) });
        setTurnstileId(id); setTurnstileReady(true);
      } catch (e) { console.error("Turnstile init failed:", e); }
    }, 500);
    return () => { cancelled = true; clearTimeout(t); };
  }, [siteKey]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!formData.service.trim()) newErrors.service = "Required";
    if (!formData.address.trim()) newErrors.address = "Required";
    if (!formData.timeline.trim()) newErrors.timeline = "Required";
    if (!formData.description.trim()) newErrors.description = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) { setFeedback("Please complete all required fields."); return; }
    setStatus('submitting'); setErrors({}); setFeedback('');
    try {
      if (siteKey && (!turnstileReady || !window.turnstile || !turnstileId)) { setFeedback("Please complete security verification."); setStatus("error"); return; }
      let turnstileToken = '';
      if (siteKey && window.turnstile && turnstileId) {
        try {
          window.turnstile.reset(turnstileId);
          turnstileToken = await new Promise<string>((resolve, reject) => { window.turnstile!.execute(turnstileId, { callback: (t: string) => resolve(t), "error-callback": () => reject(new Error("error")) }); });
        } catch { setFeedback("Security verification failed."); setStatus("error"); window.turnstile?.reset(turnstileId); return; }
      }
      const response = await fetch('/api/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: formData.fullName, fullName: formData.fullName, email: formData.email, phone: formData.phone.replace(/\D/g, ''), service: formData.service, address: formData.address, timeline: formData.timeline, description: formData.description, turnstileToken }) });
      if (response.ok) {
        setFormData({ fullName: '', phone: '', email: '', service: '', address: '', timeline: '', description: '' });
        if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId);
        setStatus('success'); setFeedback('Thank you! An Irving window specialist will contact you within one business day.');
      } else {
        const err = await response.json().catch(() => ({ error: 'Failed' }));
        setFeedback(err.error || 'Failed to submit.'); setStatus('error');
        if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId);
      }
    } catch { setFeedback("An error occurred."); setStatus("error"); if (window.turnstile && turnstileId) window.turnstile.reset(turnstileId); }
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      <section className="hero-section py-20 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-heading-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-900 font-light mb-6">Contact Us</h1>
          <p className="text-charcoal-600 text-xl max-w-2xl mx-auto">Get a free consultation for your window and door project in Irving, TX</p>
        </div>
      </section>
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light mb-8">Get in Touch</h2>
              <p className="text-charcoal-600 text-base leading-relaxed mb-8">Ready to upgrade your windows or doors? Fill out the form and we&apos;ll get back to you within 24 hours with a free, no-obligation quote.</p>
              <div className="space-y-6">
                <div><h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-2">Phone</h3><a href="tel:972-284-7995" className="text-charcoal-600 hover:text-charcoal-900">972-284-7995</a></div>
                <div><h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-2">Email</h3><a href="mailto:info@replacementwindowsirving.com" className="text-charcoal-600 hover:text-charcoal-900">info@replacementwindowsirving.com</a></div>
                <div><h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-2">Address</h3><p className="text-charcoal-600">909 Hidden Ridge Dr #180<br />Irving, TX 75038</p></div>
                <div><h3 className="text-[13px] tracking-[0.15em] uppercase font-medium text-charcoal-900 mb-2">Hours</h3><p className="text-charcoal-600">Open 24/7 - Available for Emergency Service</p></div>
              </div>
            </div>
            <div className="bg-charcoal-500 p-8 md:p-12">
              <h3 className="text-heading-serif text-2xl text-white font-light mb-6">Request a Free Quote</h3>
              {status === 'success' && <div className="bg-green-500 text-white p-4 rounded mb-6">{feedback}</div>}
              {status === 'error' && <div className="bg-red-500 text-white p-4 rounded mb-6">{feedback}</div>}
              <form onSubmit={handleSubmit} className="space-y-4">
                <fieldset disabled={status === 'submitting'} className="space-y-4">
                  <div><label htmlFor="fullName" className="block text-white text-sm mb-2">Full Name *</label><input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 bg-white border-0 rounded text-charcoal-900" placeholder="John Smith" />{errors.fullName && <p className="text-red-300 text-sm mt-1">{errors.fullName}</p>}</div>
                  <div><label htmlFor="phone" className="block text-white text-sm mb-2">Phone Number *</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 bg-white border-0 rounded text-charcoal-900" placeholder="(972) 284-7995" />{errors.phone && <p className="text-red-300 text-sm mt-1">{errors.phone}</p>}</div>
                  <div><label htmlFor="email" className="block text-white text-sm mb-2">Email Address *</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white border-0 rounded text-charcoal-900" placeholder="john@example.com" />{errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}</div>
                  <div><label htmlFor="service" className="block text-white text-sm mb-2">Service Interested In *</label><select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 bg-white border-0 rounded text-charcoal-900"><option value="">Select a service...</option><optgroup label="Windows">{windowServices.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}</optgroup><optgroup label="Doors">{doorServices.map(s => <option key={s.slug} value={s.name}>{s.name}</option>)}</optgroup><option value="Not Sure / Multiple Services">Not Sure / Multiple Services</option></select>{errors.service && <p className="text-red-300 text-sm mt-1">{errors.service}</p>}</div>
                  <div><label htmlFor="address" className="block text-white text-sm mb-2">Property Address *</label><input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-3 bg-white border-0 rounded text-charcoal-900" placeholder="123 Main St, Irving, TX 75038" />{errors.address && <p className="text-red-300 text-sm mt-1">{errors.address}</p>}</div>
                  <div><label htmlFor="timeline" className="block text-white text-sm mb-2">Project Timeline *</label><select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} required className="w-full px-4 py-3 bg-white border-0 rounded text-charcoal-900"><option value="">Select timeline...</option><option value="ASAP">ASAP</option><option value="Within 1 month">Within 1 month</option><option value="Within 3 months">Within 3 months</option><option value="Within 6 months">Within 6 months</option><option value="6+ months">6+ months</option><option value="Just researching">Just researching</option></select>{errors.timeline && <p className="text-red-300 text-sm mt-1">{errors.timeline}</p>}</div>
                  <div><label htmlFor="description" className="block text-white text-sm mb-2">Project Description *</label><textarea id="description" name="description" value={formData.description} onChange={handleChange} required rows={4} className="w-full px-4 py-3 bg-white border-0 rounded text-charcoal-900" placeholder="Tell us about your project..." />{errors.description && <p className="text-red-300 text-sm mt-1">{errors.description}</p>}</div>
                  {siteKey && <div className="flex justify-center"><div ref={captchaRef} style={{ minHeight: '78px' }} /></div>}
                  <button type="submit" disabled={status === 'submitting' || !!(siteKey && !turnstileReady)} className="w-full btn-white py-4 disabled:opacity-50">{status === 'submitting' ? 'Sending...' : 'Send Message'}</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-heading-serif text-3xl md:text-4xl text-charcoal-900 font-light text-center mb-12">Visit Us</h2>
          <div className="aspect-video w-full max-w-4xl mx-auto">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.3!2d-96.97!3d32.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDUyJzEzLjIiTiA5NsKwNTgnMTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
      <PageFooter />
    </div>
  )
}

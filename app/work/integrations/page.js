import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { CaseStudyFooter, SiteFooter } from '../../caseStudiesData';

export const metadata = {
  title: 'Turning a technical bottleneck into a guided setup: Jade Parrish',
  description: 'A guided, self-serve flow that simplifies complex technical connections across seven integrations.',
};

function SectionLabel({ children }) {
  return (
    <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-6">
      {children}
    </h2>
  );
}

function Bullets({ items }) {
  return (
    <ul className="space-y-2.5 text-neutral-700 text-sm">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="text-[#A47864]">&middot;</span> {item}
        </li>
      ))}
    </ul>
  );
}

function InlineLink({ href, children }) {
  return (
    <Link
      href={href}
      className="underline underline-offset-4 decoration-neutral-500 hover:decoration-[#8D6553] hover:text-[#8D6553] transition-colors"
    >
      {children}
    </Link>
  );
}

function ImagePlaceholder({ tint, caption }) {
  return (
    <div className={`aspect-[16/9] w-full rounded-sm border border-neutral-200/80 ${tint} flex flex-col items-center justify-center gap-2 my-10`}>
      <ImageIcon className="w-6 h-6 text-neutral-600" strokeWidth={1.5} />
      <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-medium">
        Visual coming soon
      </p>
      <p className="text-xs text-neutral-600">{caption}</p>
    </div>
  );
}

export default function IntegrationsCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">
      {/* Top Navigation */}
      <header className="max-w-3xl mx-auto px-6 sm:px-8 py-8 sm:py-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-neutral-500 hover:text-[#8D6553] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to selected work
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-24">
        {/* Title */}
        <section className="pb-8 border-b border-neutral-200/80">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-4">
            Product Design &middot; Design Lead
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Turning a technical bottleneck into a guided setup.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
            A guided, self-serve flow that simplifies complex technical connections for
            brands and internal teams.
          </p>
        </section>

        {/* At a Glance */}
        <section className="py-8 border-b border-neutral-200/80">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Role</p>
              <p className="text-sm font-medium text-neutral-900">Design Lead</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Worked with</p>
              <p className="text-sm font-medium text-neutral-900">Commercial, Product, Engineering</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Covers</p>
              <p className="text-sm font-medium text-neutral-900">Seven integrations, one pattern</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Outcome</p>
              {/* TODO: add a real figure if you can get one (e.g. setup time, fewer Engineering requests) */}
              <p className="text-sm font-medium text-neutral-900">A repeatable, self-serve setup flow</p>
            </div>
          </div>
        </section>

        {/* Setting the Scene */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Setting the Scene</SectionLabel>
          <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
            <p>
              As part of the new Campaign Manager redesign, I led the redefinition of
              SoPost&rsquo;s integration setup, an essential part of campaign configuration
              that had never once been consistent.
            </p>
            <p>
              Integrations let SoPost sync data with fulfilment partners, CRMs and ad
              platforms such as Meta, Klaviyo and Bazaarvoice. The legacy setup was
              confusing, error-prone and heavily dependent on Engineering support.
            </p>
            <p>
              The goal was a guided, self-serve flow that felt as intuitive as the modern
              SaaS tools people already use, while still meeting the technical and
              security requirements of each system.
            </p>
          </div>

          <ImagePlaceholder tint="bg-[#E3E6E1]" caption="Integrations Hub: available connections and their status" />
        </section>

        {/* Understanding the Problem */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Understanding the Problem</SectionLabel>
          <p className="text-neutral-700 leading-relaxed mb-4">
            The previous integration flow was fragmented, inconsistent and opaque.
          </p>
          <Bullets
            items={[
              'Terminology varied between integrations',
              'Validation feedback was unclear or missing',
              'People had no confidence about whether setup had succeeded or failed',
              'Engineering had to step in regularly to complete configurations',
            ]}
          />
        </section>

        {/* Process */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Process</SectionLabel>
          <p className="text-neutral-700 leading-relaxed mb-4">
            I mapped the whole flow end to end, to see where friction and validation errors
            occurred.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-4">
            To design a consistent model, I reviewed the technical documentation for seven
            integrations, analysing each system&rsquo;s data and permission requirements.
            That shaped one flow pattern that could scale across different connection
            types, from Meta to Bazaarvoice, with the same logic and visual hierarchy.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            I worked closely with Commercial, Product and Engineering to balance
            simplicity for the person setting it up against technical accuracy.
          </p>
        </section>

        {/* Designing the New Flow */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Designing the New Flow</SectionLabel>
          <p className="text-neutral-700 leading-relaxed mb-4">
            The redesign aimed to:
          </p>
          <Bullets
            items={[
              'Introduce a familiar, guided setup experience',
              'Standardise terminology, validation and feedback',
              'Provide real-time checks for errors and permissions',
              'Reduce setup time and dependence on Engineering',
            ]}
          />
          <p className="text-neutral-700 leading-relaxed mt-6 mb-4">
            I explored reusable SaaS patterns that would feel familiar and trustworthy:
          </p>
          <Bullets
            items={[
              'A central Integrations Hub showing available connections and their status',
              'Step-by-step flows with contextual help and validation',
              'Pre-warm states and permission prompts modelled on Intercom and Meta',
              'Clear empty, loading and success states for reassurance',
              'Multi-select and multi-account handling for complex scenarios',
            ]}
          />
          <p className="text-neutral-700 leading-relaxed mt-4">
            Each integration type was mapped to its own data and permission flow, and I
            tested prototypes to confirm people understood them and could recover from
            errors.
          </p>

          <ImagePlaceholder tint="bg-[#DDE3E6]" caption="Guided setup: permission prompt, validation and success states" />
        </section>

        {/* Outcome */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Outcome</SectionLabel>
          <p className="text-neutral-700 leading-relaxed mb-4">
            The new flow:
          </p>
          <Bullets
            items={[
              'Introduces a clear, repeatable structure across every integration',
              'Lets teams configure integrations themselves, without Engineering',
              'Reduces setup errors through guided validation',
              'Improves clarity, speed and confidence during connection setup',
            ]}
          />
          <p className="text-neutral-700 leading-relaxed mt-4">
            It also gives SoPost a scalable foundation. New partners can be added without
            redesigning the underlying logic or interface.
          </p>
        </section>

        {/* Reflection */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Reflection</SectionLabel>
          <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
            <p>
              This work turned a real technical bottleneck into a guided, scalable system
              that matches what people expect from modern SaaS tools. By defining reusable
              patterns, improving feedback loops and aligning language across integration
              types, it made complex configuration approachable for everyone, without
              losing the technical precision each system needs.
            </p>
            <p>
              The model is now the blueprint for integrations in Campaign Manager, so
              SoPost can expand partner connectivity with the same clarity and reliability
              that underpin its{' '}
              <InlineLink href="/work/reporting">reporting</InlineLink> and{' '}
              <InlineLink href="/work/stock">fulfilment</InlineLink> systems.
            </p>
          </div>
        </section>

        <CaseStudyFooter currentSlug="integrations" />
      </main>

      <SiteFooter />
    </div>
  );
}

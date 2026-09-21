import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { CaseStudyFooter, SiteFooter } from '../../caseStudiesData';

export const metadata = {
  title: 'Turning a compliance risk into a simple first step: Jade Parrish',
  description: 'Standardising how and when consent is captured, with one compliant pattern that works globally.',
};

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400 mb-6">
      {children}
    </p>
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

function ImagePlaceholder({ tint, caption }) {
  return (
    <div className={`aspect-[16/9] w-full rounded-sm border border-neutral-200/80 ${tint} flex flex-col items-center justify-center gap-2 my-10`}>
      <ImageIcon className="w-6 h-6 text-neutral-400" strokeWidth={1.5} />
      <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-medium">
        Visual coming soon
      </p>
      <p className="text-xs text-neutral-400">{caption}</p>
    </div>
  );
}

export default function ConsentCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">
      {/* Top Navigation */}
      <header className="max-w-3xl mx-auto px-6 sm:px-8 py-8 sm:py-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-neutral-500 hover:text-[#A47864] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to selected work
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-24">
        {/* Title */}
        <section className="pb-8 border-b border-neutral-200/80">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400 mb-4">
            Compliance &amp; Service Design &middot; Design Lead
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Turning a compliance risk into a simple first step.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Standardising how and when consent is captured, with one pattern that
            works globally.
          </p>
        </section>

        {/* At a Glance */}
        <section className="py-8 border-b border-neutral-200/80">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Role</p>
              <p className="text-sm font-medium text-neutral-900">Design Lead</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Worked with</p>
              <p className="text-sm font-medium text-neutral-900">Product, Legal, Engineering</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Started with</p>
              <p className="text-sm font-medium text-neutral-900">A client&rsquo;s data compliance concern</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Outcome</p>
              {/* TODO: add a real figure if you can get one (e.g. step-one drop-off, completion rate) */}
              <p className="text-sm font-medium text-neutral-900">One reusable consent pattern for every journey</p>
            </div>
          </div>
        </section>

        {/* Setting the Scene */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Setting the Scene</SectionLabel>
          <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
            <p>
              A US brand client raised a concern: data was being stored before people had
              agreed to the Terms and Conditions. I led a cross-functional review of how
              consent was captured across SoPost&rsquo;s feedback journeys.
            </p>
            <p>
              Working with Product, Legal and Engineering, the goal was to define a single,
              compliant pattern that worked globally. It had to protect people and brands
              while keeping the experience fast and intuitive.
            </p>
          </div>

          <ImagePlaceholder tint="bg-[#E4E1E8]" caption="Consent step before data entry: standard and gifting journeys" />
        </section>

        {/* The Problem */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>The Problem</SectionLabel>
          <p className="text-neutral-700 leading-relaxed mb-4">
            In the existing flow, responses could be saved before people gave consent. For
            brands operating under strict data regulations, that was a compliance risk:
            personal data could be processed by third parties before the Terms were
            accepted.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            We needed to move consent earlier in the flow without adding friction or
            harming completion rates.
          </p>
        </section>

        {/* Implications */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>The Trade-Off</SectionLabel>
          <p className="text-neutral-700 leading-relaxed">
            Moving consent upfront increases legal confidence, but it often causes a small
            drop in completions. To balance the two, I simplified the step, cut the copy,
            and made the nickname field optional or pre-filled, so the legal step felt
            seamless rather than obstructive.
          </p>
        </section>

        {/* My Role */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>My Role</SectionLabel>
          <p className="text-neutral-700 leading-relaxed mb-4">
            I led the audit and redesign end to end. That included:
          </p>
          <Bullets
            items={[
              'Mapping where and when data was written or saved across systems',
              'Working with Engineering to document save events and dependencies',
              'Prototyping a new welcome and consent step for both standard and gifting journeys',
              'Partnering with Legal to rewrite the consent copy for clarity and brevity',
              'Reducing interaction friction through layout, focus order and auto-generation logic',
            ]}
          />
          <p className="font-serif text-2xl text-neutral-900 mt-8">
            This wasn&rsquo;t just a visual redesign. It was a{' '}
            <span className="text-[#A47864] italic">compliance and systems change</span>,
            anchored in design.
          </p>
        </section>

        {/* Process */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Process</SectionLabel>
          <p className="text-neutral-700 leading-relaxed mb-4">
            With the Product Manager, I analysed historic performance data for the
            &ldquo;welcome screen&rdquo; to understand its effect on conversion, then
            redefined it as the default consent pattern for every feedback journey. The
            new design:
          </p>
          <Bullets
            items={[
              'Adds an upfront welcome step that captures the Terms and required consents before any data entry',
              'Simplifies the copy and uses a single primary action to continue',
              'Treats the nickname as optional, or auto-generated where possible',
              'Includes variants for both standard and gifting journeys',
            ]}
          />
          <p className="text-neutral-700 leading-relaxed mt-4">
            That gives SoPost one reusable consent model across brands, improving
            compliance and consistency while keeping the effort for the person answering
            as low as possible.
          </p>

          <ImagePlaceholder tint="bg-[#E9E4DE]" caption="Welcome and consent step: single primary action" />
        </section>

        {/* Status / Next Steps */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Rollout and Measures</SectionLabel>
          <p className="text-neutral-700 leading-relaxed mb-4">
            The new journeys were designed to roll out first to selected brand partners.
            After launch, the plan was to track:
          </p>
          <Bullets
            items={[
              'Step-one drop-off rate',
              'Consent acceptance and completion rate',
              'Campaign approval time',
              'Support impact and qualitative feedback',
            ]}
          />
          <p className="text-neutral-700 leading-relaxed mt-4">
            Those results would inform further optimisation of the copy and layout if
            completion rates dipped.
          </p>
        </section>

        {/* Reflection */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Reflection</SectionLabel>
          <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
            <p>
              This was a small but critical piece of work. It set out one way for SoPost to
              handle consent globally, designed to strengthen legal compliance for
              enterprise clients, and it showed how micro-level design decisions can
              de-risk a system without damaging the experience.
            </p>
            <p>
              It also reinforced how design can act as the link between policy, technology
              and trust, translating regulatory requirements into clear, usable
              experiences.
            </p>
          </div>
        </section>

        <CaseStudyFooter currentSlug="consent" />
      </main>

      <SiteFooter />
    </div>
  );
}

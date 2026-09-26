import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { CaseStudyFooter, SiteFooter } from '../../caseStudiesData';

export const metadata = {
  title: 'Designing notifications that scale beyond a single alert: Jade Parrish',
  description: 'A flexible, three-part notification framework, starting with stock alerts and built to extend across the platform.',
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
    <ul className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="text-[#A47864]">&middot;</span> {item}
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

export default function NotificationsCaseStudy() {
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
            Product Design &amp; Systems &middot; Design Lead
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Designing notifications that scale beyond a single alert.
          </h1>
          <p className="text-neutral-600 text-lg sm:text-xl leading-[1.6] max-w-xl">
            A flexible, three-part framework for campaign and stock alerts, built to
            extend across the platform.
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
              <p className="text-sm font-medium text-neutral-900">Product, Engineering, Customer Success</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Started with</p>
              <p className="text-sm font-medium text-neutral-900">Stock alerts</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Outcome</p>
              {/* TODO: swap in a real figure if you can get one (e.g. hours saved per week, fewer missed downloads) */}
              <p className="text-sm font-medium text-neutral-900">Hours of manual checking saved</p>
            </div>
          </div>
        </section>

        {/* Setting the Scene */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Setting the Scene</SectionLabel>
          <div className="space-y-5 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
            <p>
              Across 2024 and 2025, I partnered with Engineering and Customer Success to
              define a scalable notification system, one that could earn its place across
              several parts of SoPost rather than just solving today&rsquo;s problem. It
              started with stock alerts.
            </p>
            <p>
              The goal was to give CSMs a proactive way to monitor campaign stock levels
              and reduce the risk of over-collection. Just as important, it needed to
              establish a framework that could later extend to approvals, integrations
              and system-wide alerts.
            </p>
          </div>

          <ImagePlaceholder tint="bg-[#E8E3DC]" caption="Stock notifications: toast, email summary and Notifications area" />
        </section>

        {/* The Problem */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>The Problem</SectionLabel>
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
            CSMs were checking stock balances by hand in Campaign Manager, with no
            automated alert when levels ran low. That created three issues:
          </p>
          <Bullets
            items={[
              'Risk of over-collection and unnecessary media spend',
              'Hours lost to manual checks and cross-referencing campaign data',
              'Room for human error',
            ]}
          />
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mt-4">
            There was also little context. It was hard to see which campaigns, activities
            or channels were affected, which meant even more investigation.
          </p>
        </section>

        {/* My Role */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>My Role</SectionLabel>
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
            With my Product Manager, I led the design definition of the system, aligning
            Product, Engineering and CSMs around a shared model for how notifications
            should be structured, triggered and displayed. That included:
          </p>
          <Bullets
            items={[
              'Validating information context and language with internal users',
              'Mapping data triggers and escalation rules in Campaign Manager',
              'Designing notification hierarchies and patterns: toasts, alerts and history',
              'Defining scalability principles for future use cases such as campaign approvals and integration monitoring',
              'Connecting notification states to the stock visualisation data, for direct traceability',
            ]}
          />
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mt-4">
            The result was a notification architecture rather than a single feature,
            giving the product a consistent, reusable pattern. It builds directly on the{' '}
            <InlineLink href="/work/stock">stock and fulfilment work</InlineLink>.
          </p>
        </section>

        {/* Process */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Process</SectionLabel>
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
            I began with quick sketches and low-fidelity prototypes to clarify scope and
            data dependencies, then moved to annotated mid-fidelity designs for
            Engineering hand-off.
          </p>
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
            Throughout, I tested tone, timing and escalation behaviour with CSMs, to
            balance visibility against cognitive load. Alerts had to be actionable without
            being overwhelming. The questions that guided the work were:
          </p>
          <Bullets
            items={[
              'Will brands be notified, or just internal users?',
              'Are alerts triggered per campaign or globally?',
              'How is notification volume managed?',
              'Can people customise their preferences?',
            ]}
          />
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mt-4">
            That discovery work shaped how the system handles priority, delivery method and
            user control.
          </p>

          <ImagePlaceholder tint="bg-[#DDE3E6]" caption="Notification hierarchy: toasts, alerts and history" />
        </section>

        {/* Outcome and Next Steps */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Outcome and Next Steps</SectionLabel>
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
            The framework has three parts. The first release, in 2025, focused on stock
            notifications and delivered all three:
          </p>
          <Bullets
            items={[
              'In-app toasts for quick updates',
              'Email summaries for detail and history',
              'A Notifications area for tracking and review',
            ]}
          />
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mt-4">
            User preferences sit on top, so people can manage the type and frequency of
            what they receive.
          </p>
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mt-4">
            Since that first rollout, the system has grown to include data lifecycle
            notifications for opt-in data, and commenting within the campaign builder.
            That was the first real proof of its flexibility as a platform-wide framework.
          </p>
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mt-4">
            It was engineered to scale, with a clear extension path to approvals, campaign
            status changes and integrations. Success was to be measured through user
            satisfaction, adoption and reduced helpdesk contact.
          </p>
        </section>

        {/* Reflection */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Reflection</SectionLabel>
          <div className="space-y-5 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
            <p>
              This work created the foundation for SoPost&rsquo;s first unified, scalable
              notification framework. Customer Success told us early on it was working:
              real-time notifications saved hours of manual checking, cut the room for
              human error, and headed off brand relationship issues caused by missed data
              downloads.
            </p>
            <p>
              The framework reduces operational risk, saves time, and gives teams a shared
              structure for surfacing critical events consistently. Beyond stock
              monitoring, it now connects across systems, from fulfilment and reporting to
              campaign setup, and provides a blueprint for proactive communication
              throughout the product.
            </p>
          </div>
        </section>

        <CaseStudyFooter currentSlug="notifications" />
      </main>

      <SiteFooter />
    </div>
  );
}

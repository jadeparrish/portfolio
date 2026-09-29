import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { CaseStudyFooter, SiteFooter } from '../../caseStudiesData';

export const metadata = {
  title: 'Giving a siloed platform a navigation that scales: Jade Parrish',
  description: 'Designing a scalable information architecture for a next-generation SaaS platform.',
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

export default function NavigationCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">

      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-24">
        {/* Title */}
        <section className="pb-8 border-b border-neutral-200/80">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-4">
            Information Architecture &middot; 2025
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Giving a siloed platform a navigation that scales.
          </h1>
          <p className="text-neutral-600 text-lg sm:text-xl leading-[1.6] max-w-xl">
            Designing a scalable information architecture for SoPost&rsquo;s
            next-generation platform.
          </p>
        </section>

        {/* At a Glance */}
        <section className="py-8 border-b border-neutral-200/80">
          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Role</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">Senior Product Designer</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Worked with</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">Product, Engineering</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Validated with</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">Internal teams and Customer Success</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Outcome</p>
              {/* TODO: swap in a real figure if you can get one (e.g. task time, fewer support questions) */}
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">A structure that scales without restructuring</p>
            </div>
          </div>
        </section>

        {/* Setting the Scene */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Setting the Scene</SectionLabel>
          <div className="space-y-5 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
            <p>
              In 2025, SoPost rebuilt Campaign Manager from the ground up, and it became
              clear pretty quickly that the navigation needed a complete rethink, not a
              patch. The old structure had grown organically, and features like reporting,
              stock management and fulfilment had each ended up in their own silo.
            </p>
            <p>
              The result was inconsistent hierarchies, confusing terminology, and
              duplicated entry points across the organisation and campaign levels.
            </p>
            <p>
              I led the redesign of the navigation framework, working with Product and
              Engineering to define how people should move through a multi-layered,
              data-heavy SaaS platform in a way that felt scalable, intuitive and
              future-proof.
            </p>
          </div>

          <ImagePlaceholder tint="bg-[#E4E1E8]" caption="The legacy navigation: parallel silos and duplicated entry points" />
        </section>

        {/* Understanding the Problem */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Understanding the Problem</SectionLabel>
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
            The legacy navigation had become fragmented and unintuitive.
          </p>
          <Bullets
            items={[
              'Inconsistent information architecture: reporting, fulfilment and product setup each used a different structure',
              'Poor discoverability: people struggled to find key actions such as viewing orders or managing integrations',
              'A flat hierarchy: every page sat at the same level, which overloaded people and broke their expected mental models',
            ]}
          />
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mt-4">
            The challenge was to rebuild a sense of orientation and flow: where you are,
            what you are doing, and what comes next.
          </p>
        </section>

        {/* Redefining Hierarchy and Flow */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Redefining Hierarchy and Flow</SectionLabel>
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
            I mapped the full product architecture and grouped actions by user intent, not
            by department. That revealed a natural three-tier hierarchy:
          </p>
          <Bullets
            items={[
              'Organisation level: global controls such as Integrations and Settings',
              'Campaign level: the core unit of work for brands',
              'Reporting level: insights and performance data tied to campaigns',
            ]}
          />
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mt-4 mb-4">
            From that, I defined a dual-layer navigation model:
          </p>
          <Bullets
            items={[
              'A persistent sidebar for global navigation and orientation',
              'A contextual horizontal bar for the task in hand, which changes with the level you are working at',
            ]}
          />
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mt-4">
            What appears in that bar depends on where you are. Setting a campaign up
            gives you Campaign settings, Branding, Products and Journeys. Move into
            reporting for the same campaign and it becomes Orders, Stock, Distribution,
            Feedback and the rest. That&rsquo;s progressive disclosure applied to
            navigation: you see what&rsquo;s relevant to what you&rsquo;re doing, not
            everything the platform can do. It let people move between strategic and
            operational contexts without losing their place.
          </p>

          <ImagePlaceholder tint="bg-[#E9E4DE]" caption="Three-tier hierarchy and dual-layer navigation model" />
        </section>

        {/* Collaboration and Validation */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Collaboration and Validation</SectionLabel>
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
            Working with our Product Director and the Engineering leads, I tested early
            prototypes across internal teams and with Customer Success. The feedback
            confirmed:
          </p>
          <Bullets
            items={[
              'Faster navigation and clearer task grouping',
              'A stronger separation between brand-level and campaign-level work',
              'Better comprehension of where new modules, including ROI reporting, stock and fulfilment, and Integrations, would sit',
            ]}
          />
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mt-4">
            The new information architecture also left room for future modules without
            structural change, a key sign that it would scale.
          </p>
        </section>

        {/* Outcome */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Outcome</SectionLabel>
          <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
            The redesigned navigation delivered:
          </p>
          <Bullets
            items={[
              'A unified, scalable framework underpinning every Campaign Manager module',
              'A clear separation between organisation, campaign and reporting levels',
              'Reduced cognitive load and better wayfinding',
              'A foundation for future permissions and role-based access',
            ]}
          />
          <p className="font-serif text-2xl text-neutral-900 mt-8">
            This was not a visual refresh. It was a{' '}
            <span className="text-[#A47864] italic">fundamental redesign</span> of how the
            platform was accessed.
          </p>
        </section>

        {/* Reflection */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Reflection</SectionLabel>
          <div className="space-y-5 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
            <p>
              This project turned SoPost&rsquo;s navigation from a collection of
              disconnected routes into a coherent, extensible system. By defining a clear
              hierarchy and adding contextual layers, we gave people a sense of place,
              sequence and control.
            </p>
            <p>
              The framework now underpins the whole Campaign Manager ecosystem, connecting{' '}
              <InlineLink href="/work/reporting">Reporting</InlineLink>,{' '}
              <InlineLink href="/work/stock">stock and fulfilment</InlineLink> and
              Integrations through one consistent, scalable structure. That&rsquo;s the part I find most satisfying about this kind of
              work: not the new screens, but the fact that the next hundred features now
              have somewhere sensible to live.
            </p>
          </div>
        </section>

        <CaseStudyFooter currentSlug="cm-navigation" />
      </main>

      <SiteFooter />
    </div>
  );
}

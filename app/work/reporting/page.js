import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { CaseStudyFooter } from '../../caseStudiesData';

export const metadata = {
  title: 'Reporting Area Redesign: Jade Parrish',
  description: 'Consolidating fragmented insights into a single reporting suite for brands and internal teams.',
};

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400 mb-6">
      {children}
    </p>
  );
}

function SubLabel({ children }) {
  return (
    <h3 className="flex items-center gap-2 text-sm uppercase tracking-[0.15em] font-semibold text-neutral-800 mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-[#A47864] flex-shrink-0" />
      {children}
    </h3>
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

export default function ReportingCaseStudy() {
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
            Internal Platform &middot; Product &amp; Systems Lead
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Turning disconnected data into clearer decisions.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Consolidating fragmented insights into a single reporting suite for brands
            and internal teams.
          </p>
        </section>

        {/* At a Glance */}
        <section className="py-8 border-b border-neutral-200/80">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Role</p>
              <p className="text-sm font-medium text-neutral-900">Lead Designer</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Research</p>
              <p className="text-sm font-medium text-neutral-900">8 stakeholder interviews</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Outcome</p>
              <p className="text-sm font-medium text-[#A47864]">50%+ faster reporting</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Backed by</p>
              <p className="text-sm font-medium text-neutral-900">CTO-approved initiative</p>
            </div>
          </div>
        </section>

        {/* Setting the Scene */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Setting the Scene</SectionLabel>
          <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
            <p>
              In 2024, I led the redesign of SoPost&rsquo;s Reporting Area, transforming
              how campaign performance was viewed, shared and trusted across the
              business.
            </p>
            <p>
              Before this work, results were scattered across Campaign Manager,
              spreadsheets, Google Docs, and a complex internal tool called Mission
              Control. Each used different data refresh rates, so totals rarely matched.
              Reports were time-consuming to compile and confidence in the numbers was
              low.
            </p>
            <p>
              The goal was to bring all reporting into one reliable suite, giving every
              team, from Commercial to Operations, a shared and trustworthy view of
              performance and value.
            </p>
          </div>

          <ImagePlaceholder tint="bg-[#DDE3E6]" caption="Fragmented reporting, before the redesign" />
        </section>

        {/* Part 1: Auditing and Aligning the Foundations */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#A47864] mb-2">
            Part One
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-10">
            Auditing and Aligning the Foundations
          </h2>

          <div className="space-y-10">
            <div>
              <SubLabel>Problem</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Reporting had become fragmented and unreliable.
              </p>
              <ul className="space-y-2.5 text-neutral-700 text-sm">
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Mission Control was overly technical and difficult to navigate</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Campaign Manager split reporting across multiple isolated pages</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Data inconsistencies eroded trust internally and with brands</li>
              </ul>
            </div>

            <div>
              <SubLabel>Challenges Identified</SubLabel>
              <ul className="space-y-2.5 text-neutral-700 text-sm">
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Different refresh rates between systems created data mismatches</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Duplicated charts and conflicting metrics across tools</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> No shared understanding of how datasets connected</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Heavy manual effort to compile brand reports</li>
              </ul>
            </div>

            <div>
              <SubLabel>Process</SubLabel>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  I audited every existing reporting view across Campaign Manager and
                  Mission Control, documenting duplication and logic gaps.
                </p>
                <p>
                  In parallel, I worked with the Commercial team to review the reports
                  they shared with brands, pinpointing where manual edits and visual
                  inconsistencies created risk.
                </p>
                <p>
                  The audit made it clear that Mission Control needed to be dismantled.
                  I presented my findings and proposal to the CTO, positioning reporting
                  as a strategic product initiative, not a maintenance task.
                </p>
              </div>
            </div>

            <div>
              <SubLabel>Research and Testing</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                To validate direction, I interviewed eight people across Product, CSM,
                Engineering and Operations. Using a Figma-based testing matrix, I mapped
                their workflows and captured pain points. The findings were consistent:
              </p>
              <ul className="space-y-2.5 text-neutral-700 text-sm mb-4">
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> People were piecing together insights across multiple tools</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Each team defined &ldquo;reporting&rdquo; differently (fulfilment vs engagement vs exports)</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> No one had a full, end-to-end picture of campaign performance</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed">
                This alignment secured executive backing to rebuild reporting around
                clarity, consistency and trust.
              </p>
            </div>
          </div>
        </section>

        {/* Part 2: Redesigning the Reporting Experience */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#A47864] mb-2">
            Part Two
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-10">
            Redesigning the Reporting Experience
          </h2>

          <div className="space-y-10">
            <div>
              <SubLabel>Problem</SubLabel>
              <p className="text-neutral-700 leading-relaxed">
                Campaign Manager&rsquo;s reporting pages (Overview, Orders, Demographics,
                Feedback and Reviews) existed in isolation. There was no hierarchy,
                shared data model or visual consistency.
              </p>
            </div>

            <div>
              <SubLabel>Design Approach</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                I defined a single Reporting Hub that could:
              </p>
              <ul className="space-y-2.5 text-neutral-700 text-sm">
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Unify data sources under one structure</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Standardise metrics, terminology and visualisation styles</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Simplify navigation and reduce cognitive load</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Build trust through accuracy and transparency</li>
              </ul>
            </div>

            <div>
              <SubLabel>Exploration</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                I created a series of prototypes exploring:
              </p>
              <ul className="space-y-2.5 text-neutral-700 text-sm mb-4">
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Present vs future data flow mapping across systems</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Card-based layouts grouping metrics by performance type</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Standardised filters, comparison modes and accessibility patterns</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Error and low-data states for transparency</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Early brand-level roll-ups and ROI-ready structures</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed">
                Each iteration was reviewed with Product, Commercial and Engineering to
                ensure the hierarchy reflected how insights were actually used and
                shared.
              </p>

              <ImagePlaceholder tint="bg-[#E7E2DC]" caption="Reporting Hub: unified structure and card layouts" />
            </div>

            <div>
              <SubLabel>Impact</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-2">
                The new Reporting Area established a single source of truth for
                campaign performance.
              </p>
              <p className="font-serif text-2xl text-neutral-900 mb-8">
                It reduced reporting time by over{' '}
                <span className="text-[#A47864] italic">50 percent</span>, and
                introduced consistent visual language and data standards across every
                team.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                This foundation evolved into SoPost&rsquo;s ROI and Impact Dashboards,
                Comparison Tables, and the Reporting Hub, forming the backbone of
                SoPost&rsquo;s modern reporting ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Reflection</SectionLabel>
          <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
            <p>
              This project rebuilt organisational trust in data and reshaped how SoPost
              understands campaign performance.
            </p>
            <p>
              By unifying fragmented tools, aligning technical and commercial teams, and
              defining clear visual standards, reporting shifted from a manual task to a
              strategic, insight-led system.
            </p>
            <p>
              The work became the foundation for everything that followed, connecting
              fulfilment, ROI and long-term value into one coherent reporting framework.
            </p>
          </div>
        </section>

        <CaseStudyFooter currentSlug="reporting" />
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200/80 py-10 text-xs text-neutral-500 font-normal">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Jade Parrish. Built with care.</p>
          <div className="flex gap-8 tracking-wider uppercase text-[11px]">
            <a href="#" className="hover:text-[#A47864] transition-colors">LinkedIn</a>
            <a href="mailto:hello@jadeparrish.me" className="hover:text-[#A47864] transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

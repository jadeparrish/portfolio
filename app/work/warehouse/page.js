import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { CaseStudyFooter } from '../../caseStudiesData';

export const metadata = {
  title: 'Warehouse Management System: Jade Parrish',
  description: 'Replacing spreadsheets and email chains with a single, role-based system for fulfilment and stock visibility.',
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

export default function WarehouseCaseStudy() {
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
            Operations &amp; Service Design &middot; Design Lead
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Making complex warehouse operations easier to navigate.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Replacing spreadsheets and email chains with one role-based system for
            fulfilment and stock visibility.
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
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Research</p>
              <p className="text-sm font-medium text-neutral-900">Partner warehouse interviews</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Delivery</p>
              <p className="text-sm font-medium text-neutral-900">Phased rollout</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Outcome</p>
              {/* TODO: replace with a real metric (e.g. time saved, fewer export errors) */}
              <p className="text-sm font-medium text-[#A47864]">Metric to add</p>
            </div>
          </div>
        </section>

        {/* Setting the Scene */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Setting the Scene</SectionLabel>
          <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
            <p>
              In 2024, I identified the need for, and led the design and rollout of,
              SoPost&rsquo;s Warehouse Management System (WMS). The aim was to improve
              visibility, communication and efficiency between internal teams and
              fulfilment partners.
            </p>
            <p>
              The project replaced fragmented spreadsheets and manual processes with a
              single, role-based operational system. It later grew into a broader
              initiative to define how stock and fulfilment data should surface in
              Campaign Manager&rsquo;s Reporting area.
            </p>
            <p>
              The result was a unified, data-driven view of campaign health that every
              team could access.
            </p>
          </div>

          <ImagePlaceholder tint="bg-[#E3E6E1]" caption="Fulfilment before the WMS: spreadsheets and email chains" />
        </section>

        {/* Part 1: Warehouse Management System */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#A47864] mb-2">
            Part One
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-10">
            Warehouse Management System
          </h2>

          <div className="space-y-10">
            <div>
              <SubLabel>Problem</SubLabel>
              <p className="text-neutral-700 leading-relaxed">
                Fulfilment operations relied on shared spreadsheets and long email chains
                between SoPost and partner warehouses. Delays, mismatched data and limited
                transparency made it hard to spot issues early or see where orders were
                being held up.
              </p>
            </div>

            <div>
              <SubLabel>Challenges Identified</SubLabel>
              <ul className="space-y-2.5 text-neutral-700 text-sm">
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> No real-time view of inventory or SLAs</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Manual processes causing reporting delays</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Communication gaps between internal and external teams</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Heavy reliance on Engineering for exports and data corrections</li>
              </ul>
            </div>

            <div>
              <SubLabel>Process</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                I mapped the end-to-end fulfilment process with Fulfilment, Finance and
                Engineering, and interviewed partner warehouses to capture their daily
                challenges.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                From this, we defined a clear list of must-haves for the first release and
                a phased roadmap that prioritised reliability, visibility and scalability.
                Phase 1 delivered:
              </p>
              <ul className="space-y-2.5 text-neutral-700 text-sm">
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Role-based views for SoPost teams and fulfilment partners</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Searchable, sortable order lists</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Automatic notifications when new order files were ready</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Error-free file downloads</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Simple campaign and file management with timestamped dispatch logs</li>
              </ul>

              <ImagePlaceholder tint="bg-[#E9E4DE]" caption="WMS: role-based order views and file management" />
            </div>

            <div>
              <SubLabel>Testing and Rollout</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                I led functional testing and UAT with internal teams and fulfilment
                partners, working closely with Engineering to refine workflows and data
                logic. After launch, I coordinated feedback sessions and training, and
                explored enhancements such as:
              </p>
              <ul className="space-y-2.5 text-neutral-700 text-sm">
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> User grouping and access control</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Bulk status updates</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Partner-management dashboards</li>
              </ul>
            </div>

            <div>
              <SubLabel>Impact</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-2">
                The new WMS reduced export errors, cut reliance on Engineering and improved
                transparency between SoPost and its partners.
              </p>
              {/* TODO: replace with a real headline metric once the data is in */}
              <p className="font-serif text-2xl text-neutral-900">
                It turned fulfilment into a real-time, self-service process, with{' '}
                <span className="text-[#A47864] italic">[metric to add]</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Part 2: Stock and Fulfilment Visualisation */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#A47864] mb-2">
            Part Two
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-10">
            Stock and Fulfilment Visualisation
          </h2>

          <div className="space-y-10">
            <div>
              <SubLabel>Problem</SubLabel>
              <p className="text-neutral-700 leading-relaxed">
                While the WMS improved operational tracking, Campaign Manager still lacked
                a clear, consistent view of stock health. Because campaign structures
                differed across brands, it was hard to see which products, activities or
                fulfilment tasks shared the same stock pools.
              </p>
            </div>

            <div>
              <SubLabel>Design Approach</SubLabel>
              <p className="text-neutral-700 leading-relaxed">
                I collaborated with Product, Commercial and Engineering to define how stock
                data flowed between systems and how it should be presented. The goal was
                visual consistency and fast diagnosis of fulfilment status across both the
                WMS and Campaign Manager reporting.
              </p>
            </div>

            <div>
              <SubLabel>Exploration</SubLabel>
              <ul className="space-y-2.5 text-neutral-700 text-sm">
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Analysed fulfilment-flow diagrams to understand dependencies</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Created dashboard sketches and interactive prototypes</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Tested structural models by product, activity and partition to define how stock should appear across different campaign configurations</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Explored nested and shared-partition views to show how products, activities and markets interconnect</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Iterated on colour, hierarchy and terminology so bundles, single products and regional stock pools stayed clear</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Designed SLA and distribution-status dashboards to highlight delays and required actions</li>
              </ul>

              <ImagePlaceholder tint="bg-[#DDE3E6]" caption="Stock and SLA dashboard explorations" />
            </div>

            <div>
              <SubLabel>Outcome</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The final designs introduced:
              </p>
              <ul className="space-y-2.5 text-neutral-700 text-sm">
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Unified filtering by product, activity and partition</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Clear indicators showing used versus total stock</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Shared-partition signposting to prevent confusion</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Action states for low stock or SLA breaches</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Distribution-overview cards for export and dispatch performance, with &ldquo;Action required&rdquo; prompts</li>
              </ul>
            </div>

            <div>
              <SubLabel>Status</SubLabel>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Both the WMS and the stock visualisation designs were validated
                  internally and rolled out in phases. The WMS was the first piece of a
                  longer run of work, and the stock side of it exposed a wider problem:
                  Campaign Manager and Mission Control, an internal tool, refreshed their
                  data at different rates, so the numbers didn&rsquo;t match. Commercial
                  team members in different countries told me it left gaps that made
                  their decks hard to understand and talk through. That led me to run a
                  full audit of reporting, which surfaced far more inconsistencies and
                  drove the{' '}
                  <Link
                    href="/work/reporting"
                    className="underline underline-offset-4 decoration-neutral-300 hover:decoration-[#A47864] hover:text-[#A47864] transition-colors"
                  >
                    Reporting Area Redesign
                  </Link>
                  .
                </p>
                <p>
                  The reporting work that followed, including the ROI and impact
                  dashboards and comparison tables, built on that foundation. The same
                  stock visibility also led into a scalable notification system, first
                  released in 2025, so teams are alerted when stock runs low instead of
                  checking balances by hand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Reflection</SectionLabel>
          <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
            <p>
              This project turned fulfilment from a hidden process into a transparent,
              data-driven system. Early feedback from the Fulfilment team confirmed the
              impact: real-time visibility and automation saved hours of manual updates,
              reduced the risk of human error, and prevented issues that could damage brand
              relationships when opt-in or dispatch data wasn&rsquo;t downloaded in time.
            </p>
            <p>
              The WMS gave partners and internal teams a shared operational view, while the
              new stock and fulfilment visuals extended that clarity into reporting.
              Together they formed a foundational service layer for smarter, faster and
              more reliable campaign delivery, and set a precedent for how SoPost approaches
              cross-system design.
            </p>
            <p>
              It also directly influenced the notification system that followed, which
              built on the same principles of visibility, automation and proactive
              communication to reduce operational risk across the wider platform.
            </p>
          </div>
        </section>

        <CaseStudyFooter currentSlug="warehouse" />
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

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { CaseStudyFooter, SiteFooter } from '../../caseStudiesData';

export const metadata = {
  title: 'Bringing stock and fulfilment data into one clear view: Jade Parrish',
  description: 'Untangling shared stock pools into a consistent view of stock health and fulfilment status.',
};

function SectionLabel({ children }) {
  return (
    <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-6">
      {children}
    </h2>
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
      <ImageIcon className="w-6 h-6 text-neutral-600" strokeWidth={1.5} />
      <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-medium">
        Visual coming soon
      </p>
      <p className="text-xs text-neutral-600">{caption}</p>
    </div>
  );
}

export default function StockCaseStudy() {
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
            Operations &amp; Service Design &middot; Design Lead
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Bringing stock and fulfilment data into one clear view.
          </h1>
          <p className="text-neutral-600 text-lg sm:text-xl leading-[1.6] max-w-xl">
            Untangling shared stock pools into one consistent view, across the
            Warehouse Management System and Campaign Manager reporting.
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
              <p className="text-sm font-medium text-neutral-900">Product, Commercial, Engineering</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Focus</p>
              <p className="text-sm font-medium text-neutral-900">Shared stock across brands and campaigns</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Outcome</p>
              {/* TODO: swap in a real figure once you have one (e.g. hours saved, fewer manual checks) */}
              <p className="text-sm font-medium text-neutral-900">Real-time stock and SLA visibility</p>
            </div>
          </div>
        </section>

        {/* Setting the Scene */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Setting the Scene</SectionLabel>
          <div className="space-y-5 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
            <p>
              This one started somewhere unglamorous, and it wasn&rsquo;t on
              anyone&rsquo;s roadmap. I could see what the spreadsheets and email chains
              between SoPost and its fulfilment partners were costing us, so I took it to
              our CFO and we built the Warehouse Management System (WMS) together in 2024,
              replacing all of it with one role-based system. He knew the operation inside
              out, so everything ran past him, and our Fulfilment Lead used it constantly
              with the warehouses. Building it turned up something I wasn&rsquo;t
              expecting, real discrepancies in the data behind stock and fulfilment.
            </p>
            <p>
              I then audited Mission Control and Campaign Manager, and the message became
              even clearer: the numbers didn&rsquo;t match across systems, and there was
              no single, central reporting hub. That audit became the{' '}
              <Link
                href="/work/reporting"
                className="underline underline-offset-4 decoration-neutral-500 hover:decoration-[#8D6553] hover:text-[#8D6553] transition-colors"
              >
                Reporting Area Redesign
              </Link>
              .
            </p>
            <p>
              The stock work came next, and it was a big piece of work in its own right.
              The aim was a unified view of stock and fulfilment health that worked across
              both the WMS and Campaign Manager reporting.
            </p>
          </div>

          <ImagePlaceholder tint="bg-[#E3E6E1]" caption="Stock and fulfilment data before the redesign" />
        </section>

        {/* The Work */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#8D6553] mb-2">
            The Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-10">
            Stock and Fulfilment Visualisation
          </h2>

          <div className="space-y-10">
            <div>
              <SubLabel>Problem</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                While the WMS improved operational tracking, Campaign Manager still
                lacked a clear, consistent view of stock health. Stock was split into
                partitions: separate amounts set aside for a particular campaign, brand or
                product. How those splits were set up varied from brand to brand, so it was
                genuinely hard to see which products, activities or fulfilment tasks were
                drawing on the same stock.
              </p>
            </div>

            <div>
              <SubLabel>Design Approach</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                I collaborated with Product, Commercial and Engineering to define how stock
                data flowed between systems and how it should be presented. The goal was
                visual consistency and fast diagnosis of fulfilment status across both the
                WMS and Campaign Manager reporting.
              </p>
            </div>

            <div>
              <SubLabel>Exploration</SubLabel>
              <ul className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#A47864]">&middot;</span> Worked through the fulfilment flow diagrams to see what depended on what</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#A47864]">&middot;</span> Created dashboard sketches and interactive prototypes</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#A47864]">&middot;</span> Tested different ways of grouping stock, by product, by activity and by partition, looking for one that held up however a campaign had been set up</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#A47864]">&middot;</span> Tried nested and shared views, so you could see at a glance when several products or markets were drawing on the same stock</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#A47864]">&middot;</span> Worked on colour, hierarchy and wording until bundles, single products and regional stock read as clearly different things</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#A47864]">&middot;</span> Designed dashboards for delivery times and dispatch status, so delays and anything needing attention surfaced on their own</li>
              </ul>

              <ImagePlaceholder tint="bg-[#DDE3E6]" caption="Stock and SLA dashboard explorations" />
            </div>

            <div>
              <SubLabel>Outcome</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
                The final designs introduced:
              </p>
              <ul className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#A47864]">&middot;</span> One set of filters, by product, activity and partition</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#A47864]">&middot;</span> Clear indicators showing used versus total stock</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#A47864]">&middot;</span> Clear signposting wherever stock was shared, so nobody counted it twice</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#A47864]">&middot;</span> Visible states for low stock or a missed delivery window</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#A47864]">&middot;</span> Overview cards for how exports and dispatches were performing, flagging anything that needed action</li>
              </ul>
            </div>

            <div>
              <SubLabel>Status</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                The designs were validated internally and rolled out in phases. They
                informed the next phase of Campaign Manager reporting, bringing the same
                clarity and hierarchy into brand-facing dashboards. The same stock
                visibility also led into a{' '}
                <Link
                  href="/work/notifications"
                  className="underline underline-offset-4 decoration-neutral-500 hover:decoration-[#8D6553] hover:text-[#8D6553] transition-colors"
                >
                  scalable notification system
                </Link>
                , first released in 2025, so teams are alerted when stock runs low
                instead of checking balances by hand.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Reflection</SectionLabel>
          <div className="space-y-5 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
            <p>
              This project turned stock and fulfilment from a hidden, spreadsheet-shaped
              process into something transparent and data-driven. The Fulfilment Team told
              us early on that it was working: real-time visibility and automation saved
              hours of manual updates, cut the room for human error, and headed off issues
              that could have damaged brand relationships when opt-in or dispatch data
              wasn&rsquo;t downloaded in time.
            </p>
            <p>
              The WMS gave partners and internal teams the same view of what was
              happening. The stock and fulfilment work carried that into reporting.
              Between them, campaigns went out faster and with fewer surprises, and it set
              a pattern for how SoPost designs across systems rather than one screen at a
              time.
            </p>
            <p>
              It also fed directly into the notification system that came next, which
              took the same idea further: if the system can already see a problem coming,
              it should say so, rather than waiting for someone to go and look.
            </p>
          </div>
        </section>

        <CaseStudyFooter currentSlug="stock" />
      </main>

      <SiteFooter />
    </div>
  );
}

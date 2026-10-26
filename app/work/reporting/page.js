import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CaseStudyFooter, SiteFooter, Testimonial, Figure } from '../../caseStudiesData';
import figOverview from '../../reporting-overview.png';
import figAudience from '../../reporting-audience.png';

export const metadata = {
  title: 'Turning disconnected data into clearer decisions: Jade Parrish',
  description: 'Consolidating fragmented insights into a single reporting suite for brands and internal teams.',
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
      <span className="w-1.5 h-1.5 rounded-full bg-[#49769E] flex-shrink-0" />
      {children}
    </h3>
  );
}

export default function ReportingCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">

      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-24">
        {/* Title */}
        <section className="pb-8 rule rule-8">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-4">
            Data &amp; Service Design &middot; 2024 to 2025
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Turning disconnected data into clearer decisions.
          </h1>
          <p className="text-neutral-600 text-lg sm:text-xl leading-[1.6] max-w-xl">
            Bringing reporting scattered across five tools into one place that brands
            and internal teams could both trust.
          </p>
        </section>

        {/* At a Glance */}
        <section className="py-8 rule rule-9">
          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Role</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">Senior Product Designer</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Research</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">8 stakeholder interviews</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Outcome</p>
              <p className="text-sm font-medium text-[#49769E] [text-wrap:balance]">8 hour reports, halved</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Backed by</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">CTO-approved initiative</p>
            </div>
          </div>
        </section>

        {/* Setting the Scene */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Setting the Scene</SectionLabel>
          <div className="space-y-5 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
            <p>
              In 2024, I led the redesign of SoPost&rsquo;s Reporting Area. The honest
              version is that nobody trusted the numbers anymore, and I got to be the
              person who went and found out why.
            </p>
            <p>
              Before this work, results were scattered across Campaign Manager,
              spreadsheets, standalone Looker dashboards, Google Docs, and a complex
              internal tool called Mission Control. Mission Control and Campaign Manager
              refreshed at different rates, so their totals did not match, and everything
              built from them became inconsistent and sometimes incorrect. Reports were
              time-consuming to compile and confidence in the numbers was low.
            </p>
            <p>
              The goal was to bring all reporting into one reliable suite, so every team
              from Commercial to Operations, and the brands we worked with, had the same
              trustworthy view of performance and value.
            </p>
          </div>

          {/* Fig 01 is drawn inline rather than uploaded as an image. Vercel's
              optimizer re-encodes uploads as lossy WebP (the live URL was
              w=1920&q=75), which pulls apart hairlines and 9px mono. Vector
              skips the optimizer, stays sharp at any density, and is ~7KB
              against ~99KB.

              ratio="" because the drawing sets its own height. The 600px
              floor plus horizontal scroll is for phones: 1408 units inside
              375px would set the lane labels below 5px. */}
          <Figure
            n="01"
            ratio=""
            tint="bg-[#F9F8F6]"
            caption="Before the redesign: one report for the brand, two systems that disagreed, and the tools each market built to optimise their own workflows."
          >
            <div className="w-full">
              <div className="overflow-x-auto">
                <svg
                viewBox="0 0 1408 1230"
                className="block w-full min-w-[600px] h-auto"
                role="img"
                aria-label="A service blueprint of reporting before the redesign. The brand receives one performance report. Below the line of visibility, two systems of record, Mission Control and Campaign Manager, are marked with a fail point because their numbers did not agree. Below those sit three workarounds built by teams: spreadsheets kept per market across North America, Australia, the UK, France and Germany, Google Docs with numbers pasted in, and Looker boards spun up ad hoc. Everything passes through a single step, assembled by hand every time, which cost up to eight hours of Commercial's time on one complex brand report."
              >
                  <rect x="80" y="236" width="1248" height="224" fill="#1C1C1C" opacity="0.025"/>
                  <rect x="80" y="840" width="1248" height="140" fill="#1C1C1C" opacity="0.025"/>
                  <line x1="80" y1="60" x2="1328" y2="60" stroke="#1C1C1C" strokeOpacity="0.1" strokeWidth="1"/>
                  <line x1="80" y1="460" x2="1328" y2="460" stroke="#1C1C1C" strokeOpacity="0.1" strokeWidth="1"/>
                  <line x1="80" y1="840" x2="1328" y2="840" stroke="#1C1C1C" strokeOpacity="0.1" strokeWidth="1"/>
                  <line x1="80" y1="980" x2="1328" y2="980" stroke="#1C1C1C" strokeOpacity="0.1" strokeWidth="1"/>
                  <line x1="340" y1="60" x2="340" y2="980" stroke="#1C1C1C" strokeOpacity="0.1" strokeWidth="1"/>
                  <text x="104" y="154.0" fontFamily="IBM Plex Mono, monospace" fontSize="18" letterSpacing="2.4" fill="#6A6A6A">BRAND</text>
                  <path d="M 360 100 H 820 V 174 C 737 196, 663 152, 590 174 C 517 196, 433 152, 360 174 Z" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.5"/>
                  <text x="386" y="148" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="29" fontWeight="600" fill="#1C1C1C">One performance report</text>
                  <line x1="80" y1="236" x2="1328" y2="236" stroke="#1C1C1C" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="9 7"/>
                  <text x="1328" y="225" textAnchor="end" fontFamily="IBM Plex Mono, monospace" fontSize="18" letterSpacing="2.4" fill="#6A6A6A">LINE OF VISIBILITY</text>
                  <text x="104" y="354.0" fontFamily="IBM Plex Mono, monospace" fontSize="18" letterSpacing="2.4" fill="#6A6A6A">SYSTEMS OF RECORD</text>
                  <rect x="360" y="276" width="440" height="104" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.5"/>
                  <text x="386" y="318" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="29" fontWeight="600" fill="#1C1C1C">Mission Control</text>
                  <text x="386" y="348" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="21" fill="#6A6A6A" opacity="1">built for engineers</text>
                  <rect x="888" y="276" width="440" height="104" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.5"/>
                  <text x="914" y="318" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="29" fontWeight="600" fill="#1C1C1C">Campaign Manager</text>
                  <text x="914" y="348" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="21" fill="#6A6A6A" opacity="1">reporting split across pages</text>
                  <rect x="829" y="313" width="30" height="30" rx="4" fill="#956B07"/>
                  <text x="844" y="335" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="18" fontWeight="600" fill="#FFFFFF">!</text>
                  <text x="844" y="410" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="18" letterSpacing="1.3" fill="#6A6A6A">the numbers did not agree</text>
                  <text x="104" y="656.0" fontFamily="IBM Plex Mono, monospace" fontSize="18" letterSpacing="2.4" fill="#6A6A6A">WORKAROUNDS</text>
                  <rect x="360" y="500" width="968" height="104" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.5" strokeDasharray="7 5"/>
                  <text x="386" y="542" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="29" fontWeight="600" fill="#1C1C1C">Spreadsheets</text>
                  <text x="386" y="572" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="21" fill="#6A6A6A" opacity="1">personal and team-shared</text>
                  <rect x="386" y="620" width="202" height="40" rx="20.0" fill="#1C1C1C" opacity="0.055"/>
                  <text x="487.0" y="646.0" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="18" letterSpacing="1.8" fill="#404040">NORTH AMERICA</text>
                  <rect x="602" y="620" width="152" height="40" rx="20.0" fill="#1C1C1C" opacity="0.055"/>
                  <text x="678.0" y="646.0" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="18" letterSpacing="1.8" fill="#404040">AUSTRALIA</text>
                  <rect x="768" y="620" width="63" height="40" rx="20.0" fill="#1C1C1C" opacity="0.055"/>
                  <text x="799.5" y="646.0" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="18" letterSpacing="1.8" fill="#404040">UK</text>
                  <rect x="845" y="620" width="114" height="40" rx="20.0" fill="#1C1C1C" opacity="0.055"/>
                  <text x="902.0" y="646.0" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="18" letterSpacing="1.8" fill="#404040">FRANCE</text>
                  <rect x="973" y="620" width="126" height="40" rx="20.0" fill="#1C1C1C" opacity="0.055"/>
                  <text x="1036.0" y="646.0" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="18" letterSpacing="1.8" fill="#404040">GERMANY</text>
                  <rect x="360" y="704" width="468" height="104" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.5" strokeDasharray="7 5"/>
                  <text x="386" y="746" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="29" fontWeight="600" fill="#1C1C1C">Google Docs</text>
                  <text x="386" y="776" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="21" fill="#6A6A6A" opacity="1">numbers pasted in</text>
                  <rect x="860" y="704" width="468" height="104" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.5" strokeDasharray="7 5"/>
                  <text x="886" y="746" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="29" fontWeight="600" fill="#1C1C1C">Looker boards</text>
                  <text x="886" y="776" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="21" fill="#6A6A6A" opacity="1">spun up ad hoc</text>
                  <text x="104" y="916.0" fontFamily="IBM Plex Mono, monospace" fontSize="18" letterSpacing="2.4" fill="#6A6A6A">ASSEMBLY</text>
                  <rect x="360" y="862" width="900" height="96" fill="#1C1C1C"/>
                  <text x="386" y="919.0" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="29" fontWeight="600" fill="#FFFFFF">Assembled by hand, every time</text>
                  <rect x="1276" y="895" width="30" height="30" rx="4" fill="#956B07"/>
                  <text x="1291" y="917" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="18" fontWeight="600" fill="#FFFFFF">!</text>
                  <text x="104" y="1052" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="46" fontWeight="600" fill="#1C1C1C">Up to 8 hours</text>
                  <text x="104" y="1092" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="23" fill="#404040">of Commercial&rsquo;s time on a single complex brand report</text>
                  <rect x="104" y="1151" width="30" height="30" rx="4" fill="#956B07"/>
                  <text x="119" y="1173" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="18" fontWeight="600" fill="#FFFFFF">!</text>
                  <text x="148" y="1173" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="21" fill="#404040">Fail point</text>
                  <rect x="300" y="1154" width="38" height="24" fill="#FFFFFF" stroke="#1C1C1C" strokeWidth="1.5" strokeDasharray="7 5"/>
                  <text x="352" y="1173" fontFamily="Instrument Sans, ui-sans-serif, sans-serif" fontSize="21" fill="#404040">Built by teams, owned by no one</text>
                </svg>
              </div>
              {/* The figure is cropped on a phone rather than shrunk, so say so.
                  Without this the right edge reads as the drawing ending. */}
              <p className="sm:hidden px-4 pb-3 pt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6A6A6A]">
                Scroll to see the rest
              </p>
            </div>
          </Figure>
        </section>

        {/* Part 1: Auditing and Aligning the Foundations */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#49769E] mb-2">
            Part One
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-10">
            Auditing and Aligning the Foundations
          </h2>

          <div className="space-y-10">
            <div>
              <SubLabel>Problem</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
                Reporting had become fragmented and unreliable.
              </p>
              <ul className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Mission Control was built for engineers, but Commercial were relying on it too</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Campaign Manager split reporting across multiple isolated pages</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Data inconsistencies eroded trust internally and with brands</li>
              </ul>
            </div>

            <div>
              <SubLabel>Challenges Identified</SubLabel>
              <ul className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Different refresh rates between systems created data mismatches</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Duplicated charts and conflicting metrics across tools</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> No shared understanding of how datasets connected</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Heavy manual effort to compile brand reports</li>
              </ul>
            </div>

            <div>
              <SubLabel>Process</SubLabel>
              <div className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                <p>
                  The audit started with the people using the data. Commercial sat across
                  North America, Australia, the UK, France and Germany, and each market had
                  settled into its own way of reporting. They kept coming to me with gaps
                  and differences in their numbers, which made their decks hard to
                  understand and talk through. Building the WMS had already uncovered
                  discrepancies in the data, including mismatched refresh rates between
                  the two systems.
                </p>
                <p>
                  I audited every existing reporting view across Campaign Manager and
                  Mission Control, documenting duplication and logic gaps. The picture became much clearer: the discrepancies ran deep,
                  and there was no single, central reporting hub.
                </p>
                <p>
                  In parallel, I worked with the Commercial Team to review the reports
                  they shared with brands, pinpointing where manual edits and visual
                  inconsistencies created risk.
                </p>
                <p>
                  The audit didn&rsquo;t say Mission Control had to go. Engineers found
                  it useful, and it was built for them. The problem was that Commercial
                  had been given access to a developer tool, and were pulling numbers out
                  of it for brands. My proposal to the CTO was to keep Mission Control for
                  engineering, build Commercial reporting of their own, and treat that as
                  product work rather than maintenance.
                </p>
              </div>
            </div>

            <div>
              <SubLabel>Research and Testing</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
                To validate direction, I interviewed eight people across Product, Commercial,
                Engineering and Operations. Using a Figma-based testing matrix, I mapped
                their workflows and captured pain points. The findings were consistent:
              </p>
              <ul className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> People were piecing together insights across multiple tools</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Each team defined &ldquo;reporting&rdquo; differently (fulfilment vs engagement vs exports)</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> No one had a full, end-to-end picture of campaign performance</li>
              </ul>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                That was enough to get the rebuild properly backed.
              </p>
            </div>
          </div>
        </section>

        {/* Part 2: Redesigning the Reporting Experience */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#49769E] mb-2">
            Part Two
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-10">
            Redesigning the Reporting Experience
          </h2>

          <div className="space-y-10">
            <div>
              <SubLabel>Problem</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                Campaign Manager&rsquo;s reporting pages (Overview, Orders, Demographics,
                Feedback and Reviews) existed in isolation. There was no hierarchy,
                shared data model or visual consistency.
              </p>
            </div>

            <div>
              <SubLabel>Design Approach</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
                I defined a single Reporting Hub that could:
              </p>
              <ul className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Unify data sources under one structure</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Standardise metrics, terminology and visualisation styles</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Simplify navigation, so people could find things without being told where they were</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Show where a number came from, so people could check it rather than take it on faith</li>
              </ul>
            </div>

            <div>
              <SubLabel>Exploration</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
                I created a series of prototypes exploring:
              </p>
              <ul className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Mapped how data moved between systems as it was, and as it needed to be</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Card-based layouts grouping metrics by performance type</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Standardised filters, comparison modes and accessibility patterns</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Error and low-data states, so a gap looked like a gap rather than a zero</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Early versions of the brand-level summaries, and the structures the ROI work would later need</li>
              </ul>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                Each iteration was reviewed with Product, Commercial and Engineering to
                ensure the hierarchy reflected how insights were actually used and
                shared.
              </p>

              {/* Two figures rather than one. The full page is 0.765 wide to tall, so
                  at the 704 this column gives it came out 920 tall: past a laptop
                  viewport, with 7px body text. Cut into the sections it reads at
                  the same scale and half the height. The funnel section below this
                  is left out because it was never finished.

                  quality 95 because the default 75 softens labels this small. */}
              <Figure
                n="02"
                ratio=""
                tint="bg-[#F9F8F6]"
                caption="The brand overview as proposed: summary metrics, channel performance and campaign stock in one structure. Designed in 2025 and not built, and the figures in it are illustrative."
              >
                <Image src={figOverview} alt="The brand overview as proposed. A left navigation lists Overview, Orders, Stock, Distribution, Emails, Clicks, Consumers, Feedback and Ad performance. An insights strip carries a low stock alert and a top campaign. Below it, four summary cards give total orders, reach, engagement rate and cost per consumer, beside a chart comparing reach against engagement across six social channels. A campaign performance table then lists five products with their region, channel, stock, usage and stock status. Section headings are still placeholders, because the page was a proposal rather than a built screen." quality={95} placeholder="blur" className="w-full h-auto" />
              </Figure>

              <Figure
                n="03"
                ratio=""
                tint="bg-[#F9F8F6]"
                caption="Further down the same page: audience, geographic redemption and revenue by market."
              >
                <Image src={figAudience} alt="The next section of the same page. On the left, four cards give primary audience, top channel, most engaged segment and growth opportunity. On the right, a geographic redemption map of the United Kingdom with a tooltip showing samples sent, redemptions and redemption rate, and beneath it revenue for four locations in dollars, pounds and euros." quality={95} placeholder="blur" className="w-full h-auto" />
              </Figure>
            </div>

            <div>
              <SubLabel>Impact</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-8">
                The new Reporting Area established a single source of truth for
                campaign performance.
              </p>
              {/* Equal air above and below: this line is a standalone statement,
                  not the second half of the paragraph before it. */}
              <p className="font-serif text-2xl text-neutral-900 mb-8">
                A complex brand report took up to eight hours to assemble. The redesign{' '}
                <span className="text-[#49769E] italic">halved it</span>, and introduced
                consistent visual language and data standards across every team.
              </p>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                The work carried on well past 2024. That foundation became SoPost&rsquo;s
                ROI and Impact Dashboards, Comparison Tables and the Reporting Hub,
                which I picked up with our Product Manager the following year.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Reflection</SectionLabel>
          <div className="space-y-5 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
            <p>
              People trusted the numbers again. The tools were joined up, Engineering and
              the Commercial Team were working from the same definitions, and reporting
              stopped being something you rebuilt by hand every time.
            </p>
            <p>
              It became the foundation for everything that followed. The stock work, the
              ROI dashboards, all of it traces back to one audit that started because
              people simply couldn&rsquo;t agree on the numbers anymore.
            </p>
          </div>
        </section>

        <section className="py-12 border-b border-neutral-200/80">
          <Testimonial
            quote={
              <>
            I had the pleasure of working with Jade for nearly three years at SoPost,
            where she was a driving force behind the evolution of our design and
            reporting capabilities.
              </>
            }
            name="Isabel Llamas"
            role="Senior Product Manager, SoPost"
            href="https://www.linkedin.com/in/isabelllamasroman/"
          />
        </section>

        <CaseStudyFooter currentSlug="reporting" />
      </main>

      <SiteFooter />
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { CaseStudyFooter, SiteFooter } from '../../caseStudiesData';

export const metadata = {
  title: 'Making a legacy platform simple, accessible and built to scale: Jade Parrish',
  description: 'Transforming a legacy EDI platform into a scalable, accessible SaaS product.',
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

export default function NetIXCaseStudy() {
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
            Enterprise Product &amp; Rebrand &middot; Sole Designer
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Making a legacy platform simple, accessible and built to scale.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Transforming a legacy EDI platform into a scalable, accessible SaaS product.
          </p>
        </section>

        {/* At a Glance */}
        <section className="py-8 border-b border-neutral-200/80">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Role</p>
              <p className="text-sm font-medium text-neutral-900">Sole Designer</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Clients</p>
              <p className="text-sm font-medium text-neutral-900">DPD, Radley, NHS Supply Chain +1</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Outcome</p>
              <p className="text-sm font-medium text-[#A47864]">40%+ faster processes</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mb-1.5">Standards</p>
              <p className="text-sm font-medium text-neutral-900">EDI, PEPPOL, WCAG 2.1 AA</p>
            </div>
          </div>
        </section>

        {/* Setting the Scene */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Setting the Scene</SectionLabel>
          <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
            <p>
              When I joined NetEDI, I inherited NetIX: a platform the whole business
              depended on every day, that had very much outgrown what it was built on.
              It ran in Microsoft Silverlight, and it was outdated, visually inconsistent,
              and hard to find your way around.
            </p>
            <p>
              As the sole designer, I was responsible for bringing clarity, structure and
              usability to a deeply technical enterprise product used by clients including
              DPD, Radley, Tangle Teezer and NHS Supply Chain.
            </p>
            <p>
              The goal was to modernise the interface and improve usability for both
              technical and non-technical users, without disrupting hundreds of live
              customer integrations.
            </p>
          </div>

          <ImagePlaceholder tint="bg-[#E9E4DE]" caption="NetIX interface, before redesign" />
        </section>

        {/* Part 1: Modernising NetIX */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#A47864] mb-2">
            Part One
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-10">
            Modernising NetIX
          </h2>

          <div className="space-y-10">
            <div>
              <SubLabel>Problem</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The legacy platform was functional but inefficient and difficult to use.
                It looked and behaved like a system designed for engineers, not for
                people managing business operations.
              </p>
              <ul className="space-y-2.5 text-neutral-700 text-sm">
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Complex terminology and poor hierarchy</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Minimal validation, feedback or error handling</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Inconsistent layouts and navigation</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> No scalability for tablet or desktop responsiveness</li>
              </ul>
            </div>

            <div>
              <SubLabel>Process</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                I began by mapping every workflow, from document processing to profile
                setup and error resolution. I interviewed support and engineering teams
                to understand friction points and identify which workarounds had become
                &ldquo;standard practice.&rdquo;
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                That meant getting enough grasp of the technical standards underneath,
                including EDI and PEPPOL, the e-procurement standard behind public sector
                buying. Most of that work happened out of sight: for NHS Supply Chain in
                particular, the complexity sat in what the system was doing behind the
                scenes rather than anything a person would see. I needed to understand it
                well enough to design one service that worked for everyone using it,
                rather than something that only made sense if you already knew how the
                plumbing worked.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                From there, I designed new structures for:
              </p>
              <ul className="space-y-2.5 text-neutral-700 text-sm mb-4">
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Dashboards showing live order and invoice volumes at a glance</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Editor and process screens simplified for data entry and validation</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Document overviews with clear state, buyer and seller visibility</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Reusable tables with filtering and inline actions</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed">
                The redesign prioritised hierarchy, whitespace and error prevention,
                resulting in a modular system that could scale across devices and screen
                sizes.
              </p>

              <ImagePlaceholder tint="bg-[#E3E6E1]" caption="Redesigned dashboard and process screens" />
            </div>

            <div>
              <SubLabel>Outcome</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-2">
                The new NetIX interface replaced Silverlight with a modern, modular
                design system.
              </p>
              <p className="font-serif text-2xl text-neutral-900 mb-8">
                It reduced the time to create or update a process by over{' '}
                <span className="text-[#A47864] italic">40 percent</span>, and
                significantly decreased support requests.
              </p>

              <div className="space-y-4">
                <blockquote className="border-l-2 border-neutral-300 pl-4 py-1 italic font-serif text-neutral-800 text-base">
                  &ldquo;Looks 100 times better and is a lot easier to use.&rdquo;
                  <footer className="mt-1 text-sm not-italic font-sans text-neutral-500">
                    &ndash; Origin Storage
                  </footer>
                </blockquote>
                <blockquote className="border-l-2 border-neutral-300 pl-4 py-1 italic font-serif text-neutral-800 text-base">
                  &ldquo;A better platform from a technology and compatibility point of
                  view.&rdquo;
                  <footer className="mt-1 text-sm not-italic font-sans text-neutral-500">
                    &ndash; Radley
                  </footer>
                </blockquote>
                <blockquote className="border-l-2 border-neutral-300 pl-4 py-1 italic font-serif text-neutral-800 text-base">
                  &ldquo;More user-friendly. Looks very good, easy on the eye.&rdquo;
                  <footer className="mt-1 text-sm not-italic font-sans text-neutral-500">
                    &ndash; A J Barbers
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: Post-Acquisition Rebrand */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#A47864] mb-2">
            Part Two
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-10">
            Post-Acquisition Rebrand
          </h2>

          <div className="space-y-10">
            <div>
              <SubLabel>Context</SubLabel>
              <p className="text-neutral-700 leading-relaxed">
                In late 2019, NetEDI was acquired by Cegedim Group, a French SaaS
                provider headquartered in Boulogne-Billancourt, Paris. NetIX became part
                of Cegedim&rsquo;s wider ecosystem, and I was asked to align the product
                with their Sy platform branding.
              </p>
            </div>

            <div>
              <SubLabel>Challenges</SubLabel>
              <ul className="space-y-2.5 text-neutral-700 text-sm">
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Redesigning a product that had just launched</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Balancing brand consistency with accessibility and usability</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Raising WCAG 2.1 AA contrast failures in the parent company&rsquo;s palette, and finding a way forward when the decision was to proceed</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Coordinating implementation between UK and French engineering teams</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Introducing the first structured design tokens and variables into a legacy CSS codebase</li>
              </ul>
            </div>

            <div>
              <SubLabel>Process</SubLabel>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  I reviewed Cegedim&rsquo;s brand library, compared colour and
                  typography systems, and ran accessibility testing across all proposed
                  palettes. Several of the mid-range colours failed WCAG 2.1 AA contrast
                  ratios, so I documented the specific values, tested alternatives, and
                  raised it in writing with both NetEDI and Cegedim before anything was
                  implemented.
                </p>
                <p>
                  The decision was to proceed with the parent company&rsquo;s palette. That
                  left me with a choice about what to do with the concern, and I took the
                  pragmatic route: if the brand colours were fixed, I could still control
                  how consistently everything else was built. I standardised UI components
                  and layouts to form the foundation of a shared design system, mapping
                  tokens between Figma and CSS, so that contrast decisions lived in one
                  place and could be corrected later without rebuilding the interface.
                </p>
                <p>
                  I planned updates in Jira, sketched rebranded dashboards, and validated
                  designs through prototypes before any implementation began.
                </p>
                <p>
                  Collaboration with Cegedim&rsquo;s product and engineering teams in
                  Paris was critical. I travelled to Boulogne-Billancourt to work
                  on-site with stakeholders and developers, reviewing accessibility
                  adjustments, aligning with the French marketing team, and presenting
                  progress to executive sponsors. This face-to-face collaboration
                  accelerated decision-making and ensured design quality held up across
                  both product ecosystems.
                </p>
              </div>

              <ImagePlaceholder tint="bg-[#E4E1E8]" caption="Rebrand: before and after Cegedim alignment" />
            </div>

            <div>
              <SubLabel>Outcome</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The rebrand delivered a unified interface that preserved NetIX&rsquo;s
                usability while aligning it with Cegedim&rsquo;s broader SaaS suite.
              </p>
              <ul className="space-y-2.5 text-neutral-700 text-sm">
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Introduced consistent visual hierarchy and colour usage</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Established structured colour tokens and typography scales, so contrast could be corrected centrally rather than screen by screen</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Improved user trust and engagement post-acquisition</li>
                <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Created the groundwork for a scalable design system across multiple Cegedim products</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Reflection</SectionLabel>
          <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
            <p>
              This project marked a genuine turning point for me: the first time I had
              full ownership of an enterprise SaaS product, from research through to
              system-level design, and nobody else to hand the hard decisions to.
            </p>
            <p>
              Collaborating closely with Cegedim in Paris, including working on-site in
              Boulogne-Billancourt, gave me first-hand experience of how international
              product teams align brand, accessibility and technical delivery.
            </p>
            <p>
              NetIX evolved from a legacy desktop app into a scalable platform that
              customers described as faster, smarter and easier to use.
              The work established a design and technical foundation for future
              integrations, letting the company expand partner connectivity without
              re-engineering setup logic each time. It also strengthened my ability to
              lead design work across teams, languages and cultures, experience that
              still shapes how I approach complex, system-wide projects today.
            </p>
          </div>
        </section>

        <CaseStudyFooter currentSlug="netix" />
      </main>

      <SiteFooter />
    </div>
  );
}

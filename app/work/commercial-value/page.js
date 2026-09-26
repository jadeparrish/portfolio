import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { CaseStudyFooter, SiteFooter } from '../../caseStudiesData';

export const metadata = {
  title: 'Helping commercial teams see the value they create: Jade Parrish',
  description: 'A shared framework for showing long-term value, and a faster way to compare campaign results.',
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
      <ImageIcon className="w-6 h-6 text-neutral-600" strokeWidth={1.5} />
      <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-medium">
        Visual coming soon
      </p>
      <p className="text-xs text-neutral-600">{caption}</p>
    </div>
  );
}

export default function CommercialValueCaseStudy() {
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
            Commercial Product &middot; Design Lead
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Helping commercial teams see the value they create.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
            A shared framework for showing long-term value, and a faster, more
            consistent way to compare campaign results.
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
              <p className="text-sm font-medium text-neutral-900">Product, Commercial, CSMs</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Built in</p>
              <p className="text-sm font-medium text-neutral-900">Looker and Figma</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Outcome</p>
              <p className="text-sm font-medium text-neutral-900">Piloted live with CSM and Commercial teams</p>
            </div>
          </div>
        </section>

        {/* Setting the Scene */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Setting the Scene</SectionLabel>
          <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
            <p>
              Once reporting had a real foundation (that&rsquo;s the{' '}
              <Link
                href="/work/reporting"
                className="underline underline-offset-4 decoration-neutral-500 hover:decoration-[#8D6553] hover:text-[#8D6553] transition-colors"
              >
                Reporting Area Redesign
              </Link>
              ), the obvious next question was what all that reliable data should actually
              help people say. In 2025 I led two connected pieces of work to answer it.
            </p>
            <p>
              The first was an ROI Impact Dashboard, to show the value of a campaign over
              time rather than only its immediate results. The second was a comparison
              table framework, to make it quick to see how campaigns, brands and markets
              performed side by side.
            </p>
            <p>
              Both came from the same problem: commercial teams and CSMs had the data, but
              not a clear, consistent way to turn it into a story.
            </p>
          </div>

          <ImagePlaceholder tint="bg-[#E7E2DC]" caption="From delivery metrics to long-term value" />
        </section>

        {/* Part 1: ROI Impact Dashboard */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#8D6553] mb-2">
            Part One
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-3">
            Measuring long-term value
          </h2>
          <p className="text-neutral-500 leading-relaxed mb-10">
            Moving the conversation from &ldquo;did it work?&rdquo; to &ldquo;what value
            did it create?&rdquo;
          </p>

          <div className="space-y-10">
            <div>
              <SubLabel>Problem</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                SoPost wanted to move beyond campaign-level metrics. Existing reporting
                focused on delivery and short-term results, which were useful but
                incomplete. It didn&rsquo;t show what happens after the first purchase, or
                how trust and intent turn into future demand.
              </p>
              <Bullets
                items={[
                  'Brands judged campaigns on immediate results, without seeing how they build future demand',
                  'CSMs lacked a clear, consistent story for uplift',
                  'Commercial teams were spending time defending value instead of demonstrating it',
                ]}
              />
            </div>

            <div>
              <SubLabel>A model with two pillars</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Working from a methodology developed by our Head of Product, I defined the
                product interpretation of the model and designed the first interactive
                version. It rests on two complementary pillars of value:
              </p>
              <Bullets
                items={[
                  'Incremental revenue (modelled)',
                  'Purchase intent and trust uplift (measured)',
                ]}
              />
              <p className="text-neutral-700 leading-relaxed mt-4">
                Each is benchmarked, shown with confidence ranges, and positioned as an
                early indicator of lifetime value.
              </p>

              <ImagePlaceholder tint="bg-[#E9E4DE]" caption="ROI Impact Dashboard: incremental revenue and trust uplift" />
            </div>

            <div>
              <SubLabel>Building the pilot</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                I designed the pilot in Looker and tested it with the Commercial team.
                Looker let us:
              </p>
              <Bullets
                items={[
                  'Prototype live with production data',
                  'Iterate quickly as the calculations evolved',
                  'Test real interactions and filters with CSMs and Commercial teams',
                  'Reuse existing data models for future integration into Campaign Manager reporting',
                ]}
              />
              <p className="text-neutral-700 leading-relaxed mt-4">
                That took us from concept to a validated prototype in weeks, with real user
                feedback captured before any engineering investment.
              </p>
            </div>

            <div>
              <SubLabel>Pilot scope</SubLabel>
              <Bullets
                items={[
                  'Incremental revenue: attribution against a control, at campaign and aggregate level',
                  'Purchase intent and trust uplift: benchmarks, confidence ranges and a clear visual hierarchy',
                  'Context: category and network baselines for faster interpretation',
                  'Storytelling: roll-ups, drill-downs and exportable summaries',
                  'Quality gates: thresholds, exclusions and shared definitions',
                ]}
              />
              <p className="text-neutral-700 leading-relaxed mt-4">
                The pilot wasn&rsquo;t about dashboards for their own sake. It tested
                whether the methodology could be understood, trusted and scaled.
              </p>
            </div>

            <div>
              <SubLabel>Testing and validation</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The dashboard went live with the CSM and Commercial teams, where we
                validated:
              </p>
              <Bullets
                items={[
                  'How useful the thresholds and ranges felt in real campaigns',
                  'Whether the visuals made uplift easier to explain',
                  'Where terminology and labelling needed refinement',
                ]}
              />
            </div>

            <div>
              <SubLabel>Impact</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-2">
                Incremental revenue and trust uplift became early, defensible indicators:
                a bridge between immediate results and sustained growth.
              </p>
              <p className="font-serif text-2xl text-neutral-900">
                It changed the conversation internally. We stopped asking{' '}
                <span className="text-[#A47864] italic">&ldquo;did it work?&rdquo;</span>{' '}
                and started asking what value it would create.
              </p>
            </div>
          </div>
        </section>

        {/* Part 2: Comparison Tables */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#8D6553] mb-2">
            Part Two
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-3">
            Comparison tables
          </h2>
          <p className="text-neutral-500 leading-relaxed mb-10">
            A faster, more consistent way to compare campaign performance.
          </p>

          <div className="space-y-10">
            <div>
              <SubLabel>Problem</SubLabel>
              <p className="text-neutral-700 leading-relaxed">
                Comparison reporting, the large summary and benchmark tables, lived across
                Looker dashboards, slides and ad-hoc exports. That fragmentation made it
                hard to spot performance patterns across campaigns or markets, and
                Commercial teams had to build these tables by hand, collating data from
                each source.
              </p>
            </div>

            <div>
              <SubLabel>Why it mattered</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The Commercial team asked for this. They and the CSMs were rebuilding the
                same story for every campaign, and needed a quick, standard way to answer
                questions that kept coming up:
              </p>
              <Bullets
                items={[
                  'How did this campaign perform compared to others in the same market?',
                  'Which product or activation delivered the strongest intent to purchase?',
                  'How does this brand compare against its own benchmarks over time?',
                ]}
              />
            </div>

            <div>
              <SubLabel>Design approach</SubLabel>
              <p className="text-neutral-700 leading-relaxed mb-4">
                I defined the structure and logic for a comparison view that could sit
                directly inside Campaign Manager, removing the need to export data or, for
                some brands, to maintain external decks. It supports flexible comparison
                across brands, territories and campaign types, using shared indicators
                such as opt-in rate, response rate, recommendation and purchase intent.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Every table follows one visual pattern that prioritises speed, legibility
                and clarity. Lightweight filters sit directly above the table, so people
                can explore without visual clutter:
              </p>
              <Bullets
                items={[
                  'Brand and territory, for regional context',
                  'Benchmarks, to show category or network averages',
                  'Campaign type, to compare like with like',
                  'Date range, to track performance over time',
                ]}
              />
              <p className="text-neutral-700 leading-relaxed mt-4">
                I designed these in high fidelity in Figma and reviewed them internally to
                shape hierarchy, grouping logic and interaction patterns.
              </p>

              <ImagePlaceholder tint="bg-[#DDE3E6]" caption="Comparison table with filters: brand, benchmark, campaign type, date" />
            </div>

            <div>
              <SubLabel>Example use cases</SubLabel>
              <Bullets
                items={[
                  'Aveda: product and market benchmarks',
                  'Puig: year-to-date fragrance performance',
                  'e.l.f. Cosmetics: Meta versus TikTok comparison',
                  'Coty UK: brand-level campaign summaries',
                ]}
              />
              <p className="text-neutral-700 leading-relaxed mt-4">
                The focus was a scalable component, not a one-off visualisation. By
                aligning layout, filters and terminology early, the design showed how one
                consistent pattern could unify several data views, and cut the friction
                between having the data and getting to an insight.
              </p>
            </div>

            <div>
              <SubLabel>Expected impact</SubLabel>
              <p className="text-neutral-700 leading-relaxed">
                The framework was designed to cut the time spent on comparison reporting
                sharply, by taking most of the manual work out of it. Tables that
                Commercial teams built by hand,
                collating data from Looker, slides and exports, would come from one view in
                one consistent format, and the same question could be answered for every
                campaign without rebuilding the story each time.
              </p>
              {/* TODO: add a real estimate if you can get one, e.g. hours to build one table by hand */}
            </div>

            <div>
              <SubLabel>Status</SubLabel>
              <p className="text-neutral-700 leading-relaxed">
                The designs were complete and reviewed internally, with a clear path
                defined for building the framework into Campaign Manager. The next steps
                were to refine naming, grouping and thresholds based on internal feedback,
                and to extend coverage beyond beauty and fragrance.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Reflection</SectionLabel>
          <div className="space-y-4 text-neutral-700 text-base leading-relaxed">
            <p>
              Together, these gave commercial teams two things they&rsquo;d been missing: a
              credible way to show value over time, and a fast way to compare results
              without rebuilding the same table from scratch every time. One answers
              &ldquo;what did this create?&rdquo;, the other &ldquo;how does it
              compare?&rdquo;
            </p>
            <p>
              Both taught me the same lesson. Good design isn&rsquo;t about how the
              data looks. It&rsquo;s about how quickly someone can trust it enough to act on
              it.
            </p>
          </div>
        </section>

        <CaseStudyFooter currentSlug="commercial-value" />
      </main>

      <SiteFooter />
    </div>
  );
}

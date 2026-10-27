import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CaseStudyFooter, SiteFooter, Testimonial, Figure } from '../../caseStudiesData';
import figLegacy from '../../netix-legacy.png';
import figScreens from '../../netix-screens.png';
import figWhiteLabel from '../../netix-whitelabel.png';
import figEmail from '../../netix-accessibility-email.png';
import figTokens from '../../netix-tokens.png';

export const metadata = {
  title: 'A legacy platform made simple, accessible and ready to scale: Jade Parrish',
  description: 'Transforming a legacy EDI platform into a scalable, accessible SaaS product.',
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

export default function NetIXCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">

      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-24">
        {/* Title */}
        <section className="pb-8 rule rule-2">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-4">
            Enterprise Product &amp; Rebrand &middot; 2018 to 2022
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            A legacy platform made simple, accessible and ready to scale.
          </h1>
          <p className="text-neutral-600 text-lg sm:text-xl leading-[1.6] max-w-xl">
            Transforming a legacy EDI platform into a scalable, accessible SaaS product.
          </p>
        </section>

        {/* At a Glance */}
        <section className="py-8 rule rule-3">
          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Role</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">Sole Product Designer</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Clients</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">DPD, Radley, Tangle Teezer, NHS Supply Chain</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Outcome</p>
              <p className="text-sm font-medium text-[#49769E] [text-wrap:balance]">Silverlight replaced, white-labelled twice</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Standards</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">EDI, PEPPOL</p>
            </div>
          </div>
        </section>

        {/* Setting the Scene */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Setting the Scene</SectionLabel>
          <div className="space-y-5 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
            <p>
              When I joined NetEDI, I inherited NetIX: a platform the whole business
              depended on every day, that had very much outgrown what it was built on.
              It ran in Microsoft Silverlight, and it was outdated, visually inconsistent,
              and hard to find your way around.
            </p>
            <p>
              I was the only designer on it. The product was deeply technical and used
              every day by clients including DPD, Radley, Tangle Teezer and NHS Supply
              Chain.
            </p>
            <p>
              The goal was to modernise the interface and improve usability for both
              technical and non-technical users, without disrupting hundreds of live
              customer integrations.
            </p>
          </div>

          {/* The brands stay, because NetEDI's client list is published. The data
              attached to them does not: the addresses, trading codes, pallet
              identifiers and references are all invented and internally
              consistent, and a real person's email address has gone from the
              header bar. The browser chrome went with the crop, because the
              bookmarks bar was a client list in its own right. */}
          <Figure
            n="01"
            ratio=""
            tint="bg-[#F9F8F6]"
            caption="NetIX before the redesign: a shipping note in the Silverlight application. The companies are real. The addresses, codes and references are not."
          >
            <Image src={figLegacy} alt="The old NetIX shipping note. A dark blue title bar reads NeTIX Professional version 3.0, with a Powered By NetEDI badge at the right. Beneath it two columns of bordered form fields hold the supplier's and the buyer's name, address, postal area, province, post code and trading codes, each with a small information button beside it. Below those sit three collapsed grey bars for ordering location, delivery location and the shipping note header. At the bottom a dense table lists three pallets, each opening into its own nested row of columns for order number, product code, description, quantities, pallet number and container." quality={95} placeholder="blur" className="w-full h-auto" />
          </Figure>
        </section>

        {/* Part 1: Modernising NetIX */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#49769E] mb-2">
            Part One
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-10">
            Modernising NetIX
          </h2>

          <div className="space-y-10">
            <div>
              <SubLabel>Problem</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
                The legacy platform was functional but inefficient and difficult to use.
                It looked and behaved like a system designed for engineers, not for
                people managing business operations.
              </p>
              <ul className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Complex terminology and poor hierarchy</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Minimal validation, feedback or error handling</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Inconsistent layouts and navigation</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> No scalability for tablet or desktop responsiveness</li>
              </ul>
            </div>

            <div>
              <SubLabel>Process</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
                I began by mapping every workflow, from document processing to profile
                setup and error resolution. I interviewed support and engineering teams
                to understand friction points and identify which workarounds had become
                &ldquo;standard practice.&rdquo;
              </p>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
                That meant getting enough grasp of the technical standards underneath,
                including EDI and PEPPOL, the e-procurement standard behind public sector
                buying. Most of that work happened out of sight: for NHS Supply Chain in
                particular, the complexity sat in what the system was doing behind the
                scenes rather than anything a person would see. I needed to understand it
                well enough to design one service that worked for everyone using it,
                rather than something that only made sense if you already knew how it
                worked.
              </p>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
                From there, I designed new structures for:
              </p>
              <ul className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Dashboards showing live order and invoice volumes at a glance</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Editor and process screens simplified for data entry and validation</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Document overviews with clear state, buyer and seller visibility</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Reusable tables with filtering and inline actions</li>
              </ul>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                I built it as modules rather than pages, so the same pieces worked at any
                screen size and a mistake was harder to make in the first place.
              </p>

              {/* Two screens rather than one: a single screen cannot show a
                  system. The delivery locations, references and supplier names
                  on the dashboard are invented, and the crop stops above the
                  Top 10 and Bottom 10 Suppliers charts, which ranked twenty
                  real companies by performance. */}
              <Figure
                n="02"
                ratio=""
                tint="bg-[#F9F8F6]"
                caption="The same vocabulary across two screens: stat and list cards on the dashboard, the same tables and filters on the product view. Companies and references in the lists are invented."
              >
                <Image src={figScreens} alt="Two redesigned NetIX screens, one above the other. The first is a dashboard: a dark navigation rail down the left, a welcome bar, then four stat cards reading orders fulfilled, total orders, order fill rate and sellers, and beneath them a card listing the latest advance shipping notices with success and failure pills, beside a doughnut chart breaking validation into successful, timeliness and data issues. The second screen is a product overview: the same navigation rail, a filter panel with seller, buyer and property pickers above a table of products listing seller code, description, traded unit EAN, tax code, unit price and last updated, each row ending in edit, view and delete buttons, with paging controls along the bottom." quality={95} placeholder="blur" className="w-full h-auto" />
              </Figure>
            </div>

            <div>
              <SubLabel>Outcome</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-8">
                The new NetIX interface replaced Silverlight with a modern, modular
                design system.
              </p>
              {/* Equal air above and below: this line is a standalone statement,
                  not the second half of the paragraph before it. */}
              <p className="font-serif text-2xl text-neutral-900 mb-8">
                The feedback was about how it looked and how easy it had become. On a
                system people had been{' '}
                <span className="text-[#49769E] italic">stuck with for years</span>, that
                was the point.
              </p>

              <div className="space-y-4">
                <blockquote className="border-l-2 border-neutral-300 pl-4 py-1 italic font-serif text-neutral-800 text-[17px] sm:text-[18px]">
                  &ldquo;I like the status column as it is really easy to see files
                  processing.&rdquo;
                  <footer className="mt-1 text-sm not-italic font-sans text-[#6A6A6A]">
                    &ndash; DPD
                  </footer>
                </blockquote>
                <blockquote className="border-l-2 border-neutral-300 pl-4 py-1 italic font-serif text-neutral-800 text-[17px] sm:text-[18px]">
                  &ldquo;Looks 100 times better and is a lot easier to use.&rdquo;
                  <footer className="mt-1 text-sm not-italic font-sans text-[#6A6A6A]">
                    &ndash; Origin Storage
                  </footer>
                </blockquote>
                <blockquote className="border-l-2 border-neutral-300 pl-4 py-1 italic font-serif text-neutral-800 text-[17px] sm:text-[18px]">
                  &ldquo;A better platform from a technology and compatibility point of
                  view.&rdquo;
                  <footer className="mt-1 text-sm not-italic font-sans text-[#6A6A6A]">
                    &ndash; Radley
                  </footer>
                </blockquote>
                <blockquote className="border-l-2 border-neutral-300 pl-4 py-1 italic font-serif text-neutral-800 text-[17px] sm:text-[18px]">
                  &ldquo;More user-friendly. Looks very good, easy on the eye.&rdquo;
                  <footer className="mt-1 text-sm not-italic font-sans text-[#6A6A6A]">
                    &ndash; A J Barbers
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: White-labelling */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#49769E] mb-2">
            Part Two
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-10">
            White-Labelling NetIX
          </h2>

          <div className="space-y-10">
            <div>
              <SubLabel>Context</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                I had designed NetIX with future rebrands in mind, and that turned out to
                matter sooner than I expected. Because the structure and the components
                were consistent, the platform could carry somebody else&rsquo;s identity
                without being rebuilt.
              </p>
            </div>

            <div>
              <SubLabel>IKEA Restaurants</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                NetEDI were bidding for IKEA Restaurants, and I produced a partial
                rebrand of NetIX in their brand inside a week, so the bid could show the
                platform as their own tool rather than as somebody else&rsquo;s product.
              </p>
            </div>

            <div>
              <SubLabel>La-Z-Boy</SubLabel>
              <div className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                <p>
                  La-Z-Boy had been using the new NetIX interface for a while, and asked
                  for the service to be rebranded for their in-house team to use. I
                  worked to their brand guidelines, liaising with their Management and
                  Marketing Teams, and it took a month.
                </p>
                <p>
                  The loop was short because the components were consistent, so a
                  rebrand meant restyling a system rather than redrawing every screen. I
                  would post the rebranded screens in Slack, they went out for approval,
                  and then they were coded. Days, rather than sprints.
                </p>
              </div>

              <Figure
                n="03"
                ratio=""
                tint="bg-[#F9F8F6]"
                caption="The same product, two brands: NetIX as the La-Z-Boy UK Dealer Portal, and NetIX as De IKEA Mat Nav for the bid."
              >
                <Image src={figWhiteLabel} alt="Two sign-in screens side by side, the same screen wearing two brands. On the left, the La-Z-Boy version: a white navigation bar carrying the La-Z-Boy wordmark, then a deep blue page holding a white sign-in card headed Your NetEDI account, beside a tinted photograph of a reclining sofa captioned La-Z-Boy UK Dealer Portal with phone, email and web details. On the right, the IKEA version: a yellow page patterned with line drawings of food, the IKEA logo above a white sign-in card headed De IKEA Mat Nav, with a yellow log in button and a blue register bar across the foot of the card." quality={95} placeholder="blur" className="w-full h-auto" />
              </Figure>
            </div>

            <div>
              <SubLabel>The edge it gave us</SubLabel>
              <div className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                <p>
                  Being able to do this gave NetEDI something to sell. In a bid we could
                  show a prospect the platform already wearing their brand, which is a
                  different conversation from asking them to imagine it. For a client
                  already using it, we could hand over something that looked like their
                  own tool rather than somebody else&rsquo;s software.
                </p>
                <p>
                  Two brands, one in a week and one in a month, on a platform that had
                  been a Silverlight application when I arrived. The speed came from the
                  structure underneath, which had been built for this before anybody
                  asked for it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 3: Post-Acquisition Rebrand */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#49769E] mb-2">
            Part Three
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-10">
            Post-Acquisition Rebrand
          </h2>

          <div className="space-y-10">
            <div>
              <SubLabel>Context</SubLabel>
              <div className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                <p>
                  In late 2019, NetEDI was acquired by Cegedim Group, a SaaS
                  provider based in France. NetIX became part
                  of Cegedim&rsquo;s wider ecosystem, and I was asked to align the product
                  with their Sy platform branding.
                </p>
                <p>
                  By then I had rebranded NetIX twice, so the mechanics were not the hard
                  part. The hard part was that several colours in the parent
                  company&rsquo;s palette did not meet WCAG 2.1 AA contrast ratios.
                </p>
              </div>
            </div>

            <div>
              <SubLabel>Challenges</SubLabel>
              <ul className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Redesigning a product that had just launched</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Balancing brand consistency with accessibility and usability</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Raising WCAG 2.1 AA contrast failures in the parent company&rsquo;s palette, and finding a way forward when the decision was to proceed</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Coordinating implementation between engineering teams in the UK, France and Egypt</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Introducing the first structured design tokens and variables into a legacy CSS codebase</li>
              </ul>
            </div>

            <div>
              <SubLabel>Process</SubLabel>
              <div className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
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
                  I travelled to France to work on-site with Cegedim&rsquo;s stakeholders
                  and developers, reviewing accessibility adjustments, sitting with the
                  French Marketing Team, and presenting progress to executive sponsors.
                </p>
              </div>

              <Figure
                n="04"
                ratio=""
                tint="bg-[#F9F8F6]"
                caption="The query I raised in writing, before the palette was implemented. The aqua values carry their results: PASS, LARGE TEXT AND GRAPHICAL OBJECTS ONLY, and FAIL."
              >
                <Image src={figEmail} alt="An email headed Colour Palette Accessibility Query. It explains that the colours have been picked from the Sy user interface code and accessibility tested along the way, that the mid-range colours are not recognised as accessible in line with WCAG 2.1 level AA, and asks for the values to be checked before they are implemented in NetIX. Beneath the message sits a block of CSS holding eight aqua custom properties with their hex values. One is annotated PASS, one LARGE TEXT AND GRAPHICAL OBJECTS ONLY, and one FAIL." quality={95} placeholder="blur" className="w-full h-auto" />
              </Figure>
            </div>

            <div>
              <SubLabel>Outcome</SubLabel>
              <p className="text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75] mb-4">
                The rebrand delivered a unified interface that preserved NetIX&rsquo;s
                usability while aligning it with Cegedim&rsquo;s broader SaaS suite.
              </p>
              <ul className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Introduced consistent visual hierarchy and colour usage</li>
                <li className="flex gap-3"><span aria-hidden="true" className="text-[#49769E]">&middot;</span> Established structured colour tokens and typography scales, mapped between Figma and the CSS and shipped in code, so contrast could be corrected centrally rather than screen by screen</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Reflection</SectionLabel>
          <div className="space-y-5 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
            <p>
              I had full ownership of this one, from research through to system-level
              design, with nobody else to hand the hard decisions to.
            </p>
            <p>
              Working on-site with Cegedim in France was the first time I had designed
              across two languages, and across two companies that had only just been
              joined together.
            </p>
            <p>
              What NetIX left behind was a platform that could take a new partner without
              anybody rebuilding the setup logic, and one that could be wearing a
              prospect&rsquo;s brand inside a week.
            </p>
          </div>
        </section>

        <section className="py-12 border-b border-neutral-200/80">
          <Testimonial
            quote={[
              <>
                I managed Jade at NetEDI and she quickly proved herself as a great
                designer. She turns complex workflows into simple, reliable journeys and
                balances strong product thinking with the detail needed to ship.
              </>,
              <>
                Jade proactively sought feedback, worked brilliantly with engineering and
                ops, and kept user needs at the centre of every decision. When the NeTIX
                redesign was launched we got much positive feedback from our key brands.
              </>,
            ]}
            name="Chris Lowe"
            role="Support &amp; Development Director, NetEDI"
            href="https://www.linkedin.com/in/chris-lowe-4124b843/"
          />
        </section>

        <CaseStudyFooter currentSlug="netix" />
      </main>

      <SiteFooter />
    </div>
  );
}

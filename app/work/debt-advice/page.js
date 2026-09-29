import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { CaseStudyFooter, SiteFooter } from '../../caseStudiesData';

export const metadata = {
  title: 'Turning a debt enquiry into something people could act on: Jade Parrish',
  description:
    'A debt diagnostic and a personalised report, for people working out how to repay what they owed, with the right support.',
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

function Bullets({ items }) {
  return (
    <ul className="space-y-4 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="text-[#A47864]">&middot;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function DebtAdviceCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">
      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-24">
        {/* Title */}
        <section className="pb-8 border-b border-neutral-200/80">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-4">
            Service Design &middot; Designer, then Debt Design Lead
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Turning a debt enquiry into something people could act on.
          </h1>
          <p className="text-neutral-600 text-lg sm:text-xl leading-[1.6] max-w-xl">
            A debt diagnostic and a personalised report, for people working out how to
            repay what they owed, with the right support.
          </p>
        </section>

        {/* At a Glance */}
        <section className="py-8 border-b border-neutral-200/80">
          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Role</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">Designer, then Debt Design Lead</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Worked with</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">A second Designer, and the advisors taking the calls</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Focus</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">Debt diagnostic and personalised report</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Outcome</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">A template the brands after it were built from</p>
            </div>
          </div>
        </section>

        {/* Setting the Scene */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Setting the Scene</SectionLabel>
          <div className="space-y-5 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
            <p>
              Debt Advisory Centre is one of the main debt brands at Think Money Group. People
              arrived at it because they were struggling to repay what they owed, usually
              after a change they had not chosen: a job lost, a relationship ended, hours
              cut.
            </p>
            <p>
              The job was to take somebody in that position and get them to a point where
              they understood their own situation and what could be done about it. That
              meant a form journey and a personalised report, both of them regulated,
              because financial advice in the UK is not something you can design freely.
            </p>
            <p>
              There were two of us designing it, one senior to me, and the work was
              split between us. When he left I took it over as Debt Design Lead. It ran
              for a year.
            </p>
          </div>

          <ImagePlaceholder tint="bg-[#E9E4DE]" caption="The form journey" />
        </section>

        {/* The Work */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#8D6553] mb-2">
            The Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-10">
            Asking hard questions gently, then answering them
          </h2>

          <div className="space-y-10 text-[17px] sm:text-[18px] leading-[1.75]">
            <div>
              <SubLabel>Research</SubLabel>
              <div className="space-y-5 text-neutral-700">
                <p>
                  Research ran throughout rather than at the start. We listened to calls
                  in the call centre, ran workshops with the advisors taking them, tested
                  with customers, and watched session recordings and heatmaps in Hotjar.
                </p>
                <p>
                  That was where every argument came from. If a decision on this project
                  could not be traced back to something we had heard on a call or watched
                  somebody do, it did not have much standing.
                </p>
              </div>
            </div>

            <div>
              <SubLabel>The form journey</SubLabel>
              <div className="space-y-5 text-neutral-700">
                <p>
                  What we built was a debt diagnostic. Somebody answered questions about
                  what they owed, what they spent and what they earned, across four steps,
                  and it worked out where they stood and signposted them to the help that
                  fitted. Every question in it is one most people would rather not answer,
                  so the work was in asking them without making anybody feel judged for
                  the answer.
                </p>
                <p>
                  It opened by asking where in the UK they lived, because the options
                  available to somebody in Scotland are not the same as the options
                  available to somebody in England. That is a legal difference rather than
                  a design one, and getting it wrong would have meant showing people
                  solutions they could not have.
                </p>
              </div>
            </div>

            <ImagePlaceholder tint="bg-[#E3E6E1]" caption="The personalised report" />

            <div>
              <SubLabel>The report</SubLabel>
              <div className="space-y-5 text-neutral-700">
                <p>
                  What came back was a personalised report, built from what they had just
                  told us. It gave them a monthly budget summary, income against
                  outgoings, and a breakdown of where the money went: housing, council
                  tax, travel, other debt, phone and internet, day to day living.
                </p>
                <p>
                  Then it set out the options side by side, from a debt management plan
                  through to bankruptcy, and said which ones they were less likely to
                  need. That was key, because bankruptcy is not free. You pay to go
                  bankrupt. So showing somebody in their own numbers that it was not the
                  only road could save them money they did not have.
                </p>
                <Bullets
                  items={[
                    'Their own figures, not a generic example',
                    'Every option shown, including the ones that would cost them to take',
                    'A clear next step, and a person to talk to about it',
                  ]}
                />
              </div>
            </div>

            <div>
              <SubLabel>And the rest of it</SubLabel>
              <div className="space-y-5 text-neutral-700">
                <p>
                  The project grew as it went. It came to include the brand, the website,
                  paid landing pages, and a blog section that I led the implementation of.
                </p>
              </div>
            </div>

            <div>
              <SubLabel>The template</SubLabel>
              <div className="space-y-5 text-neutral-700">
                <p>
                  When the work on Debt Advisory Centre finished, the group wanted a site
                  for another of its brands, IVA Advisory Centre. I did that one on my
                  own, and built it as a template rather than a one-off: responsive
                  layouts the developers could replicate and rebrand quickly, delivered in
                  two weeks including build and test.
                </p>
                <p>
                  The group was spinning debt brands up as experiments, to find out which
                  ones people responded to. Every site after IVA Advisory Centre was built
                  from that template, so a new brand cost weeks rather than months to get
                  in front of anybody.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Reflection</SectionLabel>
          <div className="space-y-5 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
            <p>
              This is the closest I have come to designing a public service without it
              being one. Somebody in difficulty, a set of options they did not know they
              had, rules about what could be said to them, and a form standing between the
              two.
            </p>
            <p>
              What I took from it is that the report was the product. The journey only
              existed to make the report possible, and the report only worked because it
              used their numbers rather than an example. People will tell you a great deal
              about their situation if they can see it coming back to them as something
              that makes sense.
            </p>
          </div>
        </section>

        <CaseStudyFooter currentSlug="debt-advice" />
      </main>

      <SiteFooter />
    </div>
  );
}

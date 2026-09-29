import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { CaseStudyFooter, SiteFooter } from '../../caseStudiesData';

export const metadata = {
  title: 'Rebuilding a customer review around the people doing it: Jade Parrish',
  description:
    'An in-house transformation team, workshops with the staff who did the work, and a workflow built from what they did rather than what the process said they did.',
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

export default function CRMReviewCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">
      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-24">
        {/* Title */}
        <section className="pb-8 border-b border-neutral-200/80">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-600 mb-4">
            Workflow &amp; Service Design &middot; 2016 to 2017
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            Rebuilding a customer review around the people doing it.
          </h1>
          <p className="text-neutral-600 text-lg sm:text-xl leading-[1.6] max-w-xl">
            An in-house transformation team, workshops with the staff who did the work,
            and a workflow built from what they did rather than what the process said they
            did.
          </p>
        </section>

        {/* At a Glance */}
        <section className="py-8 border-b border-neutral-200/80">
          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Role</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">Middleweight Designer</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Worked with</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">A second Designer, staff and the business</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Focus</p>
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">Customer reviews, end to end</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 mb-1.5">Outcome</p>
              {/* A percentage here would be stronger, if the figure is ever recoverable. */}
              <p className="text-sm font-medium text-neutral-900 [text-wrap:balance]">Significantly faster customer reviews</p>
            </div>
          </div>
        </section>

        {/* Setting the Scene */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Setting the Scene</SectionLabel>
          <div className="space-y-5 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
            <p>
              This is the earliest piece of work on this site, and it is still the one I
              think about most when a project starts with a process nobody has looked at
              properly.
            </p>
            <p>
              Think Money Group was running a business transformation programme, and I
              joined an in-house agile team working on the software staff used to carry
              out customer reviews. A review meant going through someone&rsquo;s income
              and outgoings with them, line by line: who paid them, how much, how often,
              what came out before it reached them.
            </p>
            <p>
              Because it sat inside a transformation programme, the process itself was
              being rebuilt at the same time as the software that ran it.
            </p>
            {/* Worth adding when you have it: one line on what staff were using before
                this, and what specifically made reviews slow. */}
          </div>

          <ImagePlaceholder tint="bg-[#E7E2DC]" caption="The review process before the redesign" />
        </section>

        {/* The Work */}
        <section className="py-12 border-b border-neutral-200/80">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#8D6553] mb-2">
            The Work
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 mb-10">
            Starting with the people who did it every day
          </h2>

          <div className="space-y-10 text-[17px] sm:text-[18px] leading-[1.75]">
            <div>
              <SubLabel>Process</SubLabel>
              <div className="space-y-5 text-neutral-700">
                <p>
                  There were two of us designing, and we helped run workshops with the
                  staff doing reviews and with the business. That order mattered. The
                  people on the phones knew where the process broke down, and
                  the business knew what it needed to be able to evidence.
                </p>
                <p>
                  What came out of those workshops wasn&rsquo;t a list of screens. It was
                  an understanding of the workflow itself: the order things happened
                  in, the points where someone had to stop and go and find
                  something, and the bits of the official process that everyone worked
                  around.
                </p>
              </div>
            </div>

            <div>
              <SubLabel>Design approach</SubLabel>
              <div className="space-y-5 text-neutral-700">
                <p>
                  We designed the workflow first and the interface second. The screens
                  followed the shape of the conversation someone was actually having,
                  rather than making them jump around a form to fit how the data was
                  stored.
                </p>
                <p>
                  The heart of it was capturing income and expenditure clearly: employer,
                  amount, how often, and what was deducted before it arrived. Small,
                  repetitive entries that had to be quick to add, easy to correct, and
                  obvious to read back to a customer who was listening on the phone.
                </p>
              </div>
            </div>

            <ImagePlaceholder tint="bg-[#E3E6E1]" caption="Income and expenditure capture" />

            <div>
              <SubLabel>Outcome</SubLabel>
              <div className="space-y-5 text-neutral-700">
                <p>
                  The software cut the time it took to complete a customer review,
                  because the workflow had stopped fighting the conversation.
                </p>
                <Bullets
                  items={[
                    'One flow that matched how a review was conducted',
                    'Income and expenditure entered and corrected without leaving the screen',
                    'A structure the business could evidence against',
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="py-12 border-b border-neutral-200/80">
          <SectionLabel>Reflection</SectionLabel>
          <div className="space-y-5 text-neutral-700 text-[17px] sm:text-[18px] leading-[1.75]">
            <p>
              I have done a version of this project many times since without realising it.
              Sit with the people doing the work, find out what they do rather than what the
              process says, and design from that.
            </p>
            <p>
              It also taught me something about who a tool like this is for. The customer
              never saw this software. They only felt it, in how long the call took and
              whether the person on the other end sounded like they knew what they were
              doing.
            </p>
          </div>
        </section>

        <CaseStudyFooter currentSlug="crm-review" />
      </main>

      <SiteFooter />
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ArticleFooter, SiteFooter } from '../../caseStudiesData';

export const metadata = {
  title: "The hard part of adopting ShadCN wasn't technical: Jade Parrish",
  description: 'A senior product designer on co-leading a ShadCN rollout, and why aligning design and code from day one saves real time.',
};

function InlineLink({ href, children }) {
  return (
    <Link
      href={href}
      className="underline underline-offset-4 decoration-neutral-300 hover:decoration-[#A47864] hover:text-[#A47864] transition-colors"
    >
      {children}
    </Link>
  );
}

function Heading({ children }) {
  return (
    <h2 className="text-2xl font-serif text-neutral-900 tracking-tight mb-4">{children}</h2>
  );
}

export default function ShadcnArticle() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">
      {/* Top Navigation */}
      <header className="max-w-3xl mx-auto px-6 sm:px-8 py-8 sm:py-10">
        <Link
          href="/#thinking"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-neutral-500 hover:text-[#A47864] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to thinking
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 sm:px-8 pb-24">
        {/* Title */}
        <section className="pb-8 border-b border-neutral-200/80">
          <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400 mb-4">
            Design systems &middot; 4 min read
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-[1.15] tracking-tight text-neutral-900 mb-6">
            The hard part of adopting ShadCN wasn&rsquo;t technical.
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-xl">
            A senior product designer on co-leading a ShadCN rollout, and what it taught me
            about aligning design and code from day one.
          </p>
        </section>

        {/* Body */}
        <article className="py-12 border-b border-neutral-200/80 space-y-12 text-neutral-700 text-base leading-relaxed">
          <div className="space-y-4">
            <p>
              I&rsquo;ve worked with both structured, token-driven design systems and newer,
              developer-first tools like ShadCN. I&rsquo;ve taken this approach more than
              once, aligning design and code from day one with senior engineers at two
              different companies, so this isn&rsquo;t a technical comparison. It&rsquo;s
              what I&rsquo;ve learned about how teams actually work when they&rsquo;re
              balancing speed, quality and limited time.
            </p>
            <p>
              None of this is a new tension. Every small team scaling past a handful of
              components eventually asks whether more structure is worth the overhead. What
              I can offer is what actually happened when I ran it twice.
            </p>
            <p>
              The clearest win was practical: one shared set of styles between design and
              engineering meant a single update instead of a dozen.
            </p>
          </div>

          <div>
            <Heading>Start with how the engineers already work</Heading>
            <div className="space-y-4">
              <p>
                Before changing anything in Figma, I audited how the engineers were
                building and styling their CSS, then aligned those conventions with
                ShadCN. That mattered more than any component choice. It meant design and
                code started from the same place, and gave us a common language. I also
                wrote the documentation that went with it.
              </p>
              <p>
                The codebase felt accessible rather than imposed. Developers could work
                without friction, and I could update Figma components and tokens without
                breaking anyone&rsquo;s flow. The result was genuine alignment between
                design and engineering, not through meetings or handoffs, but through
                shared ownership.
              </p>
            </div>
          </div>

          <div>
            <Heading>The hard part was cultural</Heading>
            <div className="space-y-4">
              <p>
                ShadCN gives designers flexibility, but it can also feel intimidating.
                The framework is developer-first, so it&rsquo;s easy to assume you need to
                read code to have a say, or that design decisions are being made in the
                codebase before anyone has looked at them properly.
              </p>
              <p>
                The truth is the opposite. ShadCN increases the need for design
                leadership. Someone has to define hierarchy, accessibility, interaction
                standards and naming conventions. Without that direction, it turns into a
                collection of pretty buttons.
              </p>
              <p>
                There&rsquo;s a second reason design belongs in this. Explaining how
                something works is a different skill from building it, and it tends to sit
                with designers. Someone has to turn the decisions living in the codebase
                into a story the rest of the team can follow. That&rsquo;s true of{' '}
                <InlineLink href="/thinking/undocumented">any system</InlineLink>, not
                just this one.
              </p>
              <p>
                So the challenge isn&rsquo;t technical adoption. It&rsquo;s confidence.
                Designers have to see it not as automation, but as a shared foundation
                they help shape.
              </p>
            </div>
          </div>

          <div>
            <Heading>What traditional systems cost</Heading>
            <div className="space-y-4">
              <p>
                Traditional design systems work best in large organisations, with many
                designers and engineers across many products. Shared tokens, locked-down
                components and formal contribution models create consistency at scale.
                That brings reliability and polish, and it also brings friction. Every
                update becomes a governance decision, and the gap between design intent
                and what actually gets built often widens.
              </p>
              <p>
                In a smaller company that overhead can outweigh the benefit. With one or
                two designers and a handful of engineers, design ends up spending more time
                maintaining the process than improving the experience.
              </p>
            </div>
          </div>

          <div>
            <Heading>What ShadCN gives you instead</Heading>
            <p>
              ShadCN is built for movement. It&rsquo;s copy-and-own by design, so teams can
              adapt components, align them to the brand and evolve the system without
              waiting on releases or dependency updates. It isn&rsquo;t a design system in
              the formal sense. It&rsquo;s a starting point that grows into what you need,
              rather than something you inherit with a hundred rules you&rsquo;re scared to
              break. It&rsquo;s pragmatic and it isn&rsquo;t perfect, but it&rsquo;s real.
            </p>
          </div>

          <div>
            <Heading>Finding the balance</Heading>
            <p className="mb-4">
              The most successful teams I&rsquo;ve seen treat ShadCN as a flexible base,
              then layer on system thinking as the product matures:
            </p>
            <ul className="space-y-2.5 text-sm mb-4">
              <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Start with ShadCN components to move quickly</li>
              <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Introduce tokens, spacing scales and semantic colours once patterns stabilise</li>
              <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Document what matters, not everything</li>
              <li className="flex gap-3"><span className="text-[#A47864]">&middot;</span> Keep accessibility and naming consistent from the start</li>
            </ul>
            <p>
              That way the system stays flexible but grounded. It grows with the product
              rather than ahead of it.
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-serif text-2xl text-neutral-900 leading-snug">
              Traditional systems protect consistency.{' '}
              <span className="text-[#A47864] italic">ShadCN protects momentum.</span>
            </p>
            <p>
              When your team is five people trying to build something that feels bigger,
              momentum is everything. But the reason I&rsquo;d do this again isn&rsquo;t a
              feeling, it&rsquo;s the maths. Before this, a colour or spacing change meant
              updating it separately in Figma, in the CSS, and in however many components
              had drifted from both. Afterwards, it meant updating one shared source and
              watching it propagate. One change, not a dozen, every time.
            </p>
          </div>
        </article>

        <ArticleFooter />
      </main>

      <SiteFooter />
    </div>
  );
}

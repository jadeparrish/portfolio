import React from 'react';
import {
  ArticlePage,
  ArticleTitle,
  ArticleBody,
  ArticleBlock,
  ArticleHeading,
  PullQuote,
  ArticleLink,
} from '../../caseStudiesData';

export const metadata = {
  title: "The hard part of adopting ShadCN wasn't technical: Jade Parrish",
  description:
    'I read the engineers’ CSS before I opened Figma. Most of what worked came out of that.',
};

export default function ShadcnArticle() {
  return (
    <ArticlePage slug="shadcn">
      <ArticleTitle
        kicker={<>Design Systems &middot; 3 min read</>}
        title={<>The hard part of adopting ShadCN wasn&rsquo;t technical.</>}
        subtitle={
          <>
            I read the engineers&rsquo; CSS before I opened Figma. Most of what worked
            came out of that.
          </>
        }
      />

      <ArticleBody>
        <ArticleBlock>
          <p>
            I went through the CSS the engineers had already written, and aligned those
            conventions with ShadCN.
          </p>
          <p>
            That turned out to matter more than any decision I made about components.
            Design and code started from the same place. We had the same words for the
            same things before there was anything to argue about. I then wrote the
            documentation that went with it.
          </p>
          <p>
            I have now done this twice, at two companies, with two different component
            frameworks, co-leading each with a Senior Engineer.
          </p>
        </ArticleBlock>

        <ArticleBlock>
          <p>
            Before, changing a colour or a spacing
            value meant updating it in Figma, then in the CSS, then in however many
            components had already drifted from both. After, it meant changing one shared
            source and watching it propagate. One change rather than a dozen, every time.
          </p>
        </ArticleBlock>

        <div>
          <ArticleHeading>The part that was actually hard</ArticleHeading>
          <ArticleBlock>
            <p>
              ShadCN is developer-first, and it is copy-and-own, so the components live in
              your codebase rather than behind a package you upgrade. For engineers that
              is obviously good. For designers it can feel like the decisions are being
              made somewhere you are not, by people reading a language you might not
              understand. That is where the resistance comes from, and it is a question of
              confidence.
            </p>
            <p>
              Designers have more say in this setup, not less. A framework that ships with
              sensible defaults still needs somebody to decide hierarchy, accessibility,
              interaction standards and naming.
            </p>
            <PullQuote>
              Without that, it turns into a collection of, at best, part-styled buttons.
            </PullQuote>
            <p>
              There is a second reason design belongs in it. How something works is a
              design question and should be treated as one every time, and somebody has to
              turn the decisions sitting in the codebase into an account the rest of the
              team can follow. That is true of{' '}
              <ArticleLink href="/thinking/undocumented">any system</ArticleLink>, not
              only this one.
            </p>
          </ArticleBlock>
        </div>

        <ArticleBlock>
          <p>
            I want to be fair to the alternative. Traditional design systems, with locked
            components and a formal contribution model, do produce consistency, and there
            is a point at which consistency is worth paying for. I am less convinced that
            team size is what decides it. A central system can become its own bottleneck
            at any scale, where every update turns into a governance decision and the
            distance between design intent and shipped product gradually widens. What
            actually decides it is how much variation between products you can live with,
            and how much time you are willing to spend maintaining a process instead of
            improving the thing itself.
          </p>
          <p>
            And the friction is not always the system. I have worked on teams where design
            input was welcome in principle and arrived too late to change anything in
            practice, and no amount of tooling repairs that by itself.
          </p>
        </ArticleBlock>

        <ArticleBlock>
          <p>
            If you are doing this, the sequence that worked for me was to start with the
            components as they come so the team keeps moving, and only introduce tokens,
            spacing scales and semantic colours once the patterns have stopped changing
            every week. Document the things that would otherwise be argued about twice,
            and leave the rest. Fix accessibility and naming early, because both get
            expensive to sort in retrospect and neither gets easier to argue for later.
          </p>
        </ArticleBlock>

        <ArticleBlock>
          <p>
            What this approach did, more than anything a comparison table would show, was
            make the shared ground literal. The same conventions, the same tokens, the
            same source. It is much harder to keep design at arm&rsquo;s length when you
            are both editing the same thing.
          </p>
        </ArticleBlock>
      </ArticleBody>
    </ArticlePage>
  );
}

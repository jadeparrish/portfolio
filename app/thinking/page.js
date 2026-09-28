import React from 'react';
import {
  ArticlePage,
  ArticleTitle,
  ArticleBody,
  ArticleBlock,
  PullQuote,
  ArticleLink,
} from '../../caseStudiesData';

export const metadata = {
  title: "Most \"complex\" systems are just undocumented ones: Jade Parrish",
  description:
    'A genuinely complex system is rare. What is common is a pile of reasonable decisions that nobody ever wrote down.',
};

export default function UndocumentedArticle() {
  return (
    <ArticlePage slug="undocumented">
      <ArticleTitle
        kicker={<>Systems Thinking &middot; 3 min read</>}
        title={<>Most &ldquo;complex&rdquo; systems are just undocumented ones.</>}
        subtitle={
          <>
            A genuinely complex system is rare. What is common is a pile of reasonable
            decisions that nobody ever wrote down.
          </>
        }
      />

      <ArticleBody>
        <ArticleBlock>
          <p>
            I once interviewed eight people about reporting at the same company, and got
            eight different answers about what reporting was.
          </p>
          <p>
            Not eight opinions on whether it was any good. Eight definitions. To
            Operations it meant fulfilment: what had shipped, what hadn&rsquo;t, what was
            stuck in a warehouse. To Customer Success it meant engagement figures they
            could put in front of a brand. To Engineering it meant exports. Every one of
            them was right about their own job, and not one of them had ever had a reason
            to discover that the others meant something else by the same word.
          </p>
          <p>
            Everybody told me reporting at that company was complicated. It wasn&rsquo;t.
            It was undocumented.
          </p>
        </ArticleBlock>

        <ArticleBlock>
          <p>
            The same{' '}
            <ArticleLink href="/work/reporting">audit</ArticleLink> turned up why
            nobody&rsquo;s numbers ever matched. Reports were being pulled from Campaign
            Manager, from spreadsheets, from Google Docs, and from an internal tool called
            Mission Control, and those sources refreshed at different rates. Two people
            could run what they believed was the same report an hour apart, get different
            totals, and both be correct.
          </p>
          <p>
            That had been true for years. It had never been written down. There was no
            document anywhere saying these two numbers will disagree and here is the
            reason, so the people who noticed assumed they had done something wrong, and
            the people who didn&rsquo;t notice carried on and built decks out of it.
          </p>
        </ArticleBlock>

        <ArticleBlock>
          <p>
            I had seen the same thing at NetEDI. Mapping the workflows before{' '}
            <ArticleLink href="/work/netix">rebuilding NetIX</ArticleLink>, I kept
            finding steps that nobody could account for. Not bad steps. Steps that had
            been a sensible response to something, once, and had since quietly become what
            the support team called standard practice. Nobody could tell me why. Only that
            it was how it was done, and that it worked, mostly.
          </p>
        </ArticleBlock>

        <ArticleBlock>
          <p>
            This is what I mean when I say most complex systems aren&rsquo;t. A complex
            system is one where the parts interact in ways you can&rsquo;t predict even
            when you understand every part. That is rare, and when you meet one you
            know about it. What turns up far more often is a system where every individual
            decision was reasonable, made under time pressure by somebody with a good
            reason, and where the reason went unrecorded.
          </p>
          <p>
            The distinction is worth making because the two need completely different
            responses. Real complexity has to be managed, carefully and forever. The other
            thing just has to be written down.
          </p>
          <p>
            It is also why services drift in one direction. Anybody can add an exception,
            a spreadsheet, another handoff, to solve the problem sitting in front of them
            this afternoon, and they are usually right to.
          </p>
          <PullQuote>
            Nobody is ever given the job of going back and saying what the whole thing now
            does.
          </PullQuote>
        </ArticleBlock>

        <ArticleBlock>
          <p>
            The cost of that lands on whoever arrives next. With no clear account of how a
            service works, every new person has to turn detective, piecing it together
            from old tickets, half-remembered decisions and whoever happens to still be
            around. Then that person leaves, and it starts again, and each round of it
            makes the service look a little more complicated than it is.
          </p>
          <p>
            It is also the reason{' '}
            <ArticleLink href="/thinking/legacy">fixing the foundations</ArticleLink>{' '}
            tends to pay for itself. A team that understands its own system spends its
            time improving it. A team that doesn&rsquo;t spends its time working around
            it.
          </p>
        </ArticleBlock>

        <ArticleBlock>
          <p>
            I don&rsquo;t think any of this needs a methodology. The test I use is whether
            I can sketch how a service works on a napkin. If I can&rsquo;t, I don&rsquo;t
            understand it yet, and usually neither does anybody else, and that is the
            finding rather than a step on the way to one.
          </p>
          <p>
            None of this is a new observation. People have been writing about technical
            debt and legibility for years. What I can add is that it has been true every
            single time I have looked.
          </p>
        </ArticleBlock>
      </ArticleBody>
    </ArticlePage>
  );
}

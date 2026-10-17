import React from 'react';
import { Mark } from './caseStudiesData';

/* metadataBase lets the relative image paths below resolve to absolute URLs,
   which is what Slack, LinkedIn and iMessage need to render a preview card.
   Without it a shared link is a bare line of text.

   The icon and the card itself are files, not config: Next picks up
   app/icon.png, app/apple-icon.png and app/opengraph-image.png by name. */
export const metadata = {
  metadataBase: new URL('https://www.jadeparrish.me'),
  title: 'Jade Parrish: Human-centred service & systems designer',
  description: 'Designing complex services and data systems that work better for everyone.',
  openGraph: {
    title: 'Jade Parrish: Human-centred service & systems designer',
    description:
      'Designing complex services and data systems that work better for everyone.',
    url: 'https://www.jadeparrish.me',
    siteName: 'Jade Parrish',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jade Parrish: Human-centred service & systems designer',
    description:
      'Designing complex services and data systems that work better for everyone.',
  },
};

/* Tailwind Play CDN reads this off the global `tailwind` object, so it has to
   run AFTER the CDN script has created it. Running it first throws a reference
   error and the whole config is silently dropped. */
const tailwindConfigScript = `
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Instrument Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
          serif: ['Bricolage Grotesque', 'Georgia', 'serif'],
          display: ['Bricolage Grotesque', 'Georgia', 'serif'],
        },
        colors: {
          paper: '#F9F8F6',
          ink: '#1C1C1C',
          mocha: '#A47864',
        },
      },
    },
  }
`;

const globalStyles = `
  /* Paper, not white, so the moment before Tailwind loads isn't a bright flash. */
  html { background-color: #F9F8F6; }

  /* Display weight. Bricolage is a variable font, so this one number sets the
     weight of every heading on the site. Change 500 here and everything follows. */
  .font-serif { font-variation-settings: "wght" 500; }

  /* Keyboard focus on every link and control, not just the shared components. */
  a:focus-visible,
  button:focus-visible,
  summary:focus-visible,
  [tabindex]:focus-visible {
    outline: 2px solid #A47864;
    outline-offset: 3px;
    border-radius: 2px;
  }

  /* The skip link target shouldn't draw a ring around the whole page. */
  #main-content:focus { outline: none; }

  /* Skip link: invisible until tabbed to, then the first thing on the page. */
  .skip-link {
    position: absolute;
    left: -9999px;
    top: 0;
    z-index: 100;
    background: #1C1C1C;
    color: #F9F8F6;
    padding: 12px 16px;
    font-size: 14px;
    text-decoration: none;
  }
  .skip-link:focus { left: 0; }

  /* Smooth scrolling for the Top link, unless the visitor prefers less motion. */
  @media (prefers-reduced-motion: no-preference) {
    html { scroll-behavior: smooth; }
  }

  /* Entry: the page settles into place once on load, then stays still.
     The animation is only ever applied inside the no-preference query, so
     someone with reduced motion set never gets the starting opacity at all. */
  @keyframes rise {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: none; }
  }
  @media (prefers-reduced-motion: no-preference) {
    header,
    main > * {
      animation: rise 620ms cubic-bezier(.2, .7, .3, 1) both;
    }
    main > *:nth-child(1)   { animation-delay:  40ms; }
    main > *:nth-child(2)   { animation-delay: 140ms; }
    main > *:nth-child(3)   { animation-delay: 240ms; }
    main > *:nth-child(n+4) { animation-delay: 300ms; }

    /* Underlines thicken on hover, so colour isn't the only thing that changes. */
    a {
      transition: text-decoration-color .18s ease,
                  text-decoration-thickness .18s ease,
                  color .18s ease;
    }
  }
  a       { text-decoration-thickness: 1px; }
  a:hover { text-decoration-thickness: 2px; }

  /* Reduced motion: nothing moves, anywhere, including Tailwind's own
     transitions and the smooth scroll above. */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{ __html: tailwindConfigScript }} />
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        {/* One header for the whole site. Lives here so every page gets it
            without each page having to render its own. */}
        <header className="border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-5 flex flex-wrap justify-between items-center gap-x-5 gap-y-1">
            <a
              href="/"
              className="group py-2 -my-2 flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] font-semibold text-neutral-900 hover:text-[#845D4D] whitespace-nowrap transition-colors"
            >
              <Mark size={19} />
              Jade Parrish
            </a>
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-8 text-[11px] tracking-[0.15em] uppercase text-neutral-600">
              <a href="/work" className="py-2 -my-2 hover:text-[#845D4D] transition-colors">Work</a>
              <a href="/thinking" className="py-2 -my-2 hover:text-[#845D4D] transition-colors">Thinking</a>
              <a href="/#about" className="py-2 -my-2 hover:text-[#845D4D] transition-colors">About</a>
              <a href="/#contact" className="py-2 -my-2 hover:text-[#845D4D] transition-colors">Contact</a>
            </nav>

            {/* Availability, as a status readout rather than a sales line.
                Most visitors arrive on a deep link and never see the homepage
                contact block, so the one commercially useful fact about me
                lives up here on every page instead.

                A point larger and half the tracking of a label, because this
                one is meant to be read rather than glanced at. On a phone it
                drops to its own full-width row under the nav.

                This is a status indicator, so it has to stay true: change it
                the day the answer changes. */}
            <span className="order-last w-full sm:w-auto sm:order-none flex items-center gap-2.5 mt-1 pt-3 sm:mt-0 sm:pt-0 border-t sm:border-t-0 border-neutral-200/80 font-mono text-[11px] font-medium uppercase tracking-[0.09em] text-[#5C7355] whitespace-nowrap">
              <span className="w-[7px] h-[7px] rounded-full bg-[#5C7355] ring-4 ring-[#5C7355]/15 flex-none" />
              Available &middot; 2&ndash;3 days/week
            </span>
          </div>
        </header>

        {/* The gap between the header rule and whatever a page starts with
            lives here, once, rather than being repeated on twelve pages.
            The homepage hero tops this up a little to keep its own rhythm. */}
        <div id="main-content" tabIndex={-1} className="pt-12 lg:pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}

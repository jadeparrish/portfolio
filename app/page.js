import React from 'react';
import jadePhoto from './jade-photo.jpg';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowRightLeft,
  Search,
  Target,
  Users,
  Building2,
  Brain,
  Compass,
  TrendingUp,
  Landmark,
  Stethoscope,
  GraduationCap,
  Heart,
  Image as ImageIcon,
} from 'lucide-react';

const whatIDo = [
  {
    icon: Search,
    title: 'Start with what\u2019s real',
    description: 'Auditing how a service actually works today, including the workarounds and handoffs, before designing anything new.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Work across the boundary',
    description: 'Sitting between teams, tools and departments to fix the handoff, not just the screen.',
  },
  {
    icon: Target,
    title: 'Make the case, not just the mockup',
    description: 'Framing decisions in terms leadership can act on: cost, risk and outcome, not just usability.',
  },
];

const thoughts = [
  {
    icon: Users,
    title: 'Why families become project managers.',
    readTime: '5 min read',
  },
  {
    icon: Building2,
    title: 'Why public services optimise for departments instead of people.',
    readTime: '7 min read',
  },
  {
    icon: Brain,
    title: "AI won't fix broken services.",
    readTime: '6 min read',
  },
  {
    icon: Compass,
    title: 'What I wanted to be at 10.',
    readTime: '5 min read',
  },
  {
    icon: TrendingUp,
    title: 'What "did it work?" misses.',
    readTime: '7 min read',
  },
];

const caseStudies = [
  {
    num: '01',
    title: 'Making SEND journeys easier for families to navigate',
    tag: 'Service Design',
    description:
      'Explored how families and professionals experience SEND services across organisational boundaries, identifying where joined-up design could reduce friction.',
    cta: 'Coming soon',
    href: null,
    tint: 'bg-[#EDEAE4]',
  },
  {
    num: '02',
    title: 'Making complex warehouse operations easier to navigate',
    tag: 'Operations & Service Design',
    description:
      'Redesigned fragmented workflows around how warehouse teams actually work, reducing unnecessary complexity and improving accuracy and visibility.',
    cta: 'View case study',
    href: '#',
    tint: 'bg-[#E3E6E1]',
  },
  {
    num: '03',
    title: 'Helping commercial teams see the value they create',
    tag: 'Commercial Product',
    description:
      'Rebuilt the reporting model around how teams understand performance, turning complex metrics into clearer evidence of the value being created.',
    cta: 'View case study',
    href: '#',
    tint: 'bg-[#E7E2DC]',
  },
  {
    num: '04',
    title: 'Turning disconnected data into clearer decisions',
    tag: 'Internal Platform',
    description:
      'Brought fragmented reporting into one scalable experience, cutting reporting time by over 50% and giving teams a shared, trusted view to make better-informed decisions.',
    cta: 'View case study',
    href: '#',
    tint: 'bg-[#DDE3E6]',
  },
  {
    num: '05',
    title: 'Making a legacy platform simple, accessible and built to scale',
    tag: 'Enterprise Product & Rebrand',
    description:
      'Took full ownership of an outdated enterprise platform end-to-end, cutting process creation time by over 40% while resolving WCAG 2.1 AA compliance issues through a cross-border rebrand.',
    cta: 'View case study',
    href: '#',
    tint: 'bg-[#E9E4DE]',
  },
  {
    num: '06',
    title: 'Making a scattered platform navigable at scale',
    tag: 'Product Design & Information Architecture',
    description:
      'Rebuilt a SaaS platform\u2019s navigation from the ground up, mapping actions by user intent rather than department. Introduced a three-tier hierarchy that let the product grow without needing to be restructured again.',
    cta: 'View case study',
    href: '#',
    tint: 'bg-[#E4E1E8]',
  },
];

const whoIWorkWith = [
  {
    icon: Landmark,
    title: 'Public Sector',
    description: 'Local and central government organisations.',
  },
  {
    icon: Stethoscope,
    title: 'NHS & Healthcare',
    description: 'NHS trusts, ICSs and healthcare organisations.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Schools, trusts and education technology providers.',
  },
  {
    icon: Heart,
    title: 'Charities & NFPs',
    description: 'Mission-led organisations creating social impact.',
  },
  {
    icon: Users,
    title: 'Enterprise Teams',
    description: 'Complex product and operations teams.',
  },
];

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400 mb-10 lg:mb-12">
      {children}
    </p>
  );
}

export default function PortfolioHomepage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1C1C1C] font-sans antialiased selection:bg-neutral-200">
      {/* Top Navigation */}
      <header className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-baseline">
        <div className="space-y-1">
          <h1 className="font-semibold tracking-[0.18em] text-xs uppercase text-neutral-900">
            JADE PARRISH
          </h1>
          <p className="text-neutral-500 normal-case text-xs tracking-normal font-normal">
            Human-centred service &amp; systems designer
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-8 lg:gap-x-10 text-xs tracking-[0.15em] uppercase text-neutral-600">
          <a href="#work" className="hover:text-[#A47864] transition-colors">Work</a>
          <a href="#thinking" className="hover:text-[#A47864] transition-colors">Thinking</a>
          <a href="#about" className="hover:text-[#A47864] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#A47864] transition-colors">Contact</a>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Hero */}
        <section className="py-16 sm:py-20 lg:py-28 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 lg:gap-20 items-center border-b border-neutral-200/80">
          <div className="md:col-span-6 space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-[1.12] tracking-tight text-neutral-900">
              Better systems <br />
              create better <span className="italic text-[#A47864]">lives</span>.
            </h2>
            <div className="space-y-5 text-neutral-600 text-base sm:text-lg leading-relaxed max-w-lg font-normal">
              <p>Every day, people rely on services they didn&rsquo;t choose.</p>
              <p>
                I help organisations redesign services, products and processes so they
                work better for the people who depend on them.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-xs text-neutral-500 tracking-wide">
              <span>Public Sector</span>
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <span>Healthcare</span>
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <span>Education</span>
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              <span>Complex Digital Products</span>
            </div>

            <div className="pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] font-medium text-neutral-900 hover:text-[#A47864] hover:translate-x-0.5 transition-all"
              >
                View selected work <ArrowDownRight className="w-4 h-4 text-[#A47864]" />
              </a>
            </div>
          </div>

          {/* Hero illustration placeholder */}
          <div className="md:col-span-6">
            <div className="aspect-[4/3] w-full max-h-[320px] md:max-h-none rounded-sm border border-dashed border-neutral-300 bg-white/60 flex flex-col items-center justify-center gap-3 text-center px-8">
              <ImageIcon className="w-6 h-6 text-neutral-300" strokeWidth={1.5} />
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-400 font-medium">
                Hero illustration: coming soon
              </p>
              <p className="text-xs text-neutral-400 max-w-[220px]">
                Hand-drawn systems ecosystem map
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 lg:py-28 border-b border-neutral-200/80">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 lg:gap-16 items-start">
            <div className="md:col-span-4">
              <div className="aspect-[4/5] max-h-[460px] md:max-h-none w-full max-w-xs md:max-w-none mx-auto bg-neutral-100 border border-neutral-200 rounded-sm overflow-hidden">
                <img
                  src={jadePhoto.src}
                  alt="Jade Parrish"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400 mb-3">
                  About
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif text-neutral-900 leading-snug">
                  I&rsquo;m a human-centred service and systems designer.
                </h3>
              </div>

              <div className="space-y-5 text-neutral-600 text-base leading-relaxed max-w-2xl font-normal">
                <p>
                  Over 15 years I&rsquo;ve moved from graphic design, through web, into
                  senior product design, picking up service design and systems thinking
                  along the way. I use all of it to understand how complex services really
                  work, then redesign them around the people who use and deliver them.
                </p>
                <p>
                  My work often spans teams, touchpoints and organisational boundaries. I
                  look beyond individual screens to understand the wider system: where
                  things break down, where complexity gets passed on to people, and where
                  design can make things work better.
                </p>
                <p>
                  This isn&rsquo;t abstract for me. As a parent to two children with SEND,
                  I&rsquo;ve seen first-hand how disconnected systems make already hard
                  situations harder, and how much difference joined-up design can make.
                  It&rsquo;s part of why this work matters to me.
                </p>
                <blockquote className="border-l-2 border-neutral-300 pl-4 py-1 italic font-serif text-neutral-800 text-lg">
                  &ldquo;I care about designing systems that improve people&rsquo;s everyday
                  lives.&rdquo;
                </blockquote>
              </div>

              <div className="pt-8 border-t border-neutral-200/80">
                <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-neutral-400 mb-3">
                  Capabilities
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-neutral-800 font-mono tracking-wider">
                  <span>Service Design</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-400 translate-y-[3px]" />
                  <span>Systems Thinking</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-400 translate-y-[3px]" />
                  <span>Product Design</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-400 translate-y-[3px]" />
                  <span>Accessibility</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-400 translate-y-[3px]" />
                  <span>Research</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-400 translate-y-[3px]" />
                  <span>Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="py-16 lg:py-24 border-b border-neutral-200/80">
          <SectionLabel>How I Work</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {whatIDo.map((item) => (
              <div key={item.title} className="space-y-4">
                <item.icon className="w-5 h-5 text-neutral-400" strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-normal text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-16 lg:py-24 border-b border-neutral-200/80">
          <SectionLabel>Selected Work</SectionLabel>
          <div className="divide-y divide-neutral-200/70">
            {caseStudies.map((item) => (
              <div
                key={item.num}
                className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 items-start md:items-center py-10 lg:py-12 first:pt-0 last:pb-0"
              >
                <div className="md:col-span-1 lg:col-span-3">
                  <div
                    className={`aspect-[4/3] max-h-[240px] md:max-h-none rounded-sm border border-neutral-200/80 ${item.tint} flex flex-col items-center justify-center gap-1`}
                  >
                    <span className="font-serif text-2xl text-neutral-400">{item.num}</span>
                    <span className="text-[9px] uppercase tracking-[0.15em] text-neutral-400">
                      Visual coming soon
                    </span>
                  </div>
                </div>

                <div className="md:col-span-1 lg:col-span-9 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
                  <div className="space-y-2 lg:max-w-lg">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 font-medium">
                      {item.tag}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl text-neutral-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="shrink-0 lg:pt-1 lg:text-right">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-xs text-neutral-900 font-medium tracking-wider uppercase hover:text-[#A47864] group-hover:translate-x-1 transition-all"
                      >
                        {item.cta} <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#A47864] transition-colors" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400 font-medium tracking-wider uppercase">
                        {item.cta}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who I Work With */}
        <section className="py-16 lg:py-24 border-b border-neutral-200/80">
          <SectionLabel>Who I Work With</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
            {whoIWorkWith.map((item) => (
              <div key={item.title} className="space-y-3">
                <item.icon className="w-5 h-5 text-neutral-400" strokeWidth={1.5} />
                <h3 className="text-sm font-medium text-neutral-900">{item.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I'm Noticing */}
        <section id="thinking" className="py-16 lg:py-24 border-b border-neutral-200/80">
          <SectionLabel>What I&rsquo;m Noticing</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {thoughts.map((article) => (
              <div
                key={article.title}
                className="group cursor-pointer border-t border-neutral-200/60 pt-5 space-y-3"
              >
                <article.icon className="w-5 h-5 text-neutral-300" strokeWidth={1.5} />
                <h4 className="font-serif text-lg text-neutral-900 leading-snug group-hover:underline underline-offset-4 decoration-neutral-300">
                  {article.title}
                </h4>
                <p className="text-[11px] font-mono text-neutral-400">{article.readTime}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium text-neutral-800 hover:text-[#A47864] transition-colors"
            >
              View all thoughts <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 lg:py-32 text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-[#A47864]/10 border border-[#A47864]/30 text-[#A47864] rounded-full text-xs font-mono tracking-wide">
            Open to Part-Time Roles &amp; Fractional Contracts (2&ndash;3 days/week)
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-neutral-900 tracking-tight">
            Let&rsquo;s improve something together.
          </h2>
          <div className="pt-2">
            <a
              href="mailto:hello@jadeparrish.me"
              className="text-lg sm:text-2xl font-serif text-neutral-900 underline underline-offset-8 decoration-neutral-300 hover:decoration-[#A47864] transition-colors"
            >
              hello@jadeparrish.me &rarr;
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200/80 py-10 text-xs text-neutral-500 font-normal">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Jade Parrish. Built with care.</p>
          <div className="flex gap-8 tracking-wider uppercase text-[11px]">
            <a href="#" className="hover:text-[#A47864] transition-colors">LinkedIn</a>
            <a href="mailto:hello@jadeparrish.me" className="hover:text-[#A47864] transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

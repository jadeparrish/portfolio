import React from 'react';

export const metadata = {
  title: 'Jade Parrish: Human-centred service & systems designer',
  description: 'Designing complex services and data systems that work better for everyone.',
};

/* The mark: a lowercase j in the site's display face with a drawn dot rather
   than a typographic full stop, so it reads as a designed thing and not as a
   sentence that stopped early. Defined here because the header is the only
   place it appears in markup. */
function Mark({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      style={{ display: 'block', flex: 'none' }}
    >
      <text
        x="27"
        y="52"
        textAnchor="middle"
        fontFamily="Bricolage Grotesque, Georgia, serif"
        fontWeight="600"
        fontSize="62"
        fill="#1C1C1C"
      >
        j
      </text>
      <circle cx="48" cy="46" r="7" fill="#49769E" />
    </svg>
  );
}

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
          mocha: '#49769E',
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
    outline: 2px solid #49769E;
    outline-offset: 3px;
    border-radius: 2px;
  }

  /* The skip link target shouldn't draw a ring around the whole page. */
  #main-content:focus { outline: none; }

  /* Hash links (#about, #contact) otherwise land the heading flush against
     the top edge with nothing above it, which reads as a broken jump rather
     than an arrival. */
  :target { scroll-margin-top: 2.5rem; }
  [id] { scroll-margin-top: 2.5rem; }


  /* Section rules, drawn rather than ruled. Twelve variants generated
     from fixed seeds: random-looking, but identical on every build and
     every load, so nothing redraws under the visitor. Each path starts
     and ends on the centre line, so the tile repeat is seamless.

     These replace a 1px border. The line is a background at the bottom
     edge, so it draws where the border did; sections carry 64px of
     padding, which is far more than the few pixels the wave needs. */
  /* Drawn on a pseudo-element straddling the edge rather than as a background
     inside it. The tile is 12px tall with the line through its middle, so a
     background positioned at the bottom drew the line 6px ABOVE the boundary,
     and every section read 6px short below and 6px long above. translateY(50%)
     puts the line exactly where the 1px border used to sit. */
  .rule { position: relative; background-image: none; }
  .rule::after,
  .rule.rule-t::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 12px;
    background-repeat: repeat-x;
    background-position: center;
    pointer-events: none;
  }
  .rule::after { bottom: 0; transform: translateY(50%); }
  .rule.rule-t::before { top: 0; transform: translateY(-50%); }
  .rule.rule-t::after { content: none; }
  .rule-0::after, .rule-0.rule-t::before { background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271800%27%20height%3D%2712%27%20viewBox%3D%270%200%201800%2012%27%3E%3Cpath%20d%3D%27M%200.0%205.90%20C%2083.1%205.90%2C%2083.1%207.21%2C%20166.1%207.21%20C%20268.6%207.21%2C%20268.6%203.76%2C%20371.0%203.76%20C%20453.4%203.76%2C%20453.4%208.35%2C%20535.7%208.35%20C%20637.8%208.35%2C%20637.8%203.77%2C%20739.8%203.77%20C%20820.3%203.77%2C%20820.3%207.36%2C%20900.9%207.36%20C%20991.4%207.36%2C%20991.4%203.60%2C%201081.9%203.60%20C%201162.4%203.60%2C%201162.4%207.85%2C%201242.9%207.85%20C%201342.1%207.85%2C%201342.1%204.34%2C%201441.2%204.34%20C%201497.8%204.34%2C%201497.8%209.12%2C%201554.4%209.12%20C%201625.3%209.12%2C%201625.3%204.86%2C%201696.2%204.86%20C%201748.1%204.86%2C%201748.1%205.90%2C%201800.0%205.90%27%20fill%3D%27none%27%20stroke%3D%27%23DEDEDB%27%20stroke-width%3D%271%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E"); }
  .rule-1::after, .rule-1.rule-t::before { background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271800%27%20height%3D%2712%27%20viewBox%3D%270%200%201800%2012%27%3E%3Cpath%20d%3D%27M%200.0%205.90%20C%2099.4%205.90%2C%2099.4%202.84%2C%20198.9%202.84%20C%20293.3%202.84%2C%20293.3%207.98%2C%20387.6%207.98%20C%20486.4%207.98%2C%20486.4%204.44%2C%20585.2%204.44%20C%20681.0%204.44%2C%20681.0%208.04%2C%20776.7%208.04%20C%20861.0%208.04%2C%20861.0%204.45%2C%20945.4%204.45%20C%201019.7%204.45%2C%201019.7%207.24%2C%201094.0%207.24%20C%201173.8%207.24%2C%201173.8%202.76%2C%201253.6%202.76%20C%201339.2%202.76%2C%201339.2%208.33%2C%201424.8%208.33%20C%201496.0%208.33%2C%201496.0%203.81%2C%201567.3%203.81%20C%201659.1%203.81%2C%201659.1%208.46%2C%201751.0%208.46%20C%201775.5%208.46%2C%201775.5%205.90%2C%201800.0%205.90%27%20fill%3D%27none%27%20stroke%3D%27%23DEDEDB%27%20stroke-width%3D%271%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E"); }
  .rule-2::after, .rule-2.rule-t::before { background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271800%27%20height%3D%2712%27%20viewBox%3D%270%200%201800%2012%27%3E%3Cpath%20d%3D%27M%200.0%205.90%20C%2094.6%205.90%2C%2094.6%208.15%2C%20189.2%208.15%20C%20267.4%208.15%2C%20267.4%203.96%2C%20345.6%203.96%20C%20452.9%203.96%2C%20452.9%207.59%2C%20560.2%207.59%20C%20616.6%207.59%2C%20616.6%204.27%2C%20673.0%204.27%20C%20736.1%204.27%2C%20736.1%207.69%2C%20799.2%207.69%20C%20862.8%207.69%2C%20862.8%204.64%2C%20926.4%204.64%20C%20993.4%204.64%2C%20993.4%207.65%2C%201060.4%207.65%20C%201142.1%207.65%2C%201142.1%204.42%2C%201223.7%204.42%20C%201275.5%204.42%2C%201275.5%207.39%2C%201327.2%207.39%20C%201407.3%207.39%2C%201407.3%203.97%2C%201487.3%203.97%20C%201578.8%203.97%2C%201578.8%208.83%2C%201670.4%208.83%20C%201735.2%208.83%2C%201735.2%205.90%2C%201800.0%205.90%27%20fill%3D%27none%27%20stroke%3D%27%23DEDEDB%27%20stroke-width%3D%271%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E"); }
  .rule-3::after, .rule-3.rule-t::before { background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271800%27%20height%3D%2712%27%20viewBox%3D%270%200%201800%2012%27%3E%3Cpath%20d%3D%27M%200.0%205.90%20C%2089.6%205.90%2C%2089.6%202.60%2C%20179.2%202.60%20C%20238.4%202.60%2C%20238.4%207.06%2C%20297.7%207.06%20C%20394.7%207.06%2C%20394.7%204.10%2C%20491.6%204.10%20C%20561.5%204.10%2C%20561.5%208.86%2C%20631.3%208.86%20C%20689.8%208.86%2C%20689.8%202.72%2C%20748.3%202.72%20C%20825.3%202.72%2C%20825.3%207.07%2C%20902.3%207.07%20C%201004.8%207.07%2C%201004.8%203.52%2C%201107.4%203.52%20C%201159.6%203.52%2C%201159.6%208.91%2C%201211.9%208.91%20C%201305.8%208.91%2C%201305.8%203.12%2C%201399.8%203.12%20C%201486.8%203.12%2C%201486.8%209.28%2C%201573.7%209.28%20C%201622.0%209.28%2C%201622.0%202.56%2C%201670.2%202.56%20C%201735.1%202.56%2C%201735.1%205.90%2C%201800.0%205.90%27%20fill%3D%27none%27%20stroke%3D%27%23DEDEDB%27%20stroke-width%3D%271%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E"); }
  .rule-4::after, .rule-4.rule-t::before { background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271800%27%20height%3D%2712%27%20viewBox%3D%270%200%201800%2012%27%3E%3Cpath%20d%3D%27M%200.0%205.90%20C%2092.5%205.90%2C%2092.5%203.11%2C%20185.1%203.11%20C%20284.5%203.11%2C%20284.5%207.59%2C%20383.9%207.59%20C%20489.3%207.59%2C%20489.3%203.54%2C%20594.7%203.54%20C%20687.1%203.54%2C%20687.1%208.71%2C%20779.4%208.71%20C%20882.7%208.71%2C%20882.7%204.24%2C%20985.9%204.24%20C%201055.4%204.24%2C%201055.4%208.62%2C%201124.9%208.62%20C%201207.5%208.62%2C%201207.5%203.10%2C%201290.2%203.10%20C%201359.5%203.10%2C%201359.5%209.19%2C%201428.9%209.19%20C%201477.1%209.19%2C%201477.1%203.17%2C%201525.2%203.17%20C%201595.2%203.17%2C%201595.2%206.96%2C%201665.2%206.96%20C%201732.6%206.96%2C%201732.6%205.90%2C%201800.0%205.90%27%20fill%3D%27none%27%20stroke%3D%27%23DEDEDB%27%20stroke-width%3D%271%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E"); }
  .rule-5::after, .rule-5.rule-t::before { background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271800%27%20height%3D%2712%27%20viewBox%3D%270%200%201800%2012%27%3E%3Cpath%20d%3D%27M%200.0%205.90%20C%2064.7%205.90%2C%2064.7%208.73%2C%20129.3%208.73%20C%20234.4%208.73%2C%20234.4%204.01%2C%20339.5%204.01%20C%20428.9%204.01%2C%20428.9%207.13%2C%20518.3%207.13%20C%20601.7%207.13%2C%20601.7%203.44%2C%20685.1%203.44%20C%20763.5%203.44%2C%20763.5%208.28%2C%20841.8%208.28%20C%20926.8%208.28%2C%20926.8%202.63%2C%201011.8%202.63%20C%201112.4%202.63%2C%201112.4%209.18%2C%201213.1%209.18%20C%201284.3%209.18%2C%201284.3%204.76%2C%201355.4%204.76%20C%201409.4%204.76%2C%201409.4%207.20%2C%201463.3%207.20%20C%201520.0%207.20%2C%201520.0%204.51%2C%201576.7%204.51%20C%201674.3%204.51%2C%201674.3%207.21%2C%201771.8%207.21%20C%201785.9%207.21%2C%201785.9%205.90%2C%201800.0%205.90%27%20fill%3D%27none%27%20stroke%3D%27%23DEDEDB%27%20stroke-width%3D%271%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E"); }
  .rule-6::after, .rule-6.rule-t::before { background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271800%27%20height%3D%2712%27%20viewBox%3D%270%200%201800%2012%27%3E%3Cpath%20d%3D%27M%200.0%205.90%20C%2097.8%205.90%2C%2097.8%208.23%2C%20195.6%208.23%20C%20257.9%208.23%2C%20257.9%202.52%2C%20320.1%202.52%20C%20417.6%202.52%2C%20417.6%207.51%2C%20515.1%207.51%20C%20614.6%207.51%2C%20614.6%203.58%2C%20714.1%203.58%20C%20789.4%203.58%2C%20789.4%208.57%2C%20864.8%208.57%20C%20943.7%208.57%2C%20943.7%204.08%2C%201022.6%204.08%20C%201109.7%204.08%2C%201109.7%207.83%2C%201196.9%207.83%20C%201261.0%207.83%2C%201261.0%203.23%2C%201325.2%203.23%20C%201373.1%203.23%2C%201373.1%207.17%2C%201421.1%207.17%20C%201500.9%207.17%2C%201500.9%204.82%2C%201580.8%204.82%20C%201668.8%204.82%2C%201668.8%209.16%2C%201756.9%209.16%20C%201778.4%209.16%2C%201778.4%205.90%2C%201800.0%205.90%27%20fill%3D%27none%27%20stroke%3D%27%23DEDEDB%27%20stroke-width%3D%271%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E"); }
  .rule-7::after, .rule-7.rule-t::before { background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271800%27%20height%3D%2712%27%20viewBox%3D%270%200%201800%2012%27%3E%3Cpath%20d%3D%27M%200.0%205.90%20C%2052.6%205.90%2C%2052.6%208.46%2C%20105.2%208.46%20C%20180.2%208.46%2C%20180.2%204.57%2C%20255.3%204.57%20C%20320.8%204.57%2C%20320.8%206.96%2C%20386.3%206.96%20C%20471.1%206.96%2C%20471.1%202.68%2C%20555.9%202.68%20C%20632.5%202.68%2C%20632.5%208.06%2C%20709.1%208.06%20C%20810.6%208.06%2C%20810.6%204.19%2C%20912.2%204.19%20C%20969.1%204.19%2C%20969.1%208.30%2C%201026.1%208.30%20C%201132.9%208.30%2C%201132.9%204.48%2C%201239.7%204.48%20C%201347.1%204.48%2C%201347.1%208.16%2C%201454.6%208.16%20C%201508.9%208.16%2C%201508.9%204.00%2C%201563.2%204.00%20C%201613.2%204.00%2C%201613.2%207.66%2C%201663.1%207.66%20C%201715.9%207.66%2C%201715.9%204.44%2C%201768.7%204.44%20C%201784.3%204.44%2C%201784.3%205.90%2C%201800.0%205.90%27%20fill%3D%27none%27%20stroke%3D%27%23DEDEDB%27%20stroke-width%3D%271%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E"); }
  .rule-8::after, .rule-8.rule-t::before { background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271800%27%20height%3D%2712%27%20viewBox%3D%270%200%201800%2012%27%3E%3Cpath%20d%3D%27M%200.0%205.90%20C%2054.5%205.90%2C%2054.5%207.88%2C%20108.9%207.88%20C%20184.5%207.88%2C%20184.5%204.26%2C%20260.0%204.26%20C%20343.3%204.26%2C%20343.3%208.07%2C%20426.6%208.07%20C%20490.8%208.07%2C%20490.8%202.77%2C%20555.0%202.77%20C%20641.1%202.77%2C%20641.1%208.50%2C%20727.2%208.50%20C%20792.0%208.50%2C%20792.0%204.52%2C%20856.8%204.52%20C%20915.2%204.52%2C%20915.2%208.54%2C%20973.5%208.54%20C%201050.5%208.54%2C%201050.5%204.31%2C%201127.5%204.31%20C%201219.8%204.31%2C%201219.8%208.32%2C%201312.2%208.32%20C%201383.6%208.32%2C%201383.6%203.64%2C%201454.9%203.64%20C%201555.4%203.64%2C%201555.4%208.59%2C%201655.8%208.59%20C%201727.9%208.59%2C%201727.9%205.90%2C%201800.0%205.90%27%20fill%3D%27none%27%20stroke%3D%27%23DEDEDB%27%20stroke-width%3D%271%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E"); }
  .rule-9::after, .rule-9.rule-t::before { background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271800%27%20height%3D%2712%27%20viewBox%3D%270%200%201800%2012%27%3E%3Cpath%20d%3D%27M%200.0%205.90%20C%2082.6%205.90%2C%2082.6%203.81%2C%20165.2%203.81%20C%20256.4%203.81%2C%20256.4%208.13%2C%20347.6%208.13%20C%20446.2%208.13%2C%20446.2%202.68%2C%20544.9%202.68%20C%20646.9%202.68%2C%20646.9%208.53%2C%20749.0%208.53%20C%20847.4%208.53%2C%20847.4%202.93%2C%20945.7%202.93%20C%20999.2%202.93%2C%20999.2%208.56%2C%201052.7%208.56%20C%201155.8%208.56%2C%201155.8%203.08%2C%201258.9%203.08%20C%201322.9%203.08%2C%201322.9%208.63%2C%201386.9%208.63%20C%201474.2%208.63%2C%201474.2%203.44%2C%201561.6%203.44%20C%201638.2%203.44%2C%201638.2%207.88%2C%201714.9%207.88%20C%201757.4%207.88%2C%201757.4%205.90%2C%201800.0%205.90%27%20fill%3D%27none%27%20stroke%3D%27%23DEDEDB%27%20stroke-width%3D%271%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E"); }
  .rule-10::after, .rule-10.rule-t::before { background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271800%27%20height%3D%2712%27%20viewBox%3D%270%200%201800%2012%27%3E%3Cpath%20d%3D%27M%200.0%205.90%20C%2098.1%205.90%2C%2098.1%203.80%2C%20196.3%203.80%20C%20251.4%203.80%2C%20251.4%206.98%2C%20306.6%206.98%20C%20411.3%206.98%2C%20411.3%204.39%2C%20515.9%204.39%20C%20573.8%204.39%2C%20573.8%207.10%2C%20631.7%207.10%20C%20737.9%207.10%2C%20737.9%203.91%2C%20844.0%203.91%20C%20912.7%203.91%2C%20912.7%208.25%2C%20981.3%208.25%20C%201041.0%208.25%2C%201041.0%203.01%2C%201100.6%203.01%20C%201190.5%203.01%2C%201190.5%209.13%2C%201280.5%209.13%20C%201377.2%209.13%2C%201377.2%202.58%2C%201474.0%202.58%20C%201524.2%202.58%2C%201524.2%206.97%2C%201574.3%206.97%20C%201679.9%206.97%2C%201679.9%203.78%2C%201785.4%203.78%20C%201792.7%203.78%2C%201792.7%205.90%2C%201800.0%205.90%27%20fill%3D%27none%27%20stroke%3D%27%23DEDEDB%27%20stroke-width%3D%271%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E"); }
  .rule-11::after, .rule-11.rule-t::before { background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271800%27%20height%3D%2712%27%20viewBox%3D%270%200%201800%2012%27%3E%3Cpath%20d%3D%27M%200.0%205.90%20C%2082.9%205.90%2C%2082.9%209.22%2C%20165.9%209.22%20C%20254.1%209.22%2C%20254.1%203.93%2C%20342.3%203.93%20C%20417.3%203.93%2C%20417.3%208.78%2C%20492.4%208.78%20C%20566.3%208.78%2C%20566.3%203.80%2C%20640.2%203.80%20C%20703.0%203.80%2C%20703.0%207.35%2C%20765.9%207.35%20C%20863.8%207.35%2C%20863.8%202.98%2C%20961.7%202.98%20C%201022.3%202.98%2C%201022.3%208.80%2C%201082.8%208.80%20C%201153.5%208.80%2C%201153.5%204.68%2C%201224.2%204.68%20C%201321.5%204.68%2C%201321.5%208.82%2C%201418.7%208.82%20C%201507.2%208.82%2C%201507.2%203.22%2C%201595.6%203.22%20C%201681.8%203.22%2C%201681.8%207.83%2C%201767.9%207.83%20C%201783.9%207.83%2C%201783.9%205.90%2C%201800.0%205.90%27%20fill%3D%27none%27%20stroke%3D%27%23DEDEDB%27%20stroke-width%3D%271%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E"); }
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
  /* One underline, everywhere: 1.5px at rest, 2px when hovered. Nothing else
     changes on hover now that colour is reserved for categories, so this is
     the whole affordance and it has to be the same on every link. */
  a       { text-decoration-thickness: 1.5px; }
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
          {/* flex-wrap, so the availability readout drops to its own full-width
              row on a phone instead of squeezing the nav. */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-5 flex flex-wrap justify-between items-center gap-x-5 gap-y-2">
            <a
              href="/"
              className="py-2 -my-2 flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] font-semibold text-neutral-900 whitespace-nowrap transition-colors"
            >
              <Mark />
              Jade Parrish
            </a>
            {/* Home is explicit rather than leaving the wordmark to carry it.
                About and Contact are hash links back to the homepage, so from
                a case study there was no plain way to say "take me to the
                top of the site". py-2 -my-2 grows the tap target to 33px
                without moving anything. */}
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-8 text-[11px] tracking-[0.08em] sm:tracking-[0.15em] uppercase text-neutral-600">
              <a href="/" className="py-2 -my-2 hover:underline underline-offset-4 decoration-[1.5px] decoration-neutral-500 transition-colors">Home</a>
              <a href="/work" className="py-2 -my-2 hover:underline underline-offset-4 decoration-[1.5px] decoration-neutral-500 transition-colors">Work</a>
              <a href="/thinking" className="py-2 -my-2 hover:underline underline-offset-4 decoration-[1.5px] decoration-neutral-500 transition-colors">Thinking</a>
              <a href="/#about" className="py-2 -my-2 hover:underline underline-offset-4 decoration-[1.5px] decoration-neutral-500 transition-colors">About</a>
              <a href="/#contact" className="py-2 -my-2 hover:underline underline-offset-4 decoration-[1.5px] decoration-neutral-500 transition-colors">Contact</a>
            </nav>

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

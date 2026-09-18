import React from 'react';

export const metadata = {
  title: 'Jade Parrish — Human-centred service & systems designer',
  description: 'Designing complex services and data systems that work better for everyone.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

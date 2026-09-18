import React from 'react';

export const metadata = {
  title: 'Jade Parrish — Human-centred service & systems designer',
  description: 'Designing complex services and data systems that work better for everyone.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script>
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
                },
              },
            },
          }
        </script>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

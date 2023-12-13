'use client';

import './global.scss';

import App from './page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <App >
          {children}
        </App>
      </body>
    </html>
  );
}

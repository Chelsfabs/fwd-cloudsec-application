import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arcade Home Care LLC - Trusted Elderly & Veteran Home Care',
  description: 'Quality non-medical in-home care for seniors, disabled adults, and veterans in the Bay Area. Available 24/7. Call (925) 575-0709.',
  openGraph: {
    title: 'Arcade Home Care LLC',
    description: 'Compassionate non-medical home care for seniors and veterans. We are committed to serve.',
    url: 'https://www.arcadehomecare.com',
    siteName: 'Arcade Home Care LLC',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

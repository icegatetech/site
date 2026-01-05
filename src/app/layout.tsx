import type { Metadata } from 'next';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.icegate.tech'),
  title: 'IceGate - Observability Data Lake Engine',
  description:
    'An open-source Observability Data Lake Engine. Fast, cost-effective, and scalable observability data storage built on Apache Iceberg, Arrow, and Parquet with OpenTelemetry support.',
  keywords: [
    'observability',
    'data lake',
    'apache iceberg',
    'opentelemetry',
    'logs',
    'metrics',
    'traces',
    'open source',
  ],
  authors: [{ name: 'IceGate Tech' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'IceGate - Observability Data Lake Engine',
    description:
      'Open-source observability data storage built on open standards. Cost-effective, scalable, and vendor-neutral.',
    url: 'https://www.icegate.tech',
    siteName: 'IceGate',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IceGate - Observability Data Lake Engine',
    description:
      'Open-source observability data storage built on open standards.',
  },
  alternates: {
    canonical: 'https://www.icegate.tech',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'R3BOOT - Bio Link',
  description: 'India\'s First Integrated Recovery Centre',
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

'use client';

import { usePathname } from 'next/navigation';
import StudioLayoutWrapper from './StudioLayoutWrapper';
import Navbar from './Navbar';
import HomeCopyNavbar from './HomeCopyNavbar';
import Footer from './Footer';
import FloatingActionButton from './FloatingActionButton';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isLinksPage = pathname === '/links';
  const isHome = pathname === '/';

  if (isLinksPage) {
    return <>{children}</>;
  }

  if (isHome) {
    return (
      <StudioLayoutWrapper navbar={<HomeCopyNavbar />} footer={<Footer />} fab={<FloatingActionButton />}>
        {children}
      </StudioLayoutWrapper>
    );
  }

  return (
    <StudioLayoutWrapper
      navbar={<Navbar />}
      footer={<Footer />}
      fab={<FloatingActionButton />}
    >
      {children}
    </StudioLayoutWrapper>
  );
}

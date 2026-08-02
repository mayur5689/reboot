'use client';

import { usePathname } from 'next/navigation';

interface StudioLayoutWrapperProps {
    children: React.ReactNode;
    navbar: React.ReactNode;
    footer: React.ReactNode | null;
    fab: React.ReactNode;
}

export default function StudioLayoutWrapper({
    children,
    navbar,
    footer,
    fab,
}: StudioLayoutWrapperProps) {
    const pathname = usePathname();
    // Check if we are in studio
    const isStudio = pathname?.startsWith('/studio');
    const isServiceLanding =
        pathname?.startsWith('/services-demo/') ||
        pathname === '/l4-l5-disc-bulge-mumbai' ||
        pathname === '/contrast-therapy-mumbai' ||
        pathname === '/services/aqua-therapy' ||
        pathname === '/services/sports-massage' ||
        pathname === '/aqua-therapy-mumbai';

    if (isStudio) {
        return <>{children}</>;
    }

    if (isServiceLanding) {
        return <>{children}{footer}{fab}</>;
    }

    return (
        <>
            {navbar}
            {children}
            {footer}
            {fab}
        </>
    );
}

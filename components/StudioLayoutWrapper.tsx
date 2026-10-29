'use client';

import { usePathname } from 'next/navigation';
import { GlobalMobileStickyCta } from '@/components/GlobalMobileStickyCta';
import { stickyConfigForPath } from '@/lib/sticky-pricing';

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
    const isStudio = pathname?.startsWith('/studio');
    const isServiceLanding = pathname?.startsWith('/services-demo/');
    const showSticky = stickyConfigForPath(pathname || '') !== null;
    const fabWrap = showSticky ? 'hidden md:block' : undefined;

    if (isStudio) {
        return <>{children}</>;
    }

    if (isServiceLanding) {
        return (
            <>
                {children}
                {footer}
                <div className={fabWrap}>{fab}</div>
                {showSticky ? <GlobalMobileStickyCta /> : null}
            </>
        );
    }

    return (
        <>
            {navbar}
            {children}
            {footer}
            <div className={fabWrap}>{fab}</div>
            {showSticky ? <GlobalMobileStickyCta /> : null}
        </>
    );
}

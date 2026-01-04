'use client';

import { usePathname } from 'next/navigation';

interface StudioLayoutWrapperProps {
    children: React.ReactNode;
    navbar: React.ReactNode;
    footer: React.ReactNode;
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

    if (isStudio) {
        return <>{children}</>;
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

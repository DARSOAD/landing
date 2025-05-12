'use client'
import { useTheme } from 'next-themes';
import React from 'react'
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';
import { useMediaQuery } from '@/src/hooks/use-media-query';

const BuyButton = () => {
    const { theme: mode } = useTheme();
    const isMobile = useMediaQuery("(min-width: 768px)");
    return (
        <>
            <Button asChild size={!isMobile ? "sm" : "lg"} className="w-full" color={mode !== 'light' ? 'secondary' : 'default'}>
                <Link href="https://1.envato.market/vNaJR3">Buy Now</Link>
            </Button>
            <Button asChild size={!isMobile ? "sm" : "lg"} className="w-full" color={mode !== 'light' ? 'secondary' : 'default'}>
                <Link
                    href="https://themeforest.net/user/codeshaperbd/portfolio"
                    target="__blank">
                    Our Portfolio
                </Link>
            </Button>
        </>
    )
}

export default BuyButton
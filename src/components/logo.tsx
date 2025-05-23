'use client'
import React from "react";
import { Link } from '@/src/i18n/routing';
import { useConfig } from "@/src/hooks/use-config";
import { useMenuHoverConfig } from "@/src/hooks/use-menu-hover";
import { useMediaQuery } from "@/src/hooks/use-media-query";



const Logo = () => {
    const [config] = useConfig()
    const [hoverConfig] = useMenuHoverConfig();
    const { hovered } = hoverConfig
    const isDesktop = useMediaQuery('(min-width: 1280px)');

    if (config.sidebar === 'compact') {
        return <Link href="/dashboard/blog" className="flex gap-2 items-center   justify-center    ">

        </Link>
    }
    if (config.sidebar === 'two-column' || !isDesktop) return null

    return (
        <Link href="/dashboard/blog" className="flex gap-2 items-center    ">
            {(!config?.collapsed || hovered) && (
                <h1 className="text-xl font-semibold text-default-900 ">
                    Commercial Cleaning
                </h1>
            )}
        </Link>

    );
};

export default Logo;

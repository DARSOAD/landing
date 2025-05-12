"use client";

import React from 'react'
import { usePathname } from "@/src/components/navigation";
import { cn } from "@/lib/utils";
import { getMenuList } from "@/lib/menus";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { useConfig } from "@/src/hooks/use-config";
import { CollapseMenuButton } from "../common/collapse-menu-button";
// import SearchBar from '@/src/components/partials/sidebar/common/search-bar'
// import TeamSwitcher from '../common/team-switcher'
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation'
import { getLangDir } from 'rtl-detect';
import Logo from '@/src/components/logo';
// import SidebarHoverToggle from '@/src/components/partials/sidebar/sidebar-hover-toggle';
import { useMenuHoverConfig } from '@/src/hooks/use-menu-hover';
import { useMediaQuery } from '@/src/hooks/use-media-query';


export function MenuClassic({ }) {
    // translate
    const t = useTranslations("Menu")
    const pathname = usePathname();
    const params = useParams<{ locale: string; }>();
    const direction = getLangDir(params?.locale ?? '');

    const isDesktop = useMediaQuery('(min-width: 1280px)')


    const menuList = getMenuList(pathname, t);
    const [config] = useConfig()
    const collapsed = config.collapsed
    const [hoverConfig] = useMenuHoverConfig();
    const { hovered } = hoverConfig;


    return (
        <>
            {isDesktop && (
                <div className="flex items-center justify-between  px-4 py-4">
                    <Logo />
                    {/* <SidebarHoverToggle /> */}
                </div>
            )}




            <ScrollArea className="[&>div>div[style]]:block!" dir={direction}>
                {isDesktop && (
                    <div className={cn(' space-y-3 mt-6 ', {
                        'px-4': !collapsed || hovered,
                        'text-center': collapsed || !hovered
                    })}>

                        {/* <TeamSwitcher />
                        <SearchBar /> */}
                    </div>

                )}

                <nav className="mt-8 h-full w-full">
                    <ul className=" h-full flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-4">
                        {menuList?.map(({ groupLabel, menus }, index) => (
                            <li className={cn("w-full", groupLabel ? "" : "")} key={index}>
                                {menus.map(
                                    ({ label, icon, active, id, submenus }, index) =>
                                        submenus.length === 0 ? (
                                            <div className="w-full mb-2 last:mb-0" key={index}>
                                                {/* <TooltipProvider disableHoverableContent>
                                                    <Tooltip delayDuration={100}>
                                                        <TooltipTrigger asChild>

                                                            <div>

                                                                <MenuItem label={label} icon={icon} href={href} active={active} id={id} collapsed={collapsed} />
                                                            </div>
                                                        </TooltipTrigger>
                                                    </Tooltip>
                                                </TooltipProvider> */}
                                            </div>
                                        ) : (
                                            <div className="w-full mb-2" key={index}>
                                                <CollapseMenuButton
                                                    icon={icon}
                                                    label={label}
                                                    active={active}
                                                    submenus={submenus}
                                                    collapsed={collapsed}
                                                    id={id}

                                                />
                                            </div>
                                        )
                                )}

                            </li>
                        ))}
                        
                    </ul>
                </nav>

            </ScrollArea>
        </>
    );
}

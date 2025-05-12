"use client";

import React from 'react'


import { useConfig } from "@/src/hooks/use-config";
import { MenuClassic } from './menu-classic';
import { MenuTwoColumn } from './menu-two-column';
import { MenuDragAble } from './menu-dragable';

export function Menu() {

    const [config] = useConfig()

    if (config.sidebar === 'draggable') {
        return <MenuDragAble />
    }

    if (config.sidebar === 'two-column') {
        return <MenuTwoColumn />
    }

console.log(config.sidebar);


    return (
        <MenuClassic />
    );
}

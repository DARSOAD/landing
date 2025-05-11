// src/components/partials/header/index.tsx
import React from 'react'
import HeaderContent from './header-content'
// import HeaderSearch from './header-search'
import ProfileInfo from './profile-info'
// import Notifications from './notifications'
// import Messages from "./messages"
// import { Cart } from './cart'
import ThemeSwitcher from './theme-switcher'
import { SidebarToggle } from '@/src/components/partials/sidebar/sidebar-toggle'
// import { SheetMenu } from '@/src/components/partials/sidebar/menu/sheet-menu'
// import HorizontalMenu from "./horizontal-menu"
import HeaderLogo from "./header-logo"


const DashCodeHeader = async () => {
    return (
        <>
            <HeaderContent>
                <div className=' flex gap-3 items-center'>
                    <HeaderLogo />
                    <SidebarToggle />
                    {/* <HeaderSearch /> */}
                </div>
                <div className="nav-tools flex items-center  md:gap-4 gap-3">
                    <ThemeSwitcher />
                    {/* <Cart />
                    <Messages />
                    <Notifications /> */}
                    <ProfileInfo />
                    {/* <SheetMenu /> */}
                </div>
            </HeaderContent>
            {/* <HorizontalMenu /> */}
        </>
    )
}

export default DashCodeHeader
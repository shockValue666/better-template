"use server"
import React from 'react'

import MobileSideNav from './mobile-sidenav'
import DesktopNavBar from './desktop-navbar'
import { onGetCurrentUser } from '@/actions/global'

const SideNav = async () => {

  const user = await onGetCurrentUser()
  return (
    <>
        <MobileSideNav user={user}/>

        <DesktopNavBar user={user}/>
    </>
  )
}

export default SideNav

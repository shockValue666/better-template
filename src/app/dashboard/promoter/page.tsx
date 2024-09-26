"use client";
import { Button } from '@/components/ui/button'
import React from 'react'
import {useClerk} from '@clerk/nextjs'
import Stats from '@/components/dashboard/promoter/stats';
import Subscriptions from '@/components/dashboard/promoter/sbscriptions';
import SignUps from '@/components/dashboard/promoter/signups';

const Page = () => {
    const {signOut} = useClerk()
  return (
    <div className='grid gap-x-4 gap-y-8 md:grid-cols-2 grid-rows-auto md:grid-rows-[auto,auto]'>
        {/* Top Row (1 column) */}
        <div className='md:col-span-2 '>
            <Stats/>
        </div>
        {/* Bottom row first column */}
        <div className=' '>
            <Subscriptions/>
        </div>
        {/* bottom row second column */}
        <div className=''>
            <SignUps/>
        </div>
        <div>
            {/* <InvoicesTable searchParams={{page,query}}/> */}
        </div>
    </div>
  )
}

export default Page
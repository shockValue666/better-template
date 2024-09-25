"use client";
import { Button } from '@/components/ui/button'
import React from 'react'
import {useClerk} from '@clerk/nextjs'

const Page = () => {
    const {signOut} = useClerk()
  return (
    <div>
        <Button onClick={()=>{signOut({redirectUrl: '/'})}}>
            SignOut
        </Button>
    </div>
  )
}

export default Page
"use server";

import { getRole } from '@/actions/global';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async () => {

    const user = await currentUser();
    if(!user) redirect("/auth/login")
    if(user.id){
        const role = await getRole(user.id)
        if(role==="PROMOTER"){
            redirect("/dashboard/promoter")
        }else 
        if(role==="USER"){
            redirect("/dashboard/user")
        }else{
            redirect("/")
        }
    }
  return (
    <div>show something here</div>
  )
}

export default Page
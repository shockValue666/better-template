"use server"
import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
import {cookies} from 'next/headers'
export const getRefCookie = async () => {
    const refCookie = cookies().get("ref")
    if(refCookie){
        // console.log("refCookie exists: ",refCookie)
        return {refCookie,exists:true}
    }else{
        // console.log("refCookie doesn't exist")
        return {refCookie:null,exists:false}
    }
} 

export const getRole = async (clerkId:string) => {

    const profile = await client.profile.findUnique({
        where:{
            clerkId
        },
        select:{
            role:true
        }
    })
    if(profile){
        return profile.role
    }else{
        return null
    }
}


export const onGetCurrentUser = async () => {
    const user = await currentUser()
    if(!user){
        return null
    }
    const profile = await client.profile.findUnique({
        where:{
            clerkId:user.id
        }
    })
    if(!profile){
        return null
    }
    return profile
}
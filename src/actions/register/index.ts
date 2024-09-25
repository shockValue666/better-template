"use server";

import { client } from "@/lib/prisma";

export const onCompleteProfileRegistration = async (email:string, clerkId:string, role:"USER"| "PROMOTER") => {
    try {
        const profile = await client.profile.create({
            data:{
                clerkId,
                email,
                role,
            },
            select:{
                id:true
            }
        })
        if(profile){
            return {
                data:profile,
                error:null,
                status:200
            }
        }
    } catch (error) {
        console.log("error creating profile: ",error)   
        return {
            data:null,
            error,
            status:500
        }
    }
    return {
        data:null,
        error:"something went wrong",
        status:500
    }
}

export const onCompleteUserRegistration = async (profileId:string,referredBy:string | null) => {
    try {
        const user = await client.user.create({
            data:{
                profileId,
                referredBy
            },
            select:{
                id:true,
            }
        })
        if(user){
            return {
                data:user,
                error:null,
                status:200
            }
        }
    } catch (error) {
        console.log("error creating user: ",error);
        return {
            data:null,
            error,
            status:500
        }
    }
    return {
        data:null,
        error:"something went wrong",
        status:500
    }
}

export const onCompletePromoterRegistration = async (profileId:string,refId:string) => {
    try {
        const promoter = await client.promoter.create({
            data:{
                profileId,
                refId
            },
            select:{
                id:true
            }
        })
        if(promoter){
            return {
                data:promoter,
                error:null,
                status:200
            }
        }
    } catch (error) {
        console.log("error creating promoter: ",error);
        return {
            data:null,
            error,
            status:500
        }
    }
    return{
        data:null,
        error:"something went wrong",
        status:500
    }
}   
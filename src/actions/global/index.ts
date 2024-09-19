"use server"
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
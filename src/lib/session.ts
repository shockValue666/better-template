import "server-only"
import { cookies } from "next/headers"
import {jwtVerify, SignJWT} from 'jose'
export type RefPayload = {
    userId?:string,
    refId:string,
    expiresAt: Date
}

const encodedKey = new TextEncoder().encode(process.env.SESSION_SECRET)

export const encrypt = (data: RefPayload) => {
    return new SignJWT(data)
        .setProtectedHeader({alg:"HS256"})
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(encodedKey)
}

export const decrypt = async (session:string | undefined="") => {
    try {
        const {payload} = await jwtVerify(session, encodedKey,{
            algorithms:["HS256"]
        })
        return payload;
    } catch (error) {
        console.log("failed to verify session")
    }
}

export const createSession = async (refId:string,userId?:string)=> {
    const expiresAt = new Date(Date.now()*7*24*60*60*1000)
    const session = await encrypt({
        userId:userId,
        expiresAt,
        refId:refId
    })

    cookies().set("ref",session,{
        httpOnly:true,
        path:"/",
        expires:expiresAt,
        sameSite:"lax",
        secure:true
    })
}

export const updateSession = async () => {
    const session=cookies().get("session")?.value
    const payload=await decrypt(session)

    if(!session || !payload) {
        console.log("session doesn't exist or payload doesn't exist");
        return null;
    }

    const expiresAt = new Date(Date.now()*7*24*60*60*1000)
    cookies().set("ref",session,{
        httpOnly:true,
        path:'/',
        expires:expiresAt,
        sameSite:"lax",
        secure:true
    })
}

export const deleteSession = async () => {
    cookies().delete("ref")
}
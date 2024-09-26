"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useToast } from "../use-toast"
import { LoginProps, LoginZodTypes } from "@/types/login"
import { zodResolver } from "@hookform/resolvers/zod"
import {  useSignIn } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const {isLoaded,setActive, signIn} = useSignIn()
    const {toast} = useToast();
    const router = useRouter()
    const methods = useForm<LoginProps>({
        mode:"onChange",
        resolver:zodResolver(LoginZodTypes)
    })

    const onHandleSubmit = methods.handleSubmit(
        async ({email, password}:LoginProps)=>{
            setLoading(true)
            if(!isLoaded){
                console.log("not loaded yet")
                return;
            }

            try {
                const authenticatd = await signIn.create({
                    identifier:email,
                    password
                })
                if(authenticatd.status==="complete"){
                    await setActive({
                        session:authenticatd.createdSessionId
                    })
                    toast({
                        title:"Success",
                        description:"Login Successful"
                    })
                    router.push("/dashboard")
                    setLoading(false)

                }
            } catch (error:any) {
                console.log("login error: ",error)
                if(error.errors[0].code==="form_password_incorrect"){
                    toast({
                        title:"Error",
                        description:"Incorrect password",
                        variant:"destructive"
                    })
                }else{
                    toast({
                        title:"Error",
                        description:"Something went wrong",
                        variant:"destructive"
                    })
                }
                setLoading(false)
            }
        }
    )
    return {
        methods,
        onHandleSubmit,
        loading
    }
}
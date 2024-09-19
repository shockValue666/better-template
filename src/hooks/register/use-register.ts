"use client"
import { useState } from "react"
import { useToast } from "../use-toast"
import { useForm } from "react-hook-form"
import { RegisterProps, RegisterZodTypes } from "@/types/register"
import {zodResolver} from '@hookform/resolvers/zod'
import {useSignUp} from '@clerk/nextjs'

export const useRegisterForm = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const {toast} = useToast();
    const {isLoaded, signUp, setActive} = useSignUp()

    const methods = useForm<RegisterProps>({
        resolver:zodResolver(RegisterZodTypes),
        mode:"onSubmit"
    })

    const onSubmit = methods.handleSubmit(async (values) => {
        console.log("registration form submitted, values: ",values)
    })

    const onOtp = async (email:string, password:string, onNext:React.Dispatch<React.SetStateAction<number>>)=>{
        // setLoading(true)
        // if(!isLoaded){
        //     console.log("not loaded yet")
        //     return;
        // }
        // try {
        //     await signUp.create({
        //         emailAddress:email,
        //         password:password
        //     })
        //     await signUp.prepareEmailAddressVerification({strategy:"email_code"})
        //     onNext(prev=>prev+1)
        //     setLoading(false)
        // } catch (error) {
        //     console.log("signUp error")
        //     toast({
        //         title:"Error",
        //         description:"Something went wrong",
        //     })
        //     setLoading(false)
        // }
        onNext(prev=>prev+1)
    }

    return {methods, onSubmit, onOtp,loading}


}
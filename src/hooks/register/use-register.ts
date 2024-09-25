"use client"
import { useState } from "react"
import {  useToast } from "../use-toast"
import { useForm } from "react-hook-form"
import { RegisterProps, RegisterZodTypes } from "@/types/register"
import {zodResolver} from '@hookform/resolvers/zod'
import {useSignUp} from '@clerk/nextjs'
import { getRefCookie } from "@/actions/global"
import { onCompleteProfileRegistration, onCompletePromoterRegistration, onCompleteUserRegistration } from "@/actions/register"
import { Role } from "@prisma/client"
import { useRouter } from "next/navigation"

const generateRandomNumber = (length:number) => {
    const numbers = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
    result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return result;
}


export const useRegisterForm = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const {toast} = useToast();
    const {isLoaded, signUp, setActive} = useSignUp()
    const router = useRouter();

    const methods = useForm<RegisterProps>({
        resolver:zodResolver(RegisterZodTypes),
        mode:"onChange"
    })
    
    const onOtp = async (email:string, password:string, onNext:React.Dispatch<React.SetStateAction<number>>)=>{
        setLoading(true)
        if(!isLoaded){
            console.log("not loaded yet")
            return;
        }
        try {
            await signUp.create({
                emailAddress:email,
                password:password
            })
            await signUp.prepareEmailAddressVerification({strategy:"email_code"})
            onNext(prev=>prev+1)
            setLoading(false)
        } catch (error) {
            console.log("signUp error: ",error)
            toast({
                title:"Error",
                description:"Something went wrong",
            })
            setLoading(false)
        }
        // onNext(prev=>prev+1)
    }

    const onSubmit = methods.handleSubmit(async (values) => {
        if(!isLoaded){
            console.log("not loaded yet")
            return;
        }
        try {
            setLoading(true)
            const completeSignup = await signUp.attemptEmailAddressVerification({
                code:values.otp
            })

            if(completeSignup.status !== "complete"){
                toast({
                    title: "Error",
                    description: "OTP verification failed. Please try again.",
                });
                setLoading(false);
                return;
            }
            if(completeSignup.status==="complete"){
                if(!signUp.createdUserId) {
                    console.log("No user ID was created.");
                    toast({
                        title: "Error",
                        description: "User ID missing. Please try again.",
                    });
                    setLoading(false);
                    return;
                }
                // if(values.role==="User")
                const {data,error,status} = await onCompleteProfileRegistration(values.email,signUp.createdUserId,values.role.toUpperCase() as Role)
                if (status !== 200 || !data || !data.id || error) {
                    toast({
                        title: "Error",
                        description: "Failed to complete profile registration. Please try again.",
                    });
                    setLoading(false);
                    return;
                }
                if(values.role === "User"){
                        const {data:userData,error:userError} = await onCompleteUserRegistration(data.id,values.refId)
                        if(userError) {
                            toast({
                                title:"error",
                                description:"Something went wrong with your registration. Please try again"
                            })
                            setLoading(false)
                            return
                        };
                    }else if(values.role==="Promoter"){
                        const refId = `${values.email.split("@")[0].slice(0,5)}-${generateRandomNumber(4)}`
                        const {data:promoterData,error:promoterError} = await onCompletePromoterRegistration(data.id,refId)
                        if(promoterError) {
                            toast({
                                title:"error",
                                description:"Something went wrong with your registration. Please try again"
                            })
                            setLoading(false)
                            return
                        };
                    }
                    await setActive({
                        session:completeSignup.createdSessionId
                    })
                    setLoading(false)
                    toast({
                        title:"Success",
                        description:"Registration completed successfully",
                    })
                    router.push("/dashboard")
                }
        } catch (error) {
            console.log("error during registration: ",error);
            toast({
                title:"Error",
                description:"Error during registration. Please try again"
            })
            
        }

        console.log("registration form submitted, values: ",values)
    })


    const onGetRefCookie = async () => {
        const {refCookie} = await getRefCookie();
        return refCookie?.value || ""
    }

    return {methods, onSubmit, onOtp,loading,onGetRefCookie}


}
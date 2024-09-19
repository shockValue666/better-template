"use client"

import { createContext, SetStateAction, useContext, useEffect, useState } from "react"

type InitialValueType = {
    step:number,
    setStep:React.Dispatch<SetStateAction<number>>
}

const initialValues:InitialValueType = {
    step:1,
    setStep:()=>{}
}

const stepContext = createContext(initialValues)
const {Provider} = stepContext

export const StepContextProvider = ({children}:{children:React.ReactNode}) => {
    const [step,setStep] = useState<number>(initialValues.step)
    const values = {
        step,
        setStep
    }

    // useEffect(()=>{
    //     console.log("step changed: ",step)
    // },[step])
    return (
        <Provider value={values}>
            {children}
        </Provider>
    )
}

export const useStepContext = () => {
    const value = useContext(stepContext)
    return value;
}
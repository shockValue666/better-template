"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { useStepContext } from '@/providers/register/step-context-provider';
import StepOne from './step-one';
import { useFormContext } from 'react-hook-form';
import StepTwo from './step-two';
import { useRegisterForm } from '@/hooks/register/use-register';
import StepThree from './step-three';

const RegisterSteps = () => {
    const {step, setStep} = useStepContext();
    const {register, formState:{errors}, setValue, getValues} = useFormContext();
    const [role, setRole] = useState<"User"| "Promoter" | null>()
    const {onOtp,loading} = useRegisterForm();
    const [otp,setOtp] = useState<string>("");
    setValue("otp",otp)


    useEffect(()=>{
        console.log("step: ",step)
    },[step])

    useEffect(()=>{
      console.log("role changed: ",role)
    },[role])

    switch(step){
      case 1:
        return (
          <StepOne register={register} role={role} setRole={setRole} setStep={setStep}/>
      )
      case 2: 
      return (
        <StepTwo loading={loading} register={register} errors={errors} getValues={getValues} setStep={setStep} onOtp={onOtp}/>
      )

      case 3: 
      return (
        <StepThree otp={otp} setOtp={setOtp}/>
      )
    }
  return (
    <div>
        <Button onClick={()=>{console.log("pressed");setStep(prev=>prev+1)}}>
            step
        </Button>
    </div>
  )
}

export default RegisterSteps
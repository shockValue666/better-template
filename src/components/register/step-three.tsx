"use client";
import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button';
import { OTPInput } from './otp-input';
import { useStepContext } from '@/providers/register/step-context-provider';

interface Props {
    otp:string,
    setOtp:React.Dispatch<React.SetStateAction<string>>
}

const StepThree:React.FC<Props> = ({otp,setOtp}) => {
    const {setStep} = useStepContext()
  return (
   <div className="flex justify-center items-center h-screen"> {/* Full screen flex container */}
            <div className="text-center space-y-4"> {/* Inner content container */}
                <Label className="text-3xl">
                    OTP
                </Label>
                <p className="text-gray-500">Enter the OTP sent to your email.</p>
                
                {/* OTP Input Component */}
                <OTPInput otp={otp} setOtp={setOtp} />

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                    <Button className="mt-4" variant="outline" onClick={() => setStep(step => step - 1)}>
                        Back
                    </Button>
                    <Button type="submit" className="mt-4">
                        Verify
                    </Button>
                </div>
            </div>
        </div>
  )
}

export default StepThree
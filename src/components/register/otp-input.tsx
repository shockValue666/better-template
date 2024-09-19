"use client"

import * as React from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useRef } from "react"

interface Props {
    otp:string,
    setOtp:React.Dispatch<React.SetStateAction<string>>
}



export const OTPInput:React.FC<Props> = ({otp,setOtp}) => {
    const firstInputRef = useRef<HTMLInputElement>(null)

    React.useEffect(()=>{
        if(firstInputRef.current){
            firstInputRef.current.focus()
        }
    },[])

  return (
    <div className="space-y-2">
      <InputOTP
        maxLength={6}
        value={otp}
        onChange={(otp) => setOtp(otp)}
      >
        <InputOTPGroup>
          <InputOTPSlot className="md:w-24 md:h-24 md:text-[24px]" index={0} ref={firstInputRef}/>
          <InputOTPSlot className="md:w-24 md:h-24 md:text-[24px]" index={1} />
          <InputOTPSlot className="md:w-24 md:h-24 md:text-[24px]" index={2} />
          <InputOTPSlot className="md:w-24 md:h-24 md:text-[24px]" index={3} />
          <InputOTPSlot className="md:w-24 md:h-24 md:text-[24px]" index={4} />
          <InputOTPSlot className="md:w-24 md:h-24 md:text-[24px]" index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        {otp === "" ? (
          <>✨</>
        ) : (
          <>You entered: {otp}</>
        )}
      </div>
    </div>
  )
}

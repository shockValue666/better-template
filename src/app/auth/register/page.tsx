"use client";
import { getRefCookie } from '@/actions/global';
import RegisterSteps from '@/components/register/register-steps';
import { Button } from '@/components/ui/button'
import RegisterProvider from '@/providers/register/register-provider'
import { StepContextProvider, useStepContext } from '@/providers/register/step-context-provider'
import React, { useEffect } from 'react'

const Page = () => {
  return (
    <RegisterProvider>
        <StepContextProvider>
            <RegisterSteps/>
        </StepContextProvider>
    </RegisterProvider>
  )
}

export default Page
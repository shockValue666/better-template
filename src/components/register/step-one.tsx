'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Megaphone, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { FieldValue, FieldValues, UseFormRegister } from 'react-hook-form'
import Link from 'next/link'

export default function StepOne({register,role, setRole, setStep}:{
    register:UseFormRegister<FieldValues>,
    role:"User"| "Promoter" | null | undefined,
    setRole:React.Dispatch<React.SetStateAction<"User"| "Promoter" | null | undefined>>,
    setStep: React.Dispatch<React.SetStateAction<number>>
}) {
  const [error, setError] = useState<string | null>(null)

  const handleRoleSelect = (role: "User"| "Promoter") => {
    setRole(role)
    setError(null)
  }

  const handleNext = () => {
    if (!role) {
      setError('Please select a role to continue.')
    } else {
      // Handle navigation to next step
      console.log('Moving to next step with role:', role)
      setStep(prev=>prev+1)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Select Your Role</h1>

          <RadioGroup onValueChange={handleRoleSelect} className="space-y-4">
            <div className={cn(
              "flex items-center space-x-4 rounded-lg border p-4",
              role === 'Promoter' && "bg-muted"
            )}>
              <RadioGroupItem {...register("role",{
                onChange:(event)=>setRole(event.target.value),
              })} value="Promoter" id="Promoter" />
              <Label htmlFor="Promoter" className="flex-1 cursor-pointer">
                <div className="flex items-center">
                  <Megaphone className="mr-4 h-6 w-6" />
                  <div>
                    <div className="font-semibold">Promoter</div>
                    <div className="text-sm">
                      Earn commissions by referring new users to our platform.
                    </div>
                  </div>
                </div>
              </Label>
            </div>

            <div className={cn(
              "flex items-center space-x-4 rounded-lg border p-4",
              role === 'User' && "bg-muted"
            )}>
              <RadioGroupItem {...register("role",{
                onChange:(event)=>setRole(event.target.value),
              })} value="User" id="User" />
              <Label htmlFor="User" className="flex-1 cursor-pointer">
                <div className="flex items-center">
                  <User className="mr-4 h-6 w-6" />
                  <div>
                    <div className="font-semibold">User</div>
                    <div className="text-sm">
                      Access the platform's full features to generate AI-powered images.
                    </div>
                  </div>
                </div>
              </Label>
            </div>
          </RadioGroup>

          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}

          <Button disabled={!role} className="w-full mt-6" onClick={handleNext}>
            Next
          </Button>
        </CardContent>
          <p className='text-center mb-4'>
            Already have an account?{' '}
            <Link href="/auth/login" className='font-bold'>
            Log in
            </Link> 
        </p>
      </Card>
    </div>
  )
}
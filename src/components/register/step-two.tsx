import React from 'react'
import FormGenerator from '../globals/form-generator'
import { FieldErrors, FieldValues, UseFormGetValues, UseFormRegister } from 'react-hook-form'
import { Button } from '../ui/button'
import Link from 'next/link'
import Loader from '../globals/loader'

interface Props {
    register:UseFormRegister<FieldValues>,
    errors:FieldErrors,
    getValues: UseFormGetValues<FieldValues>,
    setStep:React.Dispatch<React.SetStateAction<number>>
    onOtp:(email:string,password:string,setStep:React.Dispatch<React.SetStateAction<number>>)=>void,
    loading:boolean
}

const StepTwo:React.FC<Props> = ({register,errors,getValues,setStep,onOtp,loading}) => {
  return (
    <div className='flex justify-center items-center h-screen'>   
        <Loader loading={loading}>    
            <div className='flex flex-col gap-4 w-[250px] md:w-[400px] border'>

                    <FormGenerator
                        type="email"
                        inputType='input'
                        register={register}
                        name="email"
                        label="Email"
                        placeholder='Email'
                        errors={errors}
                    />

                    <FormGenerator
                        type="password"
                        inputType='input'
                        register={register}
                        name="password"
                        label="Password"
                        placeholder='Password'
                        errors={errors}
                    />
                    <FormGenerator
                        type='password'
                        inputType='input'
                        register={register}
                        name="confirmPassword"
                        label='Confirm Password'
                        placeholder='Confirm Password'
                        errors={errors}
                    />
                    <div className='flex gap-x-8 justify-around'>
                        <Button className='w-full' type="button" onClick={() => setStep(step => step - 1)} >
                            previous step
                        </Button>
                        <Button className='w-full' type="submit" {...({onClick:async ()=>{
                            await onOtp(getValues("email"),getValues("password"),setStep)
                        }})}>
                            next
                        </Button>
                    </div>
                        Submit
                    <p>
                        Already have an account?{' '}
                        <Link href="/auth/login" className='font-bold'>
                        Log in
                        </Link> 
                    </p>
            </div>
        </Loader>
    </div>
  )
}

export default StepTwo
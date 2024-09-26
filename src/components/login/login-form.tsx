'use client';
import React from 'react'
import FormGenerator from '../globals/form-generator'
import { useFormContext } from 'react-hook-form';


const LoginForm = () => {
    const {register, formState:{errors}} = useFormContext()
  return (
    <>
        <h2 className='text-foreground md:text-4xl font-bold'>Sign In</h2>
        <p className='text-gray-300 md:text-sm'>Enter your email and password</p>
        <div className='py-4'>
            <FormGenerator
                errors={errors}
                register={register}
                inputType="input"
                type="email"
                placeholder="Email"
                name="email"
                label="Email"
            />
        </div>
        <div className='py-4'>
            <FormGenerator
                errors={errors}
                register={register}
                inputType="input"
                type="password"
                placeholder="Password"
                name="password"
                label="Password"
            />
        </div>
    </>
  )
}

export default LoginForm
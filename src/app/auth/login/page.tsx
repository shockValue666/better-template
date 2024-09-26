import FormGenerator from '@/components/globals/form-generator'
import LoginForm from '@/components/login/login-form'
import { Button } from '@/components/ui/button'
import LoginFormProvider from '@/providers/login/login-form-provider'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='flex-1 py-36 px-8 md:px-16 w-full flex justify-center items-center'>
      <div className='flex flex-col h-full md:w-[500px] py-16 px-2 gap-3'>
        <LoginFormProvider>
            <LoginForm/>
            <Button type="submit" className="w-full">
              Submit
            </Button>
            <p className='text-center py-6'>
              Don{"'"}t have an account?{' '}
              <Link href="/auth/register" className='font-bold'>
                Create One!
              </Link>
            </p>
        </LoginFormProvider>
      </div>
    </div>
  )
}

export default Page
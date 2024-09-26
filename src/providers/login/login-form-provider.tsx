"use client"
import Loader from '@/components/globals/loader'
import { useLogin } from '@/hooks/login/use-login'
import React from 'react'
import { FormProvider } from 'react-hook-form'

interface Props{
    children:React.ReactNode
}

const LoginFormProvider:React.FC<Props> = ({children}) => {
    const {methods,onHandleSubmit, loading} = useLogin()
  return (
    <FormProvider {...methods}>
        <form action="" onSubmit={onHandleSubmit}>
            <div>
                <Loader loading={loading}>
                    {children}
                </Loader>
            </div>
        </form>
    </FormProvider>
  )
}

export default LoginFormProvider
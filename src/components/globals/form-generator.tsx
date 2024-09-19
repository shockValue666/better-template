import React from 'react'
import { Input } from '../ui/input';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { Label } from '../ui/label';
import { ErrorMessage } from '@hookform/error-message';


interface Props {
    type:"text" | "email" | "password",
    inputType:"select" | "input" | "textarea"
    placeholder:string,
    label?:string,
    register:UseFormRegister<FieldValues>,
    errors:FieldErrors<FieldValues>,
    name:string,
    form?:string,
    lines?:number,
    options?:{value:string,label:string,id:string}[],
    defaultValues?:string
}

const FormGenerator:React.FC<Props> = ({
    type,
    inputType,
    placeholder,
    label,
    register,
    name,
    errors,
    form,
    lines,
    options,
    defaultValues
}) => {

    switch(inputType){
        case "input":
            return(
            <>
                <Label htmlFor={`input-${label}`} className='text-2xl'>
                    {label && label}
                </Label>
                <Input
                    type={type}
                    placeholder={placeholder}
                    {...register(name)}
                    id={`input-${label}`}
                    form={form}
                    defaultValue={defaultValues}
                />
                <ErrorMessage
                    errors={errors}
                    name={name}
                    render = {({message})=>(
                        <p className='text-red-400 mt-2'>
                            {message}
                        </p>
                    )}
                />

            </>)
        default:
            return <></>
    }
  return (
    <div>FormGenerator</div>
  )
}

export default FormGenerator
"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
    className?:string
}

const ToggleButton:React.FC<Props> = ({
    className
}) => {
    const { theme, setTheme } = useTheme()
    const [mounted,setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted) return null
    return (
    <Button 
        variant="ghost" 
        className={cn("justify-start",className)}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
        {theme === "dark" && <SunIcon/>}
        {theme === "light" && <MoonIcon/>}
    </Button>
    )
}

export default ToggleButton
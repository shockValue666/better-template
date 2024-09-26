import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LayoutDashboardIcon, LogOutIcon, PackageIcon, SettingsIcon, ShoppingCartIcon, StarIcon, UsersIcon } from 'lucide-react'

import Link from 'next/link'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar } from '@/components/ui/avatar'

import { Profile } from '@prisma/client'
import ToggleButton from '@/components/globals/toggle-button'



interface Props {
    user: Partial<Profile> | null | undefined
}

const MobileSideNav:React.FC<Props> = ({user}) => {
  return (
    <div className='block md:hidden'>
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent className='w-[60%]' side="left">
                <div className='flex h-full flex-col'>
                    <div className='p-6'>
                        <h2 className='flex items-center text-2xl font-semibold'>
                            <StarIcon className='mr-2 h-6 w-6'/>
                            sidenav
                        </h2>
                    </div>

                    <ScrollArea className='flex-1'>
                        <nav className='flex flex-col gap-2 p-2'>
                            <NavItem href="/dashboard">
                                <LayoutDashboardIcon className="mr-2 h-4 w-4"/>
                                Dashboard
                            </NavItem>
                            <NavItem href="/users">
                                <UsersIcon className="mr-2 h-4 w-4"/>
                                Users
                            </NavItem>
                            <NavItem href="/dashboard">
                                <ShoppingCartIcon className="mr-2 h-4 w-4"/>
                                Orders
                            </NavItem>
                            <NavItem href="/dashboard">
                                <PackageIcon className="mr-2 h-4 w-4"/>
                                Products
                            </NavItem>
                            <NavItem href="/dashboard">
                                <SettingsIcon className="mr-2 h-4 w-4"/>
                                Settings
                            </NavItem>
                        </nav>
                    </ScrollArea>

                    <div className='w-full text-center'>
                        <ToggleButton className="ml-1 border-4 border-border"/>
                    </div>

                    <div className='mt-auto '>
                        {user && user.email && 
                        <div className='flex items-center gap-4 rounded-lg bg-muted p-2'>
                            <Avatar />
                            <div className='flex flex-col'>
                                <span className='text-sm font-medium'>{user.email.split("@")[0]}</span>
                                <span className='text-xs text-muted-foreground break-all'>{user.email}</span>
                            </div>
                        </div>
                        }
                        <Button variant={"ghost"} className='w-full justify-start mt-4'>
                            <Link href="/logout" prefetch={false}>
                            <LogOutIcon/>
                            Log out
                            </Link>
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileSideNav

function NavItem({ href, children }:{href:string, children:React.ReactNode}) {
  return (
    <Button variant="ghost" className="w-full justify-start" asChild>
      <Link href={href} prefetch={false}>
        {children}
      </Link>
    </Button>
  )
}
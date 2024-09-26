"use client";
import React from 'react'
import { Icon, LayoutDashboardIcon, LogOutIcon, LucideProps, PackageIcon, SettingsIcon, ShoppingCartIcon, StarIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'

import { useClerk } from '@clerk/nextjs'
import {UserResource} from "@clerk/types"
import { Profile, User } from '@prisma/client';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import ToggleButton from '@/components/globals/toggle-button';

interface Props {
    user:Partial<Profile> | null | undefined 
}


const DesktopNavBar:React.FC<Props> = ({user}) => {
    const {signOut} = useClerk();
    const path = usePathname();
    console.log("path: ", path.split("/")[1]==="dashboard")
  return (
     <div className='hidden md:flex h-screen w-60 flex-col border-r bg-muted/40'>
                <div className='p-6'>
                    <h2 className='flex items-center text-2xl font-semibold'>
                        <StarIcon className='mr-2 h-6 w-6'/>
                        sidenav
                    </h2>
                </div>

                <ScrollArea className='flex-1'>
                    <nav className='flex flex-col gap-2 p-4'>
                        <NavItem className={cn('flex items-center',{
                                "bg-muted": path.split("/")[1] === "dashboard"
                            })} 
                            href="/dashboard"
                        >

                                <LayoutDashboardIcon className={cn("mr-2 h-4 w-4")}/>
                                Dashboard
                        </NavItem>
                        <NavItem href="/users" className={cn('flex items-center',{
                                "bg-muted": path.split("/")[1] === "users"
                            })}
                        >

                                <UsersIcon className={cn("mr-2 h-4 w-4",{})}/>
                                Users
                        </NavItem>
                        <NavItem href="/orders" className={cn('flex items-center',{
                                "bg-muted": path.split("/")[1] === "orders"
                            })}>

                                <ShoppingCartIcon className={cn("mr-2 h-4 w-4",{})}/>
                                Orders
                        </NavItem>
                        <NavItem href="/products" className={cn('flex items-center',{
                                "bg-muted": path.split("/")[1] === "products"
                            })}
                        >
                                <PackageIcon className={cn("mr-2 h-4 w-4",{})}/>
                                Products
                        </NavItem>
                        <NavItem href="/settings" className={cn('flex items-center',{
                                "bg-muted": path.split("/")[1] === "settings"
                            })}
                        >
                                <SettingsIcon className={cn("mr-2 h-4 w-4",{})}/>
                                Settings
                        </NavItem>
                    </nav>
                </ScrollArea>

                <div className='w-full text-center'>
                    <ToggleButton className="ml-1 border-4 border-border"/>
                </div>

                <div className='mt-auto p-4 flex flex-col gap-y-8'>
                    {user && user?.email && <div className='flex items-center gap-4 rounded-lg bg-muted p-4'>
                        <Avatar />
                        <div className='flex flex-col'>
                            <span className='text-sm font-medium '>{user.email.split("@")[0]}</span>
                            <span className='text-xs text-muted-foreground break-all '>{user.email}</span>
                        </div>
                    </div>}
                    <Button variant={"ghost"} onClick={()=>signOut({redirectUrl:"/"})} className='w-full justify-start mt-4'>
                        <Link href="#" prefetch={false}>
                        <LogOutIcon/>
                        Log out
                        </Link>
                    </Button>
                </div>
        </div>
  )
}

export default DesktopNavBar


function NavItem({ href, children, className }:{href:string, children:React.ReactNode,className?:string}) {
  return (
    <Button variant="ghost" className={cn("w-full justify-start",className)} asChild>
      <Link href={href} prefetch={false}>
        {children}
      </Link>
    </Button>
  )
}
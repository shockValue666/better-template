import SideNav from '@/components/dashboard/sidenav/sidenav'
import React from 'react'

interface Props{
    children:React.ReactNode
}

const Layout:React.FC<Props> = ({children}) => {
  return (
    <div>
        {/* <div>
            <SideNav/>
        </div> */}
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout
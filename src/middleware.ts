import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { getRole } from "./actions/global";



const isProtectedRoute = createRouteMatcher([
  '/dashboard',
  '/dashboard/promoter',
  '/dashboard/customer',
])

const isPromoter = createRouteMatcher([
  "/dashboard/promoter"
])

const isDashboard = createRouteMatcher([
  "/dashboard"
])

// export const customMiddleware = async (request:NextRequest) => {
//   // console.log("request: ",request)
//     const url = request.nextUrl
//     // const method = request.method
//     // const headers = request.headers
//     // const authHeader = request.headers.get("Authorization")
//     // const cookies = request.cookies.getAll()
//     // const sessionCookies = request.cookies.get("session-token")?.value
//     // console.log("url: ",url.searchParams.get("ref_id"), '\n',
//     // "method: ",method, '\n',
//     // "headers: ",Object.fromEntries(headers), '\n',
//     // "authHeader: ",authHeader, '\n',
//     // "cookies: ",cookies, '\n',
//     // "sessionCookies: ",sessionCookies
//     // )
//     const refId=url.searchParams.get("ref_id")
//     const existingRefCookie = request.cookies.get("ref")?.value
//     // if(!refId){
//     //     console.log("refId doesn't exist")
//     // }
//     if(refId && !existingRefCookie){
//         console.log("ref cookie doesn't exists, setting it now")
//         //WIP
//         let response = NextResponse.next();
//         response.cookies.set("ref",refId,{
//             httpOnly:true,
//             path:"/",
//             expires:new Date(Date.now()*7*24*60*60*1000),
//             sameSite:"lax",
//             secure:true
//         })
//         return response
//     }
//     if(existingRefCookie){
//         console.log("existingRefCookie from my custom middleware: ",existingRefCookie)
//     }
//     return NextResponse.next();
// }

export default clerkMiddleware(async (auth,req)=>{
  console.log("clerk middleware running: ",req.nextUrl.origin)

  const {userId} = auth()

  // if(isProtectedRoute(req)){
  //   console.log("route is protected")
  //   auth().protect({unauthenticatedUrl:req.nextUrl.origin + "/auth/login"});
  // }
  // else if(isPromoter(req)){
  //   auth().protect((has)=>{
  //     return (
  //       has({permission:""})
  //     )
  //   })
  //   console.log("isPromoter")
  // }else{
  //   console.log("route isn't protected")
  // }
});


// export function middleware(request:NextRequest) {

// }


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
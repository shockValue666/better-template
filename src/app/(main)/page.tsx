
import { ModeToggle } from "@/components/globals/modal-toggle";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "@/components/ui/flop-words";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Download, MenuIcon, PenTool, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const words = ["better", "cute", "beautiful", "modern"];

export default function Home() {
  return (
    <div className="p-4 md:p-0">
      <div className="flex flex-col gap-y-8 w-full justify-center items-center bg-background text-foreground" >
        {/* Navbar */}
        <div className="w-full">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <MenuIcon className="h-6 w-6 cursor-pointer" />
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Navigate through the platform.
                  </SheetDescription>
                </SheetHeader>

                {/* Mobile Nav Links */}
                <div className="flex flex-col items-center space-y-4 mt-8">
                  <a href="#" className="text-lg font-bold hover:text-primary">Platform</a>
                  <a href="#" className="text-lg font-bold hover:text-primary">Resources</a>
                  <a href="#" className="text-lg font-bold hover:text-primary">Sign up</a>

                  <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                      <Link href={'/auth/register'}>Register/Login</Link>
                    </div>
                  </button>
                  <ModeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden md:flex items-center justify-between py-4 px-8 bg-background text-foreground">
            <div className="text-lg font-bold">ABMATIC AI</div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-primary">Platform</a>
              <a href="#" className="hover:text-primary">Resources</a>
              <a href="#" className="hover:text-primary">Sign up</a>

              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  <Link href={'/auth/register'} >
                    Register/Login
                  </Link>
                </div>
              </button>
              <ModeToggle />
            </div>
          </nav>
        </div>

        {/* hero */}
        <HeroHighlight>
          <section className="flex flex-col justify-center items-center text-foreground text-center px-8">
            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl mb-6">
              Scale your Pipeline <br /> with <Highlight> AI-Powered Marketing</Highlight>
            </h1>
            <p className="text-lg max-w-xl mb-8">
              One AI Platform for Hyper-Personalized Campaigns Across Every Channel
              <br /> Display Ads, Web Personalization, LinkedIn Ads, A/B Testing, Intent Data, and Retargeting
            </p>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px] text-xl relative group transition duration-200 text-white hover:bg-transparent">
                Book a Demo
              </div>
            </button>
          </section>
        </HeroHighlight>
        {/* subtext */}
        <section className="py-2 text-center bg-background text-foreground">
          <p className="text-lg text-foreground">
            Unlock value within hours—not days or weeks—through seamless integration with your existing marketing ecosystem.
          </p>
        </section>

        {/* logos and partners   */}
        <section className="py-8 bg-background text-foreground">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 gap-x-32 items-center justify-items-center">
            <Image src="/logos/chatgpt.png" alt="Salesforce" width={72} height={72} className="h-auto" />
            <Image src="/logos/instagram.png" alt="Hubspot" width={72} height={72} className="h-auto" />
            <Image src="/logos/kick.png" alt="Powered by OpenAI" width={72} height={72} className="h-auto" />
            <Image src="/logos/tiktok.png" alt="Google Analytics" width={72} height={72} className="h-auto" />
            <Image src="/logos/x.png" alt="LinkedIn" width={72} height={72} className="h-auto" />
            <Image src="/logos/youtube.png" alt="Segment" width={72} height={72} className="h-auto" />
          </div>
        </section>

      {/*  features */}
        <section className="py-16 bg-background text-foreground">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            <div>
              <div className="mb-4">
                <PenTool className="h-16 w-16 mx-auto text-primary" />
              </div>
              <h3 className="text-xl font-bold">Accelerate Pipeline</h3>
              <p className="mt-2 text-muted-foreground">
                Leverage web personalization, programmatic ads & intent data to identify & engage the right accounts.
              </p>
            </div>
            <div>
              <div className="mb-4">
                <Users className="h-16 w-16 mx-auto text-primary" />
              </div>
              <h3 className="text-xl font-bold">Amplify Marketing ROI</h3>
              <p className="mt-2 text-muted-foreground">
                Refine strategies, re-engage dormant opportunities, & extract maximum value from your existing pipeline.
              </p>
            </div>
            <div>
              <div className="mb-4">
                <Download className="h-16 w-16 mx-auto text-primary" />
              </div>
              <h3 className="text-xl font-bold">Uncover Opportunities</h3>
              <p className="mt-2 text-muted-foreground">
                Leverage AI-powered intent data and programmatic advertising to discover “in-market” accounts.
              </p>
            </div>
          </div>
        </section>

        {/* features more */}

        <section className="py-16 bg-background text-foreground">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
            {/* Feature 2 */}
            <div>
              <Image width={3194} height={1710} src="/features/conversations.png" alt="Advertising Platform" className="rounded-xl " />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-bold">Your Advertising Platform</h2>
              <p className="mt-4 text-muted-foreground">
                Run Display Ads, LinkedIn Ads, and Meta Ads. Improve ROAS with AI-Dynamic Bidder.
              </p>
              <button className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-md font-bold hover:bg-opacity-90">
                Learn more
              </button>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-bold">Seamless Integrations</h2>
              <p className="mt-4 text-muted-foreground">
                Integrate with leading platforms like Salesforce, Hubspot, and more to streamline your marketing operations.
              </p>
              <button className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-md font-bold hover:bg-opacity-90">
                Learn more
              </button>
            </div>
            <div>
              <Image width={3500} height={1759} src="/features/dash.png" alt="Seamless Integrations" className="rounded-lg " />
            
            </div>
            {/* Feature 2 */}
            <div>
              <Image width={3194} height={1710} src="/features/main.png" alt="Advertising Platform" className="rounded-xl " />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-bold">Your Advertising Platform</h2>
              <p className="mt-4 text-muted-foreground">
                Run Display Ads, LinkedIn Ads, and Meta Ads. Improve ROAS with AI-Dynamic Bidder.
              </p>
              <button className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-md font-bold hover:bg-opacity-90">
                Learn more
              </button>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-bold">Seamless Integrations</h2>
              <p className="mt-4 text-muted-foreground">
                Integrate with leading platforms like Salesforce, Hubspot, and more to streamline your marketing operations.
              </p>
              <button className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-md font-bold hover:bg-opacity-90">
                Learn more
              </button>
            </div>
            <div>
              <Image width={3500} height={1759} src="/features/apps.png" alt="Seamless Integrations" className="rounded-lg " />
            </div>
          </div>
        </section>


        {/* case studies */}

        <section className="py-16 w-full  text-center text-foreground">
          <h2 className="text-3xl font-bold">Case Studies</h2>
          <p className="mt-2 text-muted-foreground">
            We are here to destroy boring marketing - hear it from our customers.
          </p>
          
          <blockquote className="mt-12 max-w-3xl mx-auto italic text-lg font-medium text-foreground">
            “Abmatic AI is an up-and-coming platform that is one of my favorites. I like Abmatic AI for landing page personalizations + ABM platform. I absolutely adore Abmatic AI. It is a real game changer, as we reduce overhead and infrastructure costs and directly impact our prospects.”
          </blockquote>
          
          <p className="mt-4 text-sm text-muted-foreground">
            Tania Saez <br />
            Fractional CMO + ABM, DemandGen & Revops Leader
          </p>
        </section>

        {/* final cta */}

        <section className="w-full py-36  text-center text-foreground">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Build
            <FlipWords words={words} duration={100}/> <br />
            websites with Aceternity UI

          </h2>
          

          <div className="mt-8">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-lg font-bold hover:bg-opacity-90">
              Book a Demo
            </button>
          </div>
        </section>

        {/*  */}
        
        {/* <section>
          <HeroHighlight>
            sss
          </HeroHighlight>
        </section> */}

        {/* footer */}

        <footer className="py-12 bg-background text-foreground">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            
            {/* Logo and Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4">ABMATIC AI</h3>
              <div className="flex space-x-4">
                {/* Social Media Icons (replace with actual icons or SVGs) */}
                <a href="#" aria-label="LinkedIn" className="text-muted-foreground">
                  <svg width="24" height="24"><circle cx="12" cy="12" r="10" /></svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-muted-foreground">
                  <svg width="24" height="24"><circle cx="12" cy="12" r="10" /></svg>
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">Your Personalization Engine</a></li>
                <li><a href="#" className="hover:text-primary">Your Advertising Platform</a></li>
                <li><a href="#" className="hover:text-primary">Leverage Intent Data</a></li>
                <li><a href="#" className="hover:text-primary">Your Retargeting Platform</a></li>
              </ul>
            </div>

            {/* Resources and Company Links */}
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Podcast</a></li>
                <li><a href="#" className="hover:text-primary">Playbooks</a></li>
                <li><a href="#" className="hover:text-primary">News & Updates</a></li>
                <li><a href="#" className="hover:text-primary">Knowledge Base</a></li>
              </ul>
              <h4 className="font-bold mt-6 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>

            {/* Subscription Form */}
            <div>
              <h4 className="font-bold mb-4">Subscribe to product updates</h4>
              <p className="text-sm text-muted-foreground mb-4">Subscribe to product updates and tips on website personalization!</p>
              <form>
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full px-4 py-2 mb-4 bg-background border border-muted-foreground rounded-md"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-4 py-2 w-full rounded-md hover:bg-opacity-90"
                >
                  Get updates
                </button>
              </form>
            </div>

          </div>
          
          {/* Copyright Notice */}
          <div className="text-center mt-12 text-sm text-muted-foreground">
            Copyright © Abmatic AI. All Rights Reserved. | 
            <a href="#" className="hover:text-primary ml-1">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

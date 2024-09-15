import { TwitterLogoIcon } from '@radix-ui/react-icons'
import { CopyCheckIcon, CopyrightIcon, FacebookIcon, GlobeIcon, InstagramIcon, PhoneCallIcon, PhoneIcon, X, XIcon } from 'lucide-react'
import React from 'react'

function FooterSection() {
      return (
            <div className='w-full p-10 bg-[#1B4965] flex'>
                  <div className='w-1/2 flex flex-col gap-5'>
                        <h1 className='text-7xl uppercase font-medium font-kameron text-white'>Health Nexus</h1>

                        <p className='w-1/2 text-sm font-kameron text-white'>Effortlessly manage your clinic's appointments, prescriptions, medical records, billing, and patient information with a streamlined, user-friendly application.</p>

                        <div className='text-white flex items-center py-3 gap-2'>
                              <CopyrightIcon className='w-4' />
                              <p className='text-sm'>all rights reserve to </p>
                              <img className='w-20' src="/logo.svg" alt="" />
                        </div>
                  </div>
                  <div className='w-1/2 flex gap-5 justify-end'>
                        
                        <div className='flex flex-col gap-2'>
                              <h2 className='text-white text-2xl uppercase font-kameron'>contact us</h2>
                              <div className='flex items-center gap-2 text-white'><PhoneCallIcon /> +9110002555</div>
                              <div className='flex items-center gap-2 text-white'><PhoneCallIcon /> +9110002555</div>
                              <div className='flex items-center gap-2 text-white'><GlobeIcon /> www.website.com</div>
                              <div className='flex gap-2 text-white mt-4'>
                                    <FacebookIcon />
                                    <InstagramIcon />
                              </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                              <h2 className='text-white text-2xl uppercase font-kameron'>install app</h2>
                              <img className='w-20' src="/PlayStore.png" alt="" />
                        </div>
                  </div>
            </div>
      )
}

export default FooterSection
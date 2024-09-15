import React from 'react'
import Service from '../smallComponents/Service'

function ServiceSection() {
  const services = [{text: 'dentist', url: '/dentistService.png'},
    {text: 'dentist', url: '/dentistService.png'},
    {text: 'dentist', url: '/dentistService.png'},
    {text: 'dentist', url: '/dentistService.png'},
    {text: 'dentist', url: '/dentistService.png'},
    {text: 'dentist', url: '/dentistService.png'},
  
  ]
  return (
    <div className='w-full min-h-screen flex flex-col items-center py-10 justify-center gap-16'>
      <h1 className='text-5xl font-semibold font-kameron text-[#1B4965]'>Our Services</h1>
      <div className='w-3/4 h-auto flex flex-wrap gap-16 justify-center'>
        {services.map((service, index)=>(
          <Service key={index} text={service.text} url={service.url} />
        ))}
      </div>
    </div>
  )
}

export default ServiceSection
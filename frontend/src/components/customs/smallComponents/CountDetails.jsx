import React from 'react'

function CountDetails() {
      return (
            <div className='w-80 h-36 absolute bottom-0 right-[25%] translate-x-1/2 translate-y-[10%] opacity-80 backdrop-blur-lg shadow-lg rounded-xl flex items-center justify-between' style={{ background: `linear-gradient(-55deg, #e3ffe7 0%, #d9e7ff 100%)` }}>
                  <div className='w-1/2 flex flex-col items-center h-full justify-center'>
                        <h1 className='text-5xl' style={{
                              background: `linear-gradient(90deg, #6DDCFF , #7F60F9 )`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              color: 'transparent',
                        }}>1000+</h1>
                        <h3 className='text-2xl text-[##1B4965]'>Client</h3>
                  </div>
                  <div className='w-1/2 flex flex-col items-center h-full justify-center'>
                        <h1 className='text-5xl' style={{
                              background: `linear-gradient(90deg, #6DDCFF , #7F60F9 )`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                              color: 'transparent',
                        }}>160+</h1>
                        <h3 className='text-2xl text-[##1B4965]'>Doctor</h3>
                  </div>
            </div>
      )
}

export default CountDetails
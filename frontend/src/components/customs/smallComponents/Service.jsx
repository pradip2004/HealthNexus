import React from 'react'

function Service({text, url}) {
  return (
    <div className='w-48 h-48 backdrop-blur-lg shadow-lg rounded-lg flex flex-col items-center justify-center'>
      <img src={url} className='w-32' alt="" />
      <h3 className='text-xl uppercase text-[#1B4965] font-semibold'>{text}</h3>
    </div>
  )
}

export default Service
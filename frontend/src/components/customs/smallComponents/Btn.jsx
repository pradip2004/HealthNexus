import React from 'react'

function Btn({text,  clickHandler}) {
  return (
    <button onClick={clickHandler} className='px-6 py-2 bg-[#1B4965] text-white uppercase text-sm rounded-xl font-thin font-kameron'>{text}</button>
  )
}

export default Btn
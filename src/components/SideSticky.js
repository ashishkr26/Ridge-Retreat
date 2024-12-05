import React from 'react'

const SideSticky = () => {
  return (
    <div className='flex flex-col fixed mt-24'>
      <button className="bg-amber-500 border border-gray-300 w-10 h-10 text-center text-2xl">📘</button>
      <button className="bg-amber-500 border border-gray-300 w-10 h-10 text-2xl">📌</button>
      <button className="bg-amber-500 border border-gray-300 w-10 h-10 text-2xl">📞</button>
    </div>
  )
}

export default SideSticky

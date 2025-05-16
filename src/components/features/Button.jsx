import React from 'react'

const Button = ({content, color}) => {
  return (
    <div>
        <button className={`px-4 py-2 transition-all duration-300
        hover:text-white hover:bg-red-500 space-x-12 hidden md:flex items-center 
        bg-black text-white  ${color}`}>
          {content}
        </button>
    </div>
  )
}

export default Button

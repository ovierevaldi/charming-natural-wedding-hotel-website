import React from 'react'

type Button1Porps = {
  text: string
}

const Button1 = ({ text } : Button1Porps) => {
  return (
    <button className="bg-brown-1 hover:bg-brown-2  p-4 w-lg rounded-full cursor-pointer transition-colors duration-300">
      <p className="text-white text-lg">{ text } </p>
    </button>
  )
}

export default Button1
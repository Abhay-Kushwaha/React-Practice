import React from 'react'

const buttons = ({ ChangeColor }) => {
  return (
      <div className="flex justify-center gap-4">
          <button onClick={() => { ChangeColor("red") }} className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-full shadow-md transition duration-300">
              Red
          </button>
          <button onClick={() => { ChangeColor("green") }} className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-full shadow-md transition duration-300">
              Green
          </button>
          <button onClick={() => { ChangeColor("blue") }} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-full shadow-md transition duration-300">
              Blue
          </button>
    </div>
  )
}

export default buttons

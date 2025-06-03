import { useState } from 'react'
import './App.css'
import Buttons from '../components/buttons'
import Password from '../components/Password'
import { useEffect } from 'react' 
// import Navbar from '../components/Navbar'

function App() {

  const [count, setCounter] = useState(0)
  const Add = () => {
    setCounter(count + 1);
    setCounter(count + 1); // due to batching, No change
    setCounter(count + 1); // due to batching, No change
    setCounter(count + 1); // due to batching, No change

    setCounter((hehe) => hehe + 1); // Callback need to be finished and return a state so it will NOT be ignored
  }
  const Subtract = () => {
    setCounter(count - 1);
  }

  const [color, setColor] = useState('yellow')
  const ChangeColor = (color) => {
    setColor(color);
  }


  return (
    <div className="w-full h-screen flex flex-col items-center justify-baseline" style={{ backgroundColor: color }}>
      {/* <Navbar /> */}
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 mb-5 mt-10 max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 underline underline-offset-4">
          Hello World!
        </h1>
        <h2 className="text-xl font-medium text-gray-700 mb-6">
          Welcome Page with Counter <span className="font-bold text-black">{count}</span>
        </h2>
        <p className="text-xl font-semibold text-gray-800 mb-6">
          Counter Value is: <span className="text-blue-600">{count}</span>
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={Add}
            className="bg-amber-200 hover:bg-amber-300 text-black font-semibold cursor-pointer px-4 rounded-full border-2 border-amber-500 shadow-sm transition duration-300"
          >
            Add
          </button>
          <button
            onClick={Subtract}
            className="bg-amber-200 hover:bg-amber-300 text-black font-semibold cursor-pointer px-4 rounded-full border-2 border-amber-500 shadow-sm transition duration-300"
          >
            Subtract
          </button>
        </div>
        <Buttons ChangeColor={ ChangeColor} />
      </div>
      <Password/>
    </div>
  );

}

export default App

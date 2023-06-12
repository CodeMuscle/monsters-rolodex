import { useState } from 'react';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="p-10 self-center flex flex-col gap-10 bg-gray-400 text-center">
        <p className="text-black font-bold text-[40px] bg-transparent">Hi, I'm Ganesh</p>
        <button className="p-4 border-black bg-blue-400 font-semibold text-[20px] rounded-lg w-[200px] self-center">Change my name!</button>
      </div>
  )
}

export default App

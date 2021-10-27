import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const click = () => {
    setCount(count + 1)
  }
  return (
    <div className="w-8/12">
      <h1 className="text-4xl text-gray-700 text-center font-bold mb-4">{count}</h1>
      <div className="flex justify-evenly">
        <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none" onClick={click}> Click</button>
        <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none" onClick={() => setCount(0)}> Reset</button>
      </div>
    </div>
  )
}
export default Counter

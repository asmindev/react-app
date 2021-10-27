import React from 'react'

function Calculator() {
  return (
    <div className="rounded w-full max-h-screen bg-gray-800 text-gray-50">
      <div className="h-screen rounded">
        <div className="p-4 h-2/5 relative">
          <div className="text-center font-bold">Header</div>
          <div className="absolute bottom-4 right-4 text-right">
            <div className="text-lg font-semibold">3 × 10</div>
            <div className="text-5xl tracking-wider font-semibold">30</div>
          </div>
        </div>
        <div className="p-4 h-3/5 w-full bg-gray-700 text-center">
          <div className="flex flex-wrap">
            <div className="w-1/4 p-2">
              <div className="rounded text-indigo-500 p-6">AC</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator

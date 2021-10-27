import React, { useState, useEffect } from 'react'
import Soal from '../components/Soal'

function Bar() {
    let isDone = false
    const [width, setWidth] = useState('w-full')
    const widthProgress = () => {
        setWidth('w-0')
        if (!isDone) {
            isDone = true
            setTimeout(() => alert('selesai'), 10000)
        }
    }
    useEffect(() => {
        widthProgress()
    }, [])
    return (
      <div className="w-full px-2">
        <div
          className={`${width} h-4 transition-all duration-10000 bg-indigo-500 rounded text-white text-sm font-medium`}
        />
      </div>
    )
}

function Math() {
    return (
      <div className="w-full h-screen">
        <div className="h-full flex justify-center items-center flex-col">
          <Bar />
          <Soal
            soal="10 × 10"
            pilihan={['10', '20', '80', '100']}
            jawaban="100"
          />
        </div>
      </div>
    )
}
export default Math

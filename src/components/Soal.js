import React from 'react'

function Soal(props) {
    let solve = false
    const { soal, pilihan, jawaban } = props
    function click(e) {
        if (!solve) {
            solve = true
            const value = e.target.innerText
            const parent = e.target.parentNode.parentNode
            const button = parent.querySelectorAll('button')
            button.forEach((x) => x.classList.remove('bg-indigo-100'))
            e.target.classList.toggle('bg-indigo-100')
            if (value === jawaban) {
                e.target.classList.remove('bg-indigo-100')
                e.target.classList.add('bg-green-100')
            } else {
                button.forEach((i) => {
                    if (i.innerText === jawaban) i.classList.add('bg-green-100')
                })
            }
        }
    }
    return (
      <div className="w-11/12">
        <div className="text-center text-2xl font-medium">{soal}</div>
        <div className="bg-indigo-100mx-auto flex justify-between flex-wrap">
          {pilihan.map((e) => (
            <div className="w-1/2 p-2">
              <button
                onClick={click}
                type="button"
                className="btn w-full p-3 text-center rounded border border-indigo-500 focus:outline-none"
              >
                {e}
              </button>
            </div>
            ))}
        </div>
      </div>
    )
}
export default Soal

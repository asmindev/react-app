import React, { useState, useEffect } from 'react'

function Todolist() {
  const todo = localStorage.getItem('todolist')
  const [value, setValue] = useState('')
  const [list, setList] = useState([])
  const remove = (e) => {
    const parent = e.target.parentNode.parentNode
    const span = parent.querySelector('span')
    const newList = list.filter((item) => item.value !== span.innerText)
    setList(newList)
    localStorage.setItem('todolist', JSON.stringify(newList))
  }
  const check = () => {
    if (todo) {
      const data = [...JSON.parse(todo)]
      setList(data)
    }
  }
  const handlerSubmit = (e) => {
    e.preventDefault()
    if (todo) {
      const data = [...JSON.parse(todo)]
      setValue('')
      if (value && !data.includes(value)) {
        console.log(value)
        data.push({ value, id: data.length + 1 })
        setList(data)
        localStorage.setItem('todolist', JSON.stringify(data))
      }
    } else if (value) {
      setValue('')
      const newList = [{ value, id: 1 }]
      setList(newList)
      localStorage.setItem('todolist', JSON.stringify(newList))
    }
  }
  useEffect(check, [])
  return (
    <div data-aos="zoom-in" className="p-8">
      <div className="flex justify-center">
        <h1 className="inline-block px-4 py-2 bg-indigo-200 rounded">
          To Do List
        </h1>
      </div>
      <div className="mt-12">
        <form onSubmit={handlerSubmit} className="w-full">
          <div className="flex items-center rounded-md border border-indigo-500 overflow-hidden">
            <input
              value={value}
              onChange={(event) => {
                setValue(event.target.value)
              }}
              id="items"
              name="items"
              autoComplete="off"
              className="py-2 px-4 bg-gray-100 focus:outline-none"
              type="text"
            />
            <button
              type="submit"
              className="w-full h-full py-2 px-4 text-gray-50 bg-indigo-500"
            >
              Ok
            </button>
          </div>
        </form>
        <div className="mt-12">
          {
            list.map((item) => (
              <div key={item.id} className="my-2 py-2 px-4 bg-white shadow rounded flex justify-between items-center">
                <span className={item.id}>
                  {item.value}
                </span>
                <button onClick={remove} className="flex items-center" type="button">
                  <i className="text-red-500 ri-close-line" />
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Todolist

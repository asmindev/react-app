import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Roster () {
  const [mapel, setMapel] = useState([])
  const fill = async () => {
    try {
      const response = await axios.get('http://localhost:8081/data')
      setMapel(response.data);
    } catch (e) { console.log(e) }
  }
  useEffect(fill, [])
  return (
    <div className="w-full mt-12">
      <div className="w-full text-indigo-500">
        <h1 className="text-center text-4xl font-bold uppercase">Roster</h1>
      </div>
      <div className="w-11/12 mt-12 mx-auto px-4">
        {
        mapel.map((item) => (
          <div data-aos="fade-up" key={item.id} className="my-4 p-4 bg-white rounded shadow">
            <div data-aos="fade-down" className="w-full mb-4"><h1 className="border-b border-indigo-500 text-center text-2xl font-bold uppercase">{item.hari}</h1></div>
            {item.data.map((matkul) => (
              <div key={matkul.id} className="w-full px-4 py-2 flex justify-between items-center text-gray-500 text-sm">
                <div data-aos="zoom-in-right" data-aos-duration="10000" className="my-0">{matkul.mapel}</div>
                <div data-aos="zoom-in-left" data-aos-duration="10000" className="my-0">{matkul.jam}</div>
              </div>
            ))}
          </div>
        ))
      }
      </div>
      <div className="mt-12 bg-gray-500 p-4 text-center text-sm text-white">Made with love by asmin</div>
    </div>
  )
}

export default Roster

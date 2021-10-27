import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <div className="flex gap-4 p-4 text-xs bg-gray-700 text-white">
    <NavLink className="px-2" to="/">Home</NavLink>
    <NavLink className="px-2" to="/counter">Counter</NavLink>
    <NavLink className="px-2" to="/kal">Calc</NavLink>
    <NavLink className="px-2" to="/roster">Roster</NavLink>
    <NavLink className="px-2" to="/math">Math</NavLink>
  </div>
)
export default Navbar

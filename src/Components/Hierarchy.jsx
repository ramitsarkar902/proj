import React from 'react'
import Sidebar from './Sidebar'

function Hierarchy() {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/6 bg-[#334252] h-full">
        <Sidebar />
      </div>
      <div className="w-5/6 bg-red-100 h-full">
        <h1> Hierarchy </h1>
      </div>
    </div>
  )
}

export default Hierarchy

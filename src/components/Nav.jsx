import React from "react"
import logo from "../assets/logo.svg"

function Nav() {
    return (
        <div className="h-16 w-full flex flew-row items-center bg-gray-100/50 z-50 gap-4 sticky top-0 backdrop-blur-md px-16 shadow-sm">
            <img src={logo} alt="Sleepy face emoji outline" className="h-full p-2"></img>
            <h1 className='text-3xl font-normal'>DrowsyDriver</h1>
        </div>
    )
}

export default Nav
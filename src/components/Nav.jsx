import React from "react"
import logo from "../assets/logo.svg"

function Nav() {
    return (
        <div className="h-16 w-full flex flew-row items-center bg-gray-200/50 z-50 sticky top-0 backdrop-blur-md px-16 shadow-sm">
            <img src={logo} className="h-full"></img>
            <h1 className='text-3xl font-normal'>DrowsyDriver</h1>
        </div>
    )
}

export default Nav
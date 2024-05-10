import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-slate-800  '>
        <div className="mycontainer flex justify-around items-center px-4  py-5 h-14">
        <div className="logo font-bold text-white text-2xl "> 
        <span className='text-green-700'>&lt;</span>
        
        Pass
        <span className='text-green-700'>Op/&gt;</span>
       
        </div>
            {/* <ul >
                <li className='flex gap-10 text-white'>
                    <a className='hover:font-bold' href="/">Home</a>
                    <a className='hover:font-bold' href="#">About</a>
                    <a className='hover:font-bold' href="#">Contact</a>
                </li>
            </ul> */}
            <button className='text-white bg-green-700 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
                <img className='invert py-1  w-10' src="/icons/github.svg" alt="github logo" />
                <span className='font-bold px-4 '>Github</span>
            </button>
            </div>
    </nav>
  )
}

export default Navbar

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';


export default function Navbar(){
    const close = <FontAwesomeIcon icon={faXmark} />;
    const plus = <FontAwesomeIcon icon={faPlus} />;

    let [dropDown, setDropdown] = useState(true);

    const tes =     <ul className="md:flex gap-5 text-white -z-20">
                        <li className="md:border-b-transparent md:border-b-2 md:hover:border-white duration-200 bg-blue-500">
                            <a href="#motto" className='ms-5'>
                                Motto
                            </a>
                        </li>
                        <li className="md:border-b-transparent md:border-b-2 md:hover:border-white duration-200 bg-blue-500">
                            <a href="#products" className='ms-5'>
                                Our Service
                            </a>
                        </li>
                        <li className='bg-blue-500 md:bg-none'>
                            <a href="#team" className="md:border-white md:border-2 md:px-3 md:rounded-md md:hover:bg-blue-700 md:duration-200 ms-5">
                                Join Us
                            </a>
                        </li>
                    </ul>


    
    function functionCDropdown(){
        dropDown ? setDropdown(false) : setDropdown(true)
    }

    return(

        <>
        <div className='fixed'>
            <div className="bg-blue-500 w-screen py-3 ">
                <div className="container md:mx-auto flex justify-evenly md:place-content-between text-white text-2xl">
                    <a href="" className="font-bold">
                        Fiber.com
                    </a>
                    <div className='hidden md:inline'>
                        {tes}
                    </div>
                    {dropDown}
                    <button onClick={functionCDropdown} className='md:hidden'>
                        {dropDown ? plus : close}
                        
                    </button>

                </div>
            </div>
            <div className='md:hidden'>
                {dropDown ? '' : tes}
            </div>
        </div>
            

        </>
    );
}
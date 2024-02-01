import React from 'react'
import groupImg from "../multimedia/Group.png";
import Image from 'next/image';
import './Credencial.css'


const Header = () => {
  return (
    <div>
      <header className="  bg-white/90 rounded my-4">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
          <div className="sm:flex sm:items-center sm:justify-between " id="logoHeader">
            <div className=" sm:text-left " >
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl ">
                Welcome!
              </h1>
            </div>
            <Image src={groupImg} alt="group" width="90" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header
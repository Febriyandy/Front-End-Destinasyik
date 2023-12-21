import React from 'react';
import { IoLocation } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdOutlineTour } from "react-icons/md";
import NavbarAdmin from '../../Components/NavbarAdmin';

const Admin = () => {
  return (
    <>
    <NavbarAdmin/>
    <div className='ml-60 px-5 h-screen bg-[#FAFAFA]'>
        <h1 className='text-2xl font-body font-bold pt-10'>Dashboard</h1>
        <div className='flex justify-between mt-10'>
            <a href="">
            <div className='w-64 flex p-3 h-20 border border-transparent hover:border-[#3c87ca] bg-white rounded-md shadow-lg'>
                <div className='w-14 p-2.5 h-14 rounded-md bg-[#3c87ca] '>
                    <h1 className='text-white text-4xl'><IoLocation/></h1>
                </div>
                <div>
                    <h1 className='text-3xl pl-3 font-body font-bold'>17</h1>
                    <p className='text-base font-body font-bold pl-3 '>Destinasi Wisata</p>
                </div>
            </div>
            </a>
            <a href="">
            <div className='w-64 flex p-3 h-20 border border-transparent hover:border-[#3c87ca] bg-white rounded-md shadow-lg'>
                <div className='w-14 p-2.5 h-14 rounded-md bg-[#3c87ca] '>
                    <h1 className='text-white text-4xl'><IoLocation/></h1>
                </div>
                <div>
                    <h1 className='text-3xl pl-3 font-body font-bold'>14</h1>
                    <p className='text-sm font-body font-bold pl-3 '>Destinasi Non Wisata</p>
                </div>
            </div>
            </a>
            <a href="">
            <div className='w-64 flex p-3 h-20 border border-transparent hover:border-[#3c87ca] bg-white rounded-md shadow-lg'>
                <div className='w-14 p-2.5 h-14 rounded-md bg-[#3c87ca] '>
                    <h1 className='text-white text-4xl'><FaUser/></h1>
                </div>
                <div>
                    <h1 className='text-3xl pl-3 font-body font-bold'>8</h1>
                    <p className='text-base font-body font-bold pl-3 '>Total Pengguna</p>
                </div>
            </div>
            </a>
            <a href="">
            <div className='w-64 flex p-3 h-20 border border-transparent hover:border-[#3c87ca] bg-white rounded-md shadow-lg'>
                <div className='w-14 p-2.5 h-14 rounded-md bg-[#3c87ca] '>
                    <h1 className='text-white text-4xl'><MdOutlineTour /></h1>
                </div>
                <div>
                    <h1 className='text-3xl pl-3 font-body font-bold'>9</h1>
                    <p className='text-base font-body font-bold pl-3 '>Paket Wisata</p>
                </div>
            </div>
            </a>
            
            
        </div>
    </div>
    </>
  )
}

export default Admin
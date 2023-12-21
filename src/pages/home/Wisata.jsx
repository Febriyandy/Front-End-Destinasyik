import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { Footer } from "../../Components/Footer";
import { IoSearch } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Wisata = () => {
    const [wisata, setWisata] = useState ([]);

    useEffect(() =>{
    getWisata();
    }, []);

    const getWisata = async () =>{
        const response = await axios.get("http://localhost:5000/wisata");
        setWisata(response.data);
    }

  return (
    <>
    <Navbar/>
      <div className='relative bg-[#FAFAFA] pb-10'>
      <div className="flex">
        <div class="flex font-body ml-28 mt-10 font-bold mb-10 ">
            <Link to={"/Landingpage"} class="px-4 py-1 text-xl pt-1.5 shadow-lg  bg-white rounded-s-full hover:bg-[#3c87ca] hover:text-white text-[#3c87ca]">
              {" "}
              <FaHome/>{" "}
            </Link>
          <a href="">
            <button class="px-4 py-1 shadow-lg bg-[#3c87ca] text-white">
              Wisata
            </button>
          </a>
            <Link to={"/NonWisata"} class="px-4 py-1  shadow-lg rounded-e-full bg-white hover:bg-[#3c87ca] hover:text-white text-black">
              Non-Wisata
            </Link>
        </div>
        <div className=" mt-10 flex right-0 mr-24 absolute rounded-2xl border-2 ">
          <input
            className="pl-5 p-1 w-64  shadow-md outline-[#3c87ca]  rounded-2xl text-md placeholder-slate-400"
            type="text"
            placeholder="Search..."
          />
          <a
            className="absolute text-2xl pt-1 ml-56 hover:text-[#3c87ca]"
            href="#"
          >
            <IoSearch />
          </a>
        </div>
      </div>
      <div className="">
      {wisata.map((wisataa) => (
            <div className="w-3/5 mt-5 p-5 flex h-60 pr-7 bg-white shadow-md rounded-xl relative left-1/2 transform -translate-x-1/2">
              <div className="w-1/2 h-full">
                <img
                  src={wisataa.cover}
                  alt="Foto"
                  className="w-80 h-48 mt-1 object-cover rounded-lg"
                />
              </div>
              <div className="w-3/5">
              <h1 className="font-body text-2xl font-bold pb-4">
                  {wisataa.nama_tempat}
                </h1>
                <p className="text-base  font-body">
                  {wisataa.deskripsi_singkat}
                </p>
              </div>
              <Link
                  to={`DetailWisata/${wisataa.id}`}
                  className="py-2 px-40 absolute bottom-0 right-0 mb-5 mr-8 rounded-lg font-body text-white hover:bg-[#3170a7] bg-[#3c87ca]"
                >
                  Lebih Lanjut
                </Link>
            </div>
          ))}
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Wisata
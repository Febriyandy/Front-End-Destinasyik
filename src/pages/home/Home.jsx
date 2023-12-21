import React, { useState, useEffect } from "react";
import JOGJA from "../../assets/jogja.png";
import Navbar1 from "../../Components/Navbar1";
import { Footer } from "../../Components/Footer";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import axios from "axios";

const Home = () => {
  const [wisata, setWisata] = useState([]);
  useEffect(() => {
    getWisata();
  }, []);

  const getWisata = async () => {
    const response = await axios.get("http://localhost:5000/wisata");
    setWisata(response.data);
  };

  const [nonwisata, setNonwisata] = useState ([]);

    useEffect(() =>{
    getNonwisata();
    }, []);

    const getNonwisata = async () =>{
        const response = await axios.get("http://localhost:5000/nonwisata");
        setNonwisata(response.data);
    }


  return (
    <>
      <Navbar1 />
      <div className="relative bg-[#FAFAFA] pb-10">
        <div className="relative">
          <img
            src={JOGJA}
            alt="Parangtritis"
            className="max-w-full max-h-full"
          />
          <div className="absolute flex w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pl-10 pb-32">
            <h1 className="absolute text-5xl font-body leading-relaxed pl-10 font-bold italic text-white">
              Bingung Mau Pergi Kemana? <br />
              DestinAsyik Solusi Nya!
            </h1>
          </div>
          <div className="absolute bottom-0 right-0">
            <p className="font-body text-2xl font-bold italic pr-5 pb-5 text-white">
              Easy Way To Find And Go
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="font-body text-3xl text-center pt-5 font-bold">
            Rekomendasi Bulan Ini
          </h1>
        </div>
        <div className="flex justify-center gap-24 mt-5">
        {wisata.slice(0, 3).map((wisata) => (
        
          <div className="w-80 h-96 relative bg-white rounded-2xl shadow-md border-2  border-transparent hover:border-[#3c87ca] ">
            <img
              src={wisata.cover}
              className="rounded-lg w-5/6 mt-5 absolute  left-1/2 transform -translate-x-1/2"
            />
            <div className="absolute px-7 top-48">
              <h1 className="text-xl font-bold font-body ">{wisata.nama_tempat}</h1>
              <p className="text-base text-justify font-body">
                {wisata.deskripsi_singkat}
              </p>
            </div>
            <Link
              to={`DetailWisata/${wisata.id}`}
              className="text-3xl absolute bottom-0 right-0 pr-5 pb-5 hover:text-[#3c87ca] "
            >
              <BsArrowRightCircleFill />
            </Link>
            
          </div>
        
        ))}
        </div>
        <div className="flex">
          <div class="flex font-body ml-28 mt-10 font-bold mb-10 ">
          <Link
              to={"/Landingpage"}
              class="px-4 py-1 text-xl pt-1.5 shadow-lg  rounded-s-full bg-[#3c87ca] text-white "
            >
              {" "}
              <FaHome />{" "}
            </Link>
            <Link
              to={"/Wisata"}
              class="px-4 py-1  shadow-lg  bg-white hover:bg-[#3c87ca] hover:text-white text-black"
            >
              Wisata
            </Link>
            <Link
              to={"/NonWisata"}
              class="px-4 py-1 shadow-lg bg-white hover:bg-[#3c87ca] rounded-e-full hover:text-white text-black"
            >
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
        {nonwisata.slice(0, 3).map((nonwisata) => (
            <div className="w-3/5 mt-5 p-5 flex h-60 pr-7 bg-white shadow-md rounded-xl relative left-1/2 transform -translate-x-1/2">
              <div className="w-1/2 h-full">
                <img
                  src={nonwisata.cover}
                  alt="Foto"
                  className="w-80 h-48 mt-1 object-cover rounded-lg"
                />
              </div>
              <div className="w-3/5">
                <h1 className="font-body text-2xl font-bold pb-4">
                  {nonwisata.nama_tempat}
                </h1>
                <p className="text-base  font-body">
                  {nonwisata.deskripsi_singkat}
                </p>
              </div>
              <Link
                  to={`DetailNonwisata/${nonwisata.id}`}
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
  );
};

export default Home;

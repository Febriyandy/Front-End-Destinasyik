import React, { useState, useEffect } from 'react';
import Foto from "../../assets/Candi.jpg";
import Navbar from '../../Components/Navbar';
import Malioboro from "../../assets/Malioboro.png";
import Keraton from '../../assets/Kraton.png';
import Tugu from '../../assets/Tugu.png';
import { Footer } from "../../Components/Footer";
import axios from "axios";

import {Link} from "react-router-dom";


const PaketWisata = () => {
    const [paket, setpaket] = useState ([]);

     useEffect(() =>{
     getPaket();
      }, []);
     
    const getPaket = async () =>{
        const response = await axios.get("http://localhost:5000/paket");
        setpaket(response.data);
     
  }
  



  return (
    <>
    <Navbar/>
    <div className="relative bg-[#FAFAFA] pb-10">
        <div className='relative'>
        <img src={Foto} className="max-w-full max-h-full" alt="bg-paketwisata" />
            <div className="absolute w-4/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h1 className="text-5xl font-body leading-relaxed font-bold ">
                    Temukan Paket Wisata Terjangkau <br />
                    dan Menyenangkan Bersama DestinAsyik <br />
                    Untuk Menjelajah Yogyakarta
                </h1>
            </div>
        </div>
        <div className='w-4/5 h-auto py-10 bg-white rounded-md shadow-lg mt-10 mx-auto'>
                <h1 className='bg-[#77ABDA] w-60 text-white font-body font-bold py-3 px-10 rounded-r-full'>Paket Wisata 1 Hari </h1>
                <div className='w-4/5  grid grid-cols-3 mx-auto gap-24'>
                    {paket.map((pakett)=>(
                    <div className='w-72 h-80 flex flex-col  items-center mt-5 p-4 bg-[#FAFAFA] rounded-md shadow-lg'>
                        <img className='rounded-md h-1/2' src={pakett.foto_url} alt="" />
                        <h1 className='text-black font-body font-bold text-xl text-center mt-4'>{pakett.nama_paket}</h1>
                        <p className='text-lg font-body font-semibold text-center'>Mulai dari <br />{pakett.rentang_harga}</p>
                        <Link to={`DetailPaket/${pakett.id}`} className='bg-[#3c87ca] py-1.5 mt-3 px-7 rounded-md text-white font-body hover:bg-[#2A5E8D]'>Lihat Detail</Link>
                    </div>
                    ))}
                </div>
                <h1 className='bg-[#3c87ca] mt-10 w-60 text-white font-body font-bold py-3 px-10 rounded-r-full'>Paket Wisata 2 Hari </h1>
                <div className='w-4/5  grid grid-cols-3 mx-auto gap-24'>
                    <div className='w-72 h-80 flex flex-col  items-center mt-5 p-4 bg-[#FAFAFA] rounded-md shadow-lg'>
                        <img className='rounded-md h-1/2' src={Malioboro} alt="" />
                        <h1 className='text-black font-body font-bold text-xl text-center mt-4'>Delight Tour One</h1>
                        <p className='text-lg font-body font-semibold text-center'>Mulai dari <br />Rp700.000/Pax</p>
                        <a className='bg-[#3c87ca] py-1.5 mt-3 px-7 rounded-md text-white font-body hover:bg-[#2A5E8D]' href=""><button>Lihat Detail</button></a>
                    </div>
                    <div className='w-72 h-80 flex  flex-col  items-center mt-5 p-4 bg-[#FAFAFA] rounded-md shadow-lg'>
                        <img className='rounded-md h-1/2' src={Tugu} alt="" />
                        <h1 className='text-black font-body font-bold text-xl text-center mt-4'>Delight Tour Two</h1>
                        <p className='text-lg font-body font-semibold text-center'>Mulai dari <br />Rp720.000/Pax</p>
                        <a className='bg-[#3c87ca] py-1.5 mt-3 px-7 rounded-md text-white font-body hover:bg-[#2A5E8D]' href=""><button>Lihat Detail</button></a>
                    </div>
                    <div className='w-72 h-80 flex flex-col  items-center mt-5 p-4 bg-[#FAFAFA] rounded-md shadow-lg'>
                        <img className='rounded-md' src={Keraton} alt="" />
                        <h1 className='text-black font-body font-bold text-xl text-center mt-4'>Delight Tour Three</h1>
                        <p className='text-lg font-body font-semibold text-center'>Mulai dari <br />Rp750.000/Pax</p>
                        <a className='bg-[#3c87ca] py-1.5 mt-3 px-7 rounded-md text-white font-body hover:bg-[#2A5E8D]' href=""><button>Lihat Detail</button></a>
                    </div>
                </div>
                <h1 className='bg-[#2A5E8D] mt-10 w-60 text-white font-body font-bold py-3 px-10 rounded-r-full'>Paket Wisata 3 Hari </h1>
                <div className='w-4/5  grid grid-cols-3 mx-auto gap-24'>
                    <div className='w-72 h-80 flex flex-col  items-center mt-5 p-4 bg-[#FAFAFA] rounded-md shadow-lg'>
                        <img className='rounded-md h-1/2' src={Malioboro} alt="" />
                        <h1 className='text-black font-body font-bold text-xl text-center mt-4'>Tranquility Tour One</h1>
                        <p className='text-lg font-body font-semibold text-center'>Mulai dari <br />Rp1.000.000/Pax</p>
                        <a className='bg-[#3c87ca] py-1.5 mt-3 px-7 rounded-md text-white font-body hover:bg-[#2A5E8D]' href=""><button>Lihat Detail</button></a>
                    </div>
                    <div className='w-72 h-80 flex  flex-col  items-center mt-5 p-4 bg-[#FAFAFA] rounded-md shadow-lg'>
                        <img className='rounded-md h-1/2' src={Tugu} alt="" />
                        <h1 className='text-black font-body font-bold text-xl text-center mt-4'>Tranquility Tour Two</h1>
                        <p className='text-lg font-body font-semibold text-center'>Mulai dari <br />Rp1.020.000/Pax</p>
                        <a className='bg-[#3c87ca] py-1.5 mt-3 px-7 rounded-md text-white font-body hover:bg-[#2A5E8D]' href=""><button>Lihat Detail</button></a>
                    </div>
                    <div className='w-72 h-80 flex flex-col  items-center mt-5 p-4 bg-[#FAFAFA] rounded-md shadow-lg'>
                        <img className='rounded-md' src={Keraton} alt="" />
                        <h1 className='text-black font-body font-bold text-xl text-center mt-4'>Tranquility Tour Three</h1>
                        <p className='text-lg font-body font-semibold text-center'>Mulai dari <br />Rp1.050.000/Pax</p>
                        <a className='bg-[#3c87ca] py-1.5 mt-3 px-7 rounded-md text-white font-body hover:bg-[#2A5E8D]' href=""><button>Lihat Detail</button></a>
                    </div>
                </div>       
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default PaketWisata
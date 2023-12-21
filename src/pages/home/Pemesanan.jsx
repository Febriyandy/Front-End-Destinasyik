import React, {useState, useEffect} from 'react';
import Navbar from '../../Components/Navbar';
import { Footer } from '../../Components/Footer';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const Pemesanan = () => {

  const { id } = useParams();

  const getPaketById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/paket/${id}`);
      setPaket(response.data); // Sesuaikan dengan respons dari server
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getPaketById();
  }, [id]);

  return (
    <>
    <Navbar/>
    <div className=" flex py-20 justify-center bg-[#FAFAFA] h-screen w-full">
        <div className='w-2/6 h-full  bg-white rounded-md shadow-lg'>
            <h1 className='text-xl font-body font-bold text-center mt-10'>Formulir Pemesanan</h1>
            <div>
            <div className='w- mt-5 flex flex-col  items-center'>
          <form className='w-4/5'>
            <label className='text-base font-body'>Tanggal Berwisata</label>
            <input type="date" id='tanggal' placeholder='Masukkan Tanggal' className='w-full py-1 px-3 mt-2 mb-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body' />
            <label className='text-base font-body'>Jumlah Orang</label>
            <input type="number" id='jumlah' placeholder='Masukan Jumlah' className='w-full py-1 px-3 mt-2 mb-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body' />
            <label className='text-base font-body'>Nomor Whatsapp Aktif</label>
            <input type="tel" id='nomor' placeholder='628*****' className='w-full py-1 px-3 mt-2 mb-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body' />
          </form>
          <div className="mt-2">
            <a href="/Pembayaran">
              <button className='font-body py-2 px-10 mt-5 rounded-md text-white hover:bg-[#3373ac] bg-[#3c87ca]'>Selesaikan Pesanan</button>
            </a>
          </div>
        </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Pemesanan
import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import { Footer } from '../../Components/Footer';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


const DetailPaket = () => {
  const [paket, setPaket] = useState(null); 
  const { id } = useParams();

  const getPaketById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/paket/${id}`);
      setPaket(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getPaketById();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-[#FAFAFA] h-auto w-full pb-10">
        <div className="relative w-full h-72 pt-16 bg-[#77ABDA]">
          {paket && (
            <h1 className="text-white font-body text-3xl font-bold text-center">
              Paket Wisata {paket.nama_paket}
            </h1>
          )}
        </div>
        <div className="relative bg-white pb-10 h-auto w-4/5 rounded-md shadow-lg -mt-40 z-10">
          {paket && (
            <>
              <h1 className="pt-10 pl-10 font-body font-bold text-2xl">Destinasi Wisata</h1>
              <div className="text-base font-body pt-3 pl-20">
                <li>{paket.destinasi1}</li>
                <li>{paket.destinasi2}</li>
                <li>{paket.destinasi3}</li>
                <li>{paket.destinasi4}</li>
                <li>{paket.destinasi5}</li>
              </div>
            </>
          )}
           
            <h1 className='pt-10 pl-10 font-body font-bold text-2xl'>Rangkaian Kegiatan</h1>
            {paket &&(
            <div className='text-base font-body pt-3 pl-20'>
            <li>06.00 – 07.00 Penjemputan wisatawan</li>
            <li>07.00 – 08.00 Perjalanan {paket.destinasi1}</li>
            <li>08.00 – 10.00 Tour dan sesi foto – foto di spot yang ada di {paket.destinasi1}</li>
            <li>10.00 – 11.00 Perjalanan menuju {paket.destinasi2}</li>
            <li>11.00 – 13.00 Tour di {paket.destinasi2}</li>
            <li>13.00 – 14.00 Perjalanan menuju {paket.destinasi3}</li>
            <li>14.00 – 16.00 Tour di {paket.destinasi3}</li>
            <li>16.00 – 16.15 Perjalanan menuju {paket.destinasi4}</li>
            <li>16.15 – 17.00 Tour di {paket.destinasi4}</li>
            <li>17.00 – 17.15 Perjalanan menuju {paket.destinasi5}</li>
            <li>17.15 – 19.00 Tour di {paket.destinasi5}</li>
            <li>19.00 – 20.00 Berbelanja di pusat oleh oleh</li>
            <li>20.00 Pengantaran wisatawan ke Hotel/Bandara/Stasiun</li>
            </div>
            )}
            <h1 className='pt-10 pl-10 font-body font-bold text-2xl'>Fasilitas</h1>
            <div className='text-base font-body pt-3 pl-20'>
            <li>Penjemputan di Bandara / Stasiun / Hotel</li>
            <li>Mobil yang Nyaman dan Full Musik</li>
            <li>Pengemudi / Pemandu wisata</li>
            <li>Tiket Masuk Wisata</li>
            <li>Air Mineral</li>
            </div>
            <h1 className='pt-10 pl-10 font-body font-bold text-2xl'>Biaya</h1>
            {paket && (
            <div className='text-base font-body pt-3 pl-20 mb-10'>
            <li>Peserta Tour 02 – 03 Pax : {paket.biaya1} / Orang</li>
            <li>Peserta Tour 04 – 06 Pax : {paket.biaya2} / Orang</li>
            <li>Peserta Tour 07 – 11 Pax : {paket.biaya3} / Orang</li>
            </div>
             )}
             {paket && (
            <Link to={`Pemesanan/${paket.id}`}z className='bg-[#3c87ca] py-2 px-8 rounded-md text-white font-body float-right mr-10 hover:bg-[#2A5E8D] '><button>Pesan Sekarang</button></Link>
            )}
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default DetailPaket;

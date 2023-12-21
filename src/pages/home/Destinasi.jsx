import React, { useState } from 'react';
import NavbarAdmin from '../../Components/NavbarAdmin';
import DataWisata from './DataWisata';
import DataNonWisata from './DataNonWisata';
import TambahDataWisata from './TambahDataWisata';
import TambahDataNonWisata from './TambahDataNonWisata';

const Destinasi = () => {
  const [isWisataSelected, setIsWisataSelected] = useState(true);
  const [isTambahDataVisible, setIsTambahDataVisible] = useState(false);

  const handleWisataClick = () => {
    setIsWisataSelected(true);
    setIsTambahDataVisible(false); 
  };

  const handleNonWisataClick = () => {
    setIsWisataSelected(false);
    setIsTambahDataVisible(false); 
  };

  const handleTambahDataClick = () => {
    setIsTambahDataVisible(true);
  };

  return (
    <>
      <NavbarAdmin />
      <div className='ml-60 px-5 h-auto bg-[#FAFAFA] pb-10'>
        <h1 className='text-2xl font-body font-bold pt-5'>Data Destinasi</h1>

        <div className="flex">
          <div className="flex font-body mt-5 font-bold mb-10 ">
            <button
              onClick={handleWisataClick}
              className={`px-7 py-1 rounded-s-full shadow-lg ${isWisataSelected ? 'bg-[#3c87ca] text-white' : 'bg-white hover:bg-[#3c87ca] hover:text-white text-[#3c87ca]'} `}
            >
              Wisata
            </button>
            <button
              onClick={handleNonWisataClick}
              className={`px-4 py-1 shadow-lg rounded-e-full ${isWisataSelected ? 'bg-white hover:bg-[#3c87ca] hover:text-white text-[#3c87ca]' : 'bg-[#3c87ca] text-white'} `}
            >
              Non-Wisata
            </button>
          </div>
          <div className="mt-5 flex right-0 mr-10 absolute rounded-md shadow-lg bg-[#3c87ca] hover:bg-[#2A5E8D] text-white py-2 px-4 font-body  ">
            <button onClick={handleTambahDataClick}>
              Tambah Data
            </button>
          </div>
        </div>

        {isTambahDataVisible && (
          isWisataSelected ? <TambahDataWisata /> : <TambahDataNonWisata />
        )}

        {!isTambahDataVisible && (
          isWisataSelected ? <DataWisata /> : <DataNonWisata />
        )}
      </div>
    </>
  )
}

export default Destinasi;

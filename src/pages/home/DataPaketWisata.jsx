import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../../Components/NavbarAdmin';
import { ImBin2 } from 'react-icons/im';
import { MdEdit } from 'react-icons/md';
import TambahDataPaketWisata from './TambahDataPaketWisata';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import Swal library

const DataPaketWisata = () => {
  const [isTambahDataVisible, setIsTambahDataVisible] = useState(false);
  const handleTambahDataClick = () => {
    setIsTambahDataVisible(true);
  };

  const [paket_wisata, setpaket] = useState([]);

  useEffect(() => {
    getPaket();
  }, []);

  const getPaket = async () => {
    const response = await axios.get('http://localhost:5000/paket');
    setpaket(response.data);
  };

  const deletePaket = async (paketId) => {
    try {
      const result = await Swal.fire({
        title: 'Konfirmasi Hapus',
        text: 'Apakah Anda yakin ingin menghapus data ini?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus!',
        cancelButtonText: 'Batal',
      });

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:5000/paket/${paketId}`);
        getPaket(); // Fix the function name here
        Swal.fire('Terhapus!', 'Data berhasil dihapus.', 'success');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavbarAdmin />
      <div className="ml-60 px-5 h-auto bg-[#FAFAFA] pb-10">
        <h1 className="text-2xl font-body font-bold pt-5">Data Paket Wisata</h1>
        <div className="flex -mt-5 right-0 mr-10 absolute rounded-md shadow-lg bg-[#3c87ca] hover:bg-[#2A5E8D] text-white py-2 px-4 font-body">
          <button onClick={handleTambahDataClick}>Tambah Data</button>
        </div>
        {isTambahDataVisible ? (
          <TambahDataPaketWisata setIsTambahDataVisible={setIsTambahDataVisible} />
        ) : (
          <div className="container font-body mt-10 mx-auto bg-white p-10 rounded-md shadow-lg">
            <div className="flex justify-between mb-5">
              <div className="flex justify-center items-center gap-1">
                <p>Show</p>
                <input className="border-2 border-[#3c87ca] pl-2 w-16 rounded-md" type="number" />
                <p>entries</p>
              </div>
              <div className="gap-1">
                <label htmlFor="">Search:</label>
                <input className="border-2 border-[#3c87ca] outline-none pl-2 w-44 rounded-md" type="text" />
              </div>
            </div>
            <table className="min-w-full bg-white ">
              <thead>
                <tr className="text-left">
                  <th className="py-2 px-4  text-center">No</th>
                  <th className="py-2 px-4 ">Nama Paket Wisata</th>
                  <th className="py-2 px-4 ">Rentang Harga</th>
                  <th className="py-2 px-4 ">Lama Kegiatan</th>
                  <th className="py-2 px-4 ">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {paket_wisata.map((paket_wisata, index) =>  (
                    <tr key={paket_wisata.id}>
                      <td className="py-2 px-4 border-y text-center">{index + 1}</td>
                      <td className="py-2 px-4 border-y">{paket_wisata.nama_paket}</td>
                      <td className="py-2 px-4 border-y">{paket_wisata.rentang_harga}</td>
                      <td className="py-2 px-4 border-y">{paket_wisata.lama_kegiatan}</td>
                      <td className="py-2 px-4 border-y">
                        <div className="flex">
                          <button className="bg-blue-500 text-white px-2 py-2 rounded-full ml-2">
                            <MdEdit />
                          </button>
                          <button onClick={() => deletePaket(paket_wisata.id)} className="bg-red-500 text-white px-2 py-2 rounded-full ml-2">
                            <ImBin2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default DataPaketWisata;

import React, { useState, useEffect } from 'react';
import { ImBin2 } from 'react-icons/im';
import { MdEdit } from 'react-icons/md';
import axios from 'axios';
import Swal from 'sweetalert2';

const DataWisata = () => {
  const [wisata, setWisata] = useState([]);

  useEffect(() => {
    getWisata();
  }, []);

  const getWisata = async () => {
    const response = await axios.get('http://localhost:5000/wisata');
    setWisata(response.data);
  };

  const deleteWisata = async (wisataId) => {
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
        await axios.delete(`http://localhost:5000/wisata/${wisataId}`);
        getWisata();
        Swal.fire('Terhapus!', 'Data berhasil dihapus.', 'success');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    
    <div className="container font-body  mx-auto bg-white p-10 rounded-md shadow-lg">
      <div className='flex justify-between mb-5'>
        <div className='flex justify-center  items-center gap-1'>
          <p>Show</p>
          <input className='border-2 border-[#3c87ca] pl-2 w-16 rounded-md'  type="number" />
          <p>entries</p>
        </div>
        <div className='gap-1'>
          <label htmlFor="">Search:</label>
          <input className='border-2 border-[#3c87ca] outline-none pl-2 w-44 rounded-md' type="text" />
        </div>
      </div>
      <table className="min-w-full bg-white ">
        <thead>
          <tr className="text-left ">
            <th className="py-1 px-4 text-center ">No</th>
            <th className="py-1 px-4 ">Nama Destinasi</th>
            <th className="py-1 px-4 ">Alamat</th>
            <th className="py-1 px-4 ">Deskripsi Singkat</th>
            <th className="py-1 px-4 ">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {wisata.map((wisata, index ) => (
               <tr key={wisata.id}>
               <td className="py-2 px-4 border-y text-center">{index + 1}</td>
               <td className="py-2 px-4 border-y">{wisata.nama_tempat}</td>
               <td className="py-2 px-4 border-y">{wisata.alamat}</td>
               <td className="py-2 px-4 border-y">{wisata.deskripsi_singkat}</td>
               <td className="py-2 px-4 border-y">
                 <div className='flex'>
                 <button className="bg-blue-500 text-white px-2 py-2 rounded-full ml-2"><MdEdit /></button>
                 <button onClick={() => deleteWisata(wisata.id)} className="bg-red-500 text-white px-2 py-2 rounded-full ml-2"><ImBin2 /></button>
                 </div>
               </td>
             </tr>
          ))}
           
        </tbody>
      </table>
    </div>
    </>
  )
}

export default DataWisata
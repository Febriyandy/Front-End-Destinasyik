import React, { useState, useEffect } from 'react';
import NavbarAdmin from '../../Components/NavbarAdmin';
import { ImBin2 } from 'react-icons/im';
import { FaWhatsapp } from "react-icons/fa";
import axios from 'axios';
import Swal from 'sweetalert2'; // Import Swal library

const DataKontak = () => {
  const [kontak, setKontak] = useState([]);

  useEffect(() => {
    getKontak();
  }, []);

  const getKontak = async () => {
    const response = await axios.get('http://localhost:5000/kontak');
    setKontak(response.data);
  };

  const deleteKontak = async (kontakId) => {
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
        await axios.delete(`http://localhost:5000/kontak/${kontakId}`);
        getKontak(); // Fix the function name here
        Swal.fire('Terhapus!', 'Pesan berhasil dihapus.', 'success');
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
                  <th className="py-2 px-4 ">Nama</th>
                  <th className="py-2 px-4 ">Email</th>
                  <th className="py-2 px-4 ">Nomor Handpohone</th>
                  <th className="py-2 px-4 ">Perusahaan</th>
                  <th className="py-2 px-4 ">Pesan</th>
                  <th className="py-2 px-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {kontak.map((kontak, index) =>  (
                    <tr key={kontak.id}>
                      <td className="py-2 px-4 border-y text-center">{index + 1}</td>
                      <td className="py-2 px-4 border-y">{kontak.nama}</td>
                      <td className="py-2 px-4 border-y">{kontak.email}</td>
                      <td className="py-2 px-4 border-y">{kontak.no_hp}</td>
                      <td className="py-2 px-4 border-y">{kontak.perusahaan}</td>
                      <td className="py-2 px-4 border-y">{kontak.pesan}</td>
                      <td className="py-2 px-4 border-y text-center">
                        <div className="flex">
                          <button className="bg-green-500 text-white px-2 py-2 rounded-full ml-2">
                            <FaWhatsapp />
                          </button>
                          <button onClick={() => deleteKontak(kontak.id)} className="bg-red-500 text-white px-2 py-2 rounded-full ml-2">
                            <ImBin2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </>
  );
};

export default DataKontak;

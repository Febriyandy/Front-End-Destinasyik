import React from 'react';
import NavbarAdmin from '../../Components/NavbarAdmin';


const DataTransaksi = () => {
    const data = [
        { id: 1, NamaPengguna: 'Muftahul Fikri Pratama', PaketWisata: 'Escape Paradise One', Tanggal: '27-12-2023', NoWhatsapp: '081261011991' },
        { id: 2, NamaPengguna: 'Febriandi', PaketWisata: 'Escape Paradise One', Tanggal: '27-12-2023', NoWhatsapp: '085162598308' },
        { id: 3, NamaPengguna: 'Nabiil', PaketWisata: 'Escape Paradise One', Tanggal: '27-12-2023', NoWhatsapp: '0812827559958' },
        { id: 4, NamaPengguna: 'Selvi Debi Anita', PaketWisata: 'Escape Paradise One', Tanggal: '27-12-2023', NoWhatsapp: '082341935137' },
        { id: 5, NamaPengguna: 'Zelviannisa', PaketWisata: 'Escape Paradise One', Tanggal: '27-12-2023', NoWhatsapp: '083161362944' },
        { id: 6, NamaPengguna: 'Dimas', PaketWisata: 'Escape Paradise One', Tanggal: '27-12-2023', NoWhatsapp: '083809704076' },
      ];



  return (
    <>
    <NavbarAdmin/>
    <div className='ml-60 px-5 h-auto bg-[#FAFAFA] pb-10'>
        <h1 className='text-2xl font-body font-bold pt-5'>Data Transaksi</h1>
        <div className="container font-body mt-10  mx-auto bg-white p-10 rounded-md shadow-lg">
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
    <div className="container mx-auto ">
      <table className="min-w-full bg-white ">
        <thead>
          <tr className="text-left">
            <th className="py-2 px-4  text-center">No</th>
            <th className="py-2 px-4 ">Nama Pengguna</th>
            <th className="py-2 px-4 ">Paket Wisata</th>
            <th className="py-2 px-4 ">Tanggal</th>
            <th className="py-2 px-4 ">Nomor Whatsapp</th>
            <th className="py-2 px-4 ">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="py-2 px-4 border-y text-center">{row.id}</td>
              <td className="py-2 px-4 border-y">{row.NamaPengguna}</td>
              <td className="py-2 px-4 border-y">{row.PaketWisata}</td>
              <td className="py-2 px-4 border-y">{row.Tanggal}</td>
              <td className="py-2 px-4 border-y">{row.NoWhatsapp}</td>
              <td className="py-2 px-4 border-y">

                <a href="/DetailTransaksiAdmin"><button className="bg-blue-500 text-white px-4 py-1 rounded ml-2">Lihat Detail</button></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </>
  )
}

export default DataTransaksi
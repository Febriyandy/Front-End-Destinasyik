import React from "react";
import NavbarAdmin from '../../Components/NavbarAdmin'

const DetailTransaksi = () => {
  return (
    <>
      <NavbarAdmin/>
      <div className="ml-60 flex flex-col items-center  justify-center h-auto pb-10 bg-[#FAFAFA]">
          <div className="relative bg-white p-5 pb-10 mt-10 h-auto w-4/6  mx-auto rounded-md shadow-lg  z-10">
            <div className="flex justify-between">
              <h1 className="text-xl pt-5 pl-5 font-body font-bold">
                Detail Transaksi
              </h1>
            </div>
            <table className="ml-5 mt-10 text-base font-body">
              <tbody className="w-1/2">
                <tr>
                  <td >Nama Pengguna</td>
                  <td className="pl-24">Miftahul Fikri Pratama</td>
                </tr>
                <tr>
                  <td >Jenis Paket Wisata</td>
                  <td className="pl-24">Escape Paradise One</td>
                </tr>
                <tr>
                  <td >Tanggal</td>
                  <td className="pl-24">22 Desember 2023</td>
                </tr>
                <tr>
                  <td>Jumlah Orang</td>
                  <td className="pl-24">2 (Dua) Orang</td>
                </tr>
                <tr>
                  <td>Total Biaya</td>
                  <td className="pl-24">Rp.800.000</td>
                </tr>
                <tr>
                  <td>Status Pembayaran</td>
                  <td className="pl-24 text-green-600">Lunas</td>
                </tr>
                <tr>
                  <td>Status Perjalanan</td>
                  <td className="pl-24">Belum Berlangsung</td>
                </tr>
                <tr>
                  <td>No Whatsapp Aktif</td>
                  <td className="pl-24">081261011991</td>
                </tr>
              </tbody>
            </table>
            <div className="w-full flex justify-end ">
            <button className="font-body py-2 px-10 mt-10 mr-10 rounded-md text-white hover:bg-[#3373ac] bg-[#3c87ca] ">
            Tandai Selesai
            </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default DetailTransaksi;

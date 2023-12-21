import React from "react";
import Navbar2 from "../../Components/Navbar2";

const DetailTransaksi = () => {
  return (
    <>
      <Navbar2 />
      <div className="ml-60 flex flex-col items-center  justify-center h-auto pb-10 bg-[#FAFAFA]">
        <div className="relative w-full h-72 pt-16 bg-[#77ABDA]">
          <h1 className="text-white font-body text-3xl font-bold text-center">
            Selamat Anda sudah Melakukan Booking <br />
            Paket Wisata Escape paradise One
          </h1>
          </div>
          <div className="relative bg-white p-5 pb-10 h-auto w-4/6 -mt-32 mx-auto rounded-md shadow-lg  z-10">
            <div className="flex justify-between">
              <h1 className="text-xl pt-5 pl-5 font-body font-bold">
                Detail Pesanan
              </h1>
              <a href="/DetailPaket">
                <button className="font-body py-2 px-10 mt-5 rounded-md text-white hover:bg-[#3373ac] bg-[#3c87ca]">
                  Detail Paket Wisata
                </button>
              </a>
            </div>
            <table className="ml-5 mt-10 text-base font-body">
              <tbody className="w-1/2">
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
                  <td className="pl-24 text-green-600">Sukses</td>
                </tr>
                <tr>
                  <td>Status Perjalanan</td>
                  <td className="pl-24">Belum Berlangsung</td>
                </tr>
              </tbody>
            </table>
            <h1 className="text-xl w-2/3 pt-5 pl-5 font-body font-bold">
            Silahkan hubungi nomor dibawah ini untuk memberikan lokasi penjemputan
            </h1>
            <p className="font-body mt-5 ml-5">Telepon / Whatsapp</p>
            <button className="font-body py-2 px-10 mt-5 ml-5 rounded-md text-white hover:bg-[#3373ac] bg-[#3c87ca]">
            0851-2289-0989
            </button>
          </div>
        </div>
    </>
  );
};

export default DetailTransaksi;

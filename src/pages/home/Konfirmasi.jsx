import React, { useState, useEffect } from "react";
import Mandiri from "../../assets/Mandiri.png";
import { GrCopy } from "react-icons/gr";
import Navbar from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";

const Konfirmasi = () => {
  const initialTime = 5 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [isCopySuccess, setIsCopySuccess] = useState(false);
  const [isTimeExpired, setIsTimeExpired] = useState(false);
  const virtualAccountNumber = "887008855238223"; // Ganti dengan nomor virtual account yang sebenarnya

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      setIsTimeExpired(true);
    }
  }, [timeRemaining]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(virtualAccountNumber);
    setIsCopySuccess(true);

    // Setelah 3 detik, reset state untuk menutup pesan sukses
    setTimeout(() => {
      setIsCopySuccess(false);
    }, 3000);
  };

  return (
    <>
    <Navbar/>
      <div className="flex justify-center  bg-[#FAFAFA] h-screen w-full">
        <div className="w-2/6 my-20 h-auto p-10 bg-white rounded-md shadow-lg">
          <h1 className="text-xl text-center font-body font-bold">Selesaikan Pembayaran Dalam</h1>
          {isTimeExpired ? (
            <p className="text-lg text-center font-body font-bold text-red-500">Waktu habis silahkan Transaksi Ulang</p>
          ) : (
            <p className="text-xl text-center font-body font-bold text-[#3c87ca]">{formatTime(timeRemaining)}</p>
          )}
          <div className="mt-10 flex justify-between">
            <h1 className="text-lg font-body font-bold mt-2">Mandiri Virtual Account</h1>
            <img className="w-24 p-1" src={Mandiri} alt="" />
          </div>
          <div className="flex justify-between mt-5">
            <p className="text-base font-body">Nomor Virtual Account<br /><b>{virtualAccountNumber}</b></p>
            <button onClick={handleCopyClick} className="text-base py-4 font-body flex gap-1 font-bold text-[#3c87ca]"><GrCopy />Salin</button>
          </div>
          {isCopySuccess && (
            <p className="text-[#3c87ca] text-sm font-body">Nomor Virtual Account berhasil disalin!</p>
          )}
          <p className="text-base font-body">Total Pembayaran<br /><b>Rp800.000</b></p>
          <div className="flex items-start justify-center">
            <a href="/Transaksi">
              <button className='font-body py-2 px-10 mt-10 rounded-md text-black hover:text-white hover:bg-[#3c87ca] bg-transparent border-2 border-[#3c87ca]'>Cek Status Pembayaran</button>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Konfirmasi;

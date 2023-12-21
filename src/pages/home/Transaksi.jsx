import React from "react";
import Navbar2 from "../../Components/Navbar2";
import Malioboro from "../../assets/Malioboro.png";
const Transaksi = () => {
  return (
    <>
      <Navbar2 />
      <div className="ml-40 flex  justify-center h-screen pb-10 bg-[#FAFAFA]">
        <div className="w-4/5  grid grid-cols-3 mx-auto gap-24">
          <div className="w-72 h-80 flex flex-col  items-center mt-5 p-4 bg-[#FAFAFA] rounded-md shadow-lg">
            <img className="rounded-md h-1/2" src={Malioboro} alt="" />
            <h1 className="text-black font-body font-bold text-xl text-center mt-4">
              Escape Paradise One
            </h1>
            <div className="flex gap-12 mt-2 text-base font-body">
                <p>Status Pembayaran</p>
                <p className="text-green-600">Sukses</p>
            </div>
            <a
              className="bg-[#3c87ca] py-1.5 mt-6 px-7 rounded-md text-white font-body hover:bg-[#2A5E8D]"
              href="/DetailTransaksi"
            >
              <button>Lihat Detail</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaksi;

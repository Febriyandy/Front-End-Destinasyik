import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import Radio from "@mui/material/Radio";


import Mandiri from "../../assets/Mandiri.png";
import BCA from "../../assets/BCA.png";
import Briva from "../../assets/Briva.png";
import BNI from "../../assets/BNI.png";
import BTN from "../../assets/BTN.png";
import BSI from "../../assets/BSI.png";
import Permata from "../../assets/Permata.png";
import Danamon from "../../assets/Danamon.png";

const Pembayaran = () => {
  const [selectedValue, setSelectedValue] = useState("Mandiri");
  const [showAllBanks, setShowAllBanks] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const metodePembayaran = [
    { id: "Mandiri", image: Mandiri, label: "Mandiri Virtual Account" },
    { id: "BCA", image: BCA, label: "BCA Virtual Account" },
    { id: "Briva", image: Briva, label: "BRIVA" },
    { id: "BNI", image: BNI, label: "BNI Virtual Account" },
    { id: "BTN", image: BTN, label: "BTN Virtual Account" },
    { id: "BSI", image: BSI, label: "BSI Virtual Account" },
    { id: "Permata", image: Permata, label: "Permata Virtual Account" },
    { id: "Danamon", image: Danamon, label: "Danamon Virtual Account" },
  ];

  // Filter bank yang akan ditampilkan (2 bank pertama atau semua)
  const visibleBanks = showAllBanks ? metodePembayaran : metodePembayaran.slice(0, 2);

  return (
    <>
      <Navbar />
      <div className="flex justify-center bg-[#FAFAFA] h-auto w-full">
        <div className="w-2/5 my-10 h-auto p-10 bg-white rounded-md shadow-lg">
          <h1 className="text-2xl font-body font-bold">Pembayaran</h1>
          <h1 className="text-lg font-body font-bold mt-2">Metode Pembayaran</h1>
          <button
            onClick={() => setShowAllBanks(!showAllBanks)}
            className="text-sm font-body font-bold text-[#3c87ca] float-right"
          >
            Lihat Semua
          </button>
          <div className="w-full mt-5 h-auto bg-white">
            {visibleBanks.map((metode) => (
              <div key={metode.id} className="flex mb-2 h-12 border-b border-slate-300 bg-white">
                <div className="w-1/5 my-auto">
                  <img className="w-2/3" src={metode.image} alt="" />
                </div>
                <p className="w-1/2 py-3 mr-20 text-base font-body">{metode.label}</p>
                <Radio
                  checked={selectedValue === metode.id}
                  onChange={handleChange}
                  value={metode.id}
                  name="radio-buttons"
                  color="primary"
                />
              </div>
            ))}
          </div>
          <h1 className="text-lg font-body font-bold mt-2">Ringkasan Pembayaran</h1>
          <div className="flex justify-between mt-2 text-base font-body">
                <p>Paket Wisata Escape paradise One  x2</p>
                <p className="">Rp800.000</p>
          </div>
          <a href="/Konfirmasi">
              <button className='font-body py-2 px-10 mt-5 float-right rounded-md text-white hover:bg-[#3373ac] bg-[#3c87ca]'>Bayar</button>
            </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pembayaran;

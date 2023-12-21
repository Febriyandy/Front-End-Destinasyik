import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TambahDataWisata = () => {
  const [nama_paket, setNama_paket] = useState("");
  const [lama_kegiatan, setLama_kegiatan] = useState("");
  const [destinasi1, setDestinasi1] = useState(""); // Corrected typo in state variable name
  const [destinasi2, setDestinasi2] = useState("");
  const [destinasi3, setDestinasi3] = useState("");
  const [destinasi4, setDestinasi4] = useState("");
  const [destinasi5, setDestinasi5] = useState("");
  const [rentang_harga, setRentang_harga] = useState("");
  const [biaya1, setBiaya1] = useState("");
  const [biaya2, setBiaya2] = useState("");
  const [biaya3, setBiaya3] = useState("");
  const [foto, setFoto] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFoto(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveData = async (e) => {
    e.preventDefault();

    try {
      // Create FormData object and append data
      const formData = new FormData();
      formData.append("foto", foto);
      formData.append("nama_paket", nama_paket);
      formData.append("lama_kegiatan", lama_kegiatan);
      formData.append("destinasi1", destinasi1);
      formData.append("destinasi2", destinasi2);
      formData.append("destinasi3", destinasi3);
      formData.append("destinasi4", destinasi4);
      formData.append("destinasi5", destinasi5);
      formData.append("rentang_harga", rentang_harga);
      formData.append("biaya1", biaya1);
      formData.append("biaya2", biaya2);
      formData.append("biaya3", biaya3);

      // Use the FormData object in the axios.post request
      await axios.post("http://localhost:5000/paket", formData);

      Swal.fire({
        icon: "success",
        title: "Data berhasil ditambahkan!",
        showConfirmButton: false,
        timer: 2000,
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate("/DataPaketWisata");
        window.location.reload(); // Refresh the page
      }, 2000);
    } catch (error) {
      console.error("Error adding data:", error);

      Swal.fire({
        icon: "error",
        title: "Gagal menambahkan data!",
        text: "Terjadi kesalahan dalam mengunggah foto.",
      });
    }
  };

  return (
    <>
      <div className="flex w-full justify-center">
      <form onSubmit={saveData}
         className="flex w-full justify-center">
        <div className="w-4/5 mt-10">
        
          <div className="bg-white pb-12 flex flex-col rounded-md shadow-lg w-full mb-5">
            <h2 className="bg-[#3c87ca] font-body w-full h-11 py-2.5 px-5 rounded-t-md text-white">
              Form Tambah Paket Wisata
            </h2>
            <div className="px-10">
              <div className="w-full mt-5 flex flex-col items-center">
                <div className="w-full font-body">
                  <label
                    htmlFor="Nama Paket"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Nama Paket
                  </label>
                  <input
                    value={nama_paket}
                    onChange={(e) => setNama_paket(e.target.value)}
                    type="text"
                    id="nama"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />

                  <label
                    htmlFor="Nama Paket"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Lama Kegiatan
                  </label>
                  <input
                    value={lama_kegiatan}
                    onChange={(e) => setLama_kegiatan(e.target.value)}
                    type="text"
                    id="alamat"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />
                  <label
                    htmlFor="Deskripsi Wisata"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Destinasi Wisata
                  </label>
                  <div className="flex gap-5">
                  <div className="w-1/2">
                  <input
                    value={destinasi1}
                    onChange={(e) => setDestinasi1(e.target.value)}
                    type="text"
                    id="alamat"
                    placeholder="Destinasi ke 1"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />
                  <input
                    value={destinasi2}
                    onChange={(e) => setDestinasi2(e.target.value)}
                    type="text"
                    id="alamat"
                    placeholder="Destinasi ke 2"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />
                  <input
                    value={destinasi3}
                    onChange={(e) => setDestinasi3(e.target.value)}
                    type="text"
                    id="alamat"
                    placeholder="Destinasi ke 3"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />
                  <input
                    value={destinasi4}
                    onChange={(e) => setDestinasi4(e.target.value)}
                    type="text"
                    id="alamat"
                    placeholder="Destinasi ke 4"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />
                  <input
                    value={destinasi5}
                    onChange={(e) => setDestinasi5(e.target.value)}
                    type="text"
                    id="alamat"
                    placeholder="Destinasi ke 5"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />
                  </div>
                  <div className="flex flex-col w-full -mt-7">
                  <label
                    htmlFor="Rentang Harga"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Rentang Harga
                  </label>
                  <input
                    value={rentang_harga}
                    onChange={(e) => setRentang_harga(e.target.value)}
                    type="text"
                    id="nama"
                    className="w-1/2 py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />
                  
                  <label
                    htmlFor="Rentang Harga"
                    className="block text-base mt-5 font-medium text-black mb-1"
                  >
                    Biaya
                  </label>
                  <input
                    value={biaya1}
                    onChange={(e) => setBiaya1(e.target.value)}
                    type="text"
                    id="nama"
                    placeholder="Peserta 2-3 Orang"
                    className="w-1/2 py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />
                  <input
                    value={biaya2}
                    onChange={(e) => setBiaya2(e.target.value)}
                    type="text"
                    id="nama"
                    placeholder="Peserta 4-6 Orang"
                    className="w-1/2 py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />
                  <input
                    value={biaya3}
                    onChange={(e) => setBiaya3(e.target.value)}
                    type="text"
                    id="nama"
                    placeholder="Peserta 7 keatas"
                    className="w-1/2 py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />
                  </div>
                  </div>
                  
                  
                  <div className="float-right">
                    <a
                      className=" flex mt-10 -ml-32  rounded-md shadow-lg bg-[#3c87ca] hover:bg-[#2A5E8D] text-white py-2 px-4 font-body  "
                      href=""
                    >
                      <button type="submit">Simpan Data</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-64 ml-5 h-60 rounded-md shadow-lg bg-white">
          <h2 className="bg-[#3c87ca] font-body w-full h-11 py-2.5 px-5 rounded-t-md text-white">
            Foto Cover
          </h2>
          <div>
            <div className="flex justify-center">
              
                {preview ? (
                  <figure className="w-full p-3 h-24">
                    <img src={preview} />
                  </figure>
                ) : (
                  ""
                )}
            </div>
            <div>
              <div className="flex justify-center">
                <label
                  for="fileInput"
                  className="absolute hover:bg-[#3c87ca] hover:text-white cursor-pointer bg-transparent border-2 border-[#3c87ca] font-body bottom-0 mb-52 py-1 px-5 text-[#3c87ca] rounded-md inline-block"
                >
                  <span>Pilih File Foto</span>
                  <input
                    onChange={loadImage}
                    type="file"
                    id="fileInput"
                    className="custom-file-input absolute inset-0 opacity-0 cursor-pointer"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default TambahDataWisata;

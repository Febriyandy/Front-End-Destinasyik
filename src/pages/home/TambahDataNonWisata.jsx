import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TambahDataWisata = () => {
  const [nama_tempat, setNama_tempat] = useState("");
  const [alamat, setAlamat] = useState("");
  const [link_maps, setLink_maps] = useState("");
  const [deskripsi_singkat, setDeskripsi_singkat] = useState("");
  const [deskripsi_panjang, setDeskripsi_panjang] = useState("");
  const [jam_buka, setJam_buka] = useState("");
  const [ket1, setKet1] = useState("");
  const [harga1, setHarga1] = useState("");
  const [cover, setCover] = useState("");
  const [foto1, setFoto1] = useState("");
  const [foto2, setFoto2] = useState("");
  const [foto3, setFoto3] = useState("");
  const [foto4, setFoto4] = useState("");
  const [foto5, setFoto5] = useState("");
  const [preview, setPreview] = useState("");
  const [preview1, setPreview1] = useState("");
  const [preview2, setPreview2] = useState("");
  const [preview3, setPreview3] = useState("");
  const [preview4, setPreview4] = useState("");
  const [preview5, setPreview5] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setCover(image);
    setPreview(URL.createObjectURL(image));
  };

  const loadImage1 = (e) => {
    const image = e.target.files[0];
    setFoto1(image);
    setPreview1(URL.createObjectURL(image));
  };

  const loadImage2 = (e) => {
    const image = e.target.files[0];
    setFoto2(image);
    setPreview2(URL.createObjectURL(image));
  };

  const loadImage3 = (e) => {
    const image = e.target.files[0];
    setFoto3(image);
    setPreview3(URL.createObjectURL(image));
  };

  const loadImage4 = (e) => {
    const image = e.target.files[0];
    setFoto4(image);
    setPreview4(URL.createObjectURL(image));
  };

  const loadImage5 = (e) => {
    const image = e.target.files[0];
    setFoto5(image);
    setPreview5(URL.createObjectURL(image));
  };

  const saveData = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append("nama_tempat", nama_tempat);
      formData.append("alamat", alamat);
      formData.append("link_maps", link_maps);
      formData.append("deskripsi_singkat", deskripsi_singkat);
      formData.append("deskripsi_panjang", deskripsi_panjang);
      formData.append("jam_buka", jam_buka);
      formData.append("ket1", ket1);
      formData.append("harga1", harga1);
      formData.append("cover", cover);
      formData.append("foto1", foto1);
      formData.append("foto2", foto2);
      formData.append("foto3", foto3);
      formData.append("foto4", foto4);
      formData.append("foto5", foto5);
  
      await axios.post("http://localhost:5000/nonwisata", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      Swal.fire({
        icon: "success",
        title: "Data berhasil ditambahkan!",
        showConfirmButton: false,
        timer: 2000,
      });

      setTimeout(() => {
        navigate("/Destinasi");
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
        <div className="w-4/5 -mt-2">
          <div className="bg-white pb-24 flex flex-col rounded-md shadow-lg w-full mb-5">
            <h2 className="bg-[#3c87ca] font-body w-full h-11 py-2.5 px-5 rounded-t-md text-white">
              Form Tambah Data Non Wisata
            </h2>
            <div className="px-10">
              <div className="w-full mt-5 flex flex-col items-center">
                <div className="w-full font-body">
                  <label
                    htmlFor="Nama Tempat"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Nama Tempat
                  </label>
                  <input
                  value={nama_tempat}
                  onChange={(e) => setNama_tempat(e.target.value)}
                    type="text"
                    id="nama"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />

                  <label
                    htmlFor="Alamat"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Alamat
                  </label>
                  <input
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                    type="text"
                    id="alamat"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />

                  <label
                    htmlFor="Link Maps"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Link Maps
                  </label>
                  <input
                  value={link_maps}
                  onChange={(e) => setLink_maps(e.target.value)}
                    type="tex"
                    id="linkmaps"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />

                  <label
                    htmlFor="Keterangan Singkat"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Keterangan Singkat
                  </label>
                  <input
                  value={deskripsi_singkat}
                  onChange={(e) => setDeskripsi_singkat(e.target.value)}
                    type="text"
                    id="keterangan"
                    className="w-full py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />

                 
                  <label
                    htmlFor="Deskripsi Wisata"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Deskripsi Wisata
                  </label>
                  <textarea
                  value={deskripsi_panjang}
                  onChange={(e) => setDeskripsi_panjang(e.target.value)}
                    id="Deskripsi"
                    className="w-full h-32 py-1 px-3  mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body placeholder-top transition-transform duration-300 ease-out focus:placeholder-translate-y-full"
                  />
                  <label
                    htmlFor="Keterangan Singkat"
                    className="block text-base font-medium text-black mb-1"
                  >
                    Jam Buka
                  </label>
                  <input
                  value={jam_buka}
                  onChange={(e) => setJam_buka(e.target.value)}
                    type="text"
                    id="jam_buka"
                    placeholder="00.00 - 00.00"
                    className="w-1/2 py-1 px-3 mb-3 rounded-md border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body"
                  />

                  <label className="block text-base font-medium text-black mb-1">
                    Harga
                  </label>
                  <table className="border border-black">
                    <thead className="bg-[#ECF3FB] ">
                      <tr>
                        <th className="py-2 px-4 border border-black w-56 ">
                          Keterangan
                        </th>
                        <th className="py-2 px-4 border border-black w-56 ">
                          Harga
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=" border border-black">
                          <input
                          value={ket1}
                          onChange={(e) => setKet1(e.target.value)}
                            className="w-full h-full outline-none"
                            type="text"
                          />
                        </td>
                        <td className=" border border-black">
                          <input
                          value={harga1}
                          onChange={(e) => setHarga1(e.target.value)}
                            className="w-full h-full outline-none"
                            type="text"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <label className="block text-base mt-3 font-medium text-black mb-1">
                    Foto
                  </label>
                  <div className="flex">
                    <div className="border border-dashed border-black w-24 h-32 rounded-md mr-4 my-4">
                    {preview1 ? (
                  <figure className="w-full  h-24">
                    <img src={preview1} />
                  </figure>
                   ) : (
                      ""
                    )}
                    <label
                    className="absolute text-xs  hover:bg-[#3c87ca] hover:text-white cursor-pointer bg-transparent border-2 border-[#3c87ca] font-body  py-1 px-2  text-[#3c87ca] rounded-md inline-block"
                  >
                    <span>Pilih File Foto</span>
                    <input
                    onChange={loadImage1}
                      type="file"
                      id="fileInput"
                      className="custom-file-input absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                    </div>


                    <div className="border border-dashed border-black w-24 rounded-md m-4">
                    {preview2 ? (
                  <figure className="w-full  h-24">
                    <img src={preview2} />
                  </figure>
                   ) : (
                      ""
                    )}
                    <label
                    className="absolute text-xs  hover:bg-[#3c87ca] hover:text-white cursor-pointer bg-transparent border-2 border-[#3c87ca] font-body  py-1 px-2  text-[#3c87ca] rounded-md inline-block"
                  >
                    <span>Pilih File Foto</span>
                    <input
                    onChange={loadImage2}
                      type="file"
                      id="fileInput"
                      className="custom-file-input absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                    </div>


                    <div className="border border-dashed border-black w-24 rounded-md m-4">
                    {preview3 ? (
                  <figure className="w-full  h-24">
                    <img src={preview3} />
                  </figure>
                   ) : (
                      ""
                    )}
                    <label
                    className="absolute text-xs  hover:bg-[#3c87ca] hover:text-white cursor-pointer bg-transparent border-2 border-[#3c87ca] font-body  py-1 px-2  text-[#3c87ca] rounded-md inline-block"
                  >
                    <span>Pilih File Foto</span>
                    <input
                    onChange={loadImage3}
                      type="file"
                      id="fileInput"
                      className="custom-file-input absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                    </div>

                    <div className="border border-dashed border-black w-24 rounded-md m-4">
                    {preview4 ? (
                  <figure className="w-full  h-24">
                    <img src={preview4} />
                  </figure>
                   ) : (
                      ""
                    )}
                    <label
                    className="absolute text-xs  hover:bg-[#3c87ca] hover:text-white cursor-pointer bg-transparent border-2 border-[#3c87ca] font-body  py-1 px-2  text-[#3c87ca] rounded-md inline-block"
                  >
                    <span>Pilih File Foto</span>
                    <input
                    onChange={loadImage4}
                      type="file"
                      id="fileInput"
                      className="custom-file-input absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                    </div>


                    <div className="border border-dashed border-black w-24 rounded-md m-4">
                    {preview5 ? (
                  <figure className="w-full  h-24">
                    <img src={preview5} />
                  </figure>
                   ) : (
                      ""
                    )}
                    <label
                    className="absolute text-xs  hover:bg-[#3c87ca] hover:text-white cursor-pointer bg-transparent border-2 border-[#3c87ca] font-body  py-1 px-2  text-[#3c87ca] rounded-md inline-block"
                  >
                    <span>Pilih File Foto</span>
                    <input
                    onChange={loadImage5}
                      type="file"
                      id="fileInput"
                      className="custom-file-input absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </label>
                    </div>
                  </div>
                  
                  <div className="float-right" >
                    <a className=" flex mt-5 -ml-32 absolute rounded-md shadow-lg bg-[#3c87ca] hover:bg-[#2A5E8D] text-white py-2 px-4 font-body  " href="">
                      <button type="submit">Simpan Data</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-2 w-2/5 ml-5 h-80 rounded-md shadow-lg bg-white">
          <h2 className="bg-[#3c87ca] font-body w-full h-11 py-2.5 px-5 rounded-t-md text-white">
            Foto Cover
          </h2>
          <div>
            <div className="flex pt-5 px-10">
            
                {preview ? (
                  <figure className="w-full  h-24">
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
                    className="absolute  hover:bg-[#3c87ca] hover:text-white cursor-pointer bg-transparent border-2 border-[#3c87ca] font-body bottom-0 mb-24 py-1 px-5 text-[#3c87ca] rounded-md inline-block"
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

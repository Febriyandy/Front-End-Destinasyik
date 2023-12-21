import React, { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Carousel from "../../Components/Carousel";
import Navbar from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FaStar} from "react-icons/fa6";

const DetailWisata = () => {
  const [wisata, setWisata] = useState(null);
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState("");

  const getWisataById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/wisata/${id}`);
      setWisata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getWisataById();

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset >= 0 && offset < 600) {
        setActiveSection("detail");
      } else if (offset >= 600 && offset < 1200) {
        setActiveSection("lokasi");
      } else if (offset >= 1200 && offset < 1800) {
        setActiveSection("harga");
      } else if (offset >= 1800 && offset < 2400) {
        setActiveSection("foto");
      } else if (offset >= 2400) {
        setActiveSection("review");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  return (
    <>
      <Navbar />
      {wisata &&(
      <div className="relative bg-[#FAFAFA]">
        <div className="relative">
          <div className="w-full h-screen">
          <img
              src={wisata.cover}
              alt="Parangtritis"
              className="w-full h-full object-cover"
            />
          </div>
            
          <div className="absolute flex gap-16 left-0 bottom-0 text-white pl-10 pb-10">
              <h1 className="text-4xl font-bold tracking-wide">
                {wisata.nama_tempat}
              </h1>
          </div>
          <div className="flex gap-4 right-0 bottom-0 pr-10 pb-5 absolute text-white">
            <a className="text-4xl hover:text-[#3c87ca] " href="/">
              <FaInstagram />
            </a>
            <a
              className="text-4xl botton-0 right-0 hover:text-red-600"
              href="/"
            >
              <MdOutlineFavoriteBorder />
            </a>
          </div>
        </div>
        <div className="flex  items-center justify-center">
          <div className="w-4/5 pb-24 relative   text-body text-lg font-semibold mt-10 pt-5 px-10 h-auto rounded-2xl ">
          <nav className="sticky top-0 z-10 bg-[#FAFAFA] py-5 w-full border-b-2 border-black">
                <a
                  className={`hover:text-white hover:bg-[#3c87ca] px-10  py-1 rounded-md after:border-b-[#122a3f] ${
                    activeSection === "detail" ? "text-white bg-[#3c87ca]" : ""
                  }`}
                  href="#detail"
                >
                  Detail
                </a>
                <a
                  className={`hover:text-white hover:bg-[#3c87ca] px-10 py-1 rounded-md focus:border-b-[#122a3f] ${
                    activeSection === "lokasi" ? "text-white bg-[#3c87ca]" : ""
                  }`}
                  href="#lokasi"
                >
                  Lokasi
                </a>
                <a
                  className={`hover:text-white hover:bg-[#3c87ca] px-10 py-1 rounded-md focus:border-b-[#122a3f] ${
                    activeSection === "harga" ? "text-white bg-[#3c87ca]" : ""
                  }`}
                  href="#harga"
                >
                  Harga
                </a>
                <a
                  className={`hover:text-white hover:bg-[#3c87ca] px-10 py-1 rounded-md focus:border-b-[#122a3f] ${
                    activeSection === "foto" ? "text-white bg-[#3c87ca]" : ""
                  }`}
                  href="#foto"
                >
                  Foto
                </a>
                <a
                  className={`hover:text-white hover:bg-[#3c87ca] px-10 py-1 rounded-md focus:border-b-[#122a3f] ${
                    activeSection === "review" ? "text-white bg-[#3c87ca]" : ""
                  }`}
                  href="#review"
                  
                >
                  Review
                </a>
              </nav>
            <div className="" id="detail">
                <h1
                  className=" text-[#3c87ca] text-2xl font-body my-2 font-bold"
                >
                  {wisata.nama_tempat}
                </h1>
                <p className="font-body text-sm text-justify">
                  {wisata.deskripsi_panjang}
                </p>
            </div>
            <div className="">
              <h1
                id="lokasi"
                className=" mt-5 text-[#3c87ca] text-2xl font-body my-2 font-bold"
              >
                Lokasi
              </h1>
              <div className="flex gap-10">
                  <div className="w-3/5 h-72 border-2 p-2 rounded-md border-[#3c87ca]">
                    <iframe
                      className="w-full h-full"
                      src={wisata.link_maps}
                      frameborder="0"
                    ></iframe>
                  </div>
                <div className="w-1/3">
                  <h1 className="font-body">Alamat</h1>
                    <p className="font-body text-sm">{wisata.alamat}</p>
                </div>
              </div>
            </div>
            <div className="">
              <h1
                id="harga"
                className=" mt-5 text-[#3c87ca] text-2xl font-body my-2 font-bold"
              >
                Harga
              </h1>
              <table className="mt-5 font-body text-base ">
              <thead>
                <tr>
                  <th className=" p-2 w-64 bg-[#c8e2f8]">Keterangan</th>
                  <th className="p-2 w-64 pl-10 pr-3 bg-[#c8e2f8]">Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pl-3 py-2 border-y border-[#3c87ca]">
                  {wisata.ket1}
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                    {wisata.harga1}
                  </td>
                </tr>
                <tr>
                  <td className="pl-3 py-2 border-y border-[#3c87ca]">
                  {wisata.ket2}
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                  {wisata.harga2}
                  </td>
                </tr>
                <tr>
                  <td className="pl-3 py-2 border-y border-[#3c87ca]">
                  {wisata.ket3}
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                  {wisata.harga3}
                  </td>
                </tr>
                <tr>
                  <td className="pl-3 py-2 border-y border-[#3c87ca]">
                  {wisata.ket4}
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                  {wisata.harga4}
                  </td>
                </tr>
                <tr>
                  <td className="pl-3 py-2 border-y border-[#3c87ca]">
                  {wisata.ket5}
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                  {wisata.harga5}
                  </td>
                </tr>
                <tr>
                  <td className="pl-3 py-2 border-y border-[#3c87ca]">
                  {wisata.ket6}
                  </td>
                  <td className="pl-10 py-2 pr-3 border-y border-[#3c87ca]">
                  {wisata.harga6}
                  </td>
                </tr>
              </tbody>
            </table>
              <div>
                  <p className="font-body text-sm text-justify">
                    
                  </p>
              </div>
            </div>
            <div className="">
              <h1
                id="foto"
                className=" mt-5 text-[#3c87ca] text-2xl font-body my-2 font-bold"
              >
                Foto
              </h1>
              <div className="justify-center items-center flex">
                <div className="w-2/3">
                  <Carousel />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h1
                id="review"
                className=" mt-5 text-[#3c87ca] text-2xl font-body my-2 font-bold"
              >
                Review
              </h1>
              <div className="flex overflow-x-auto space-x-4 p-4 ">
            <div className="w-1/3 h-44  bg-white rounded-lg shadow-md ">
                <div className="flex">
                  <a className="text-4xl p-4" href="/"><FaRegUserCircle/></a>
                  <p className="text-md font-body pt-5">Miftahul Fikri</p>
                </div>
                <div className="flex pl-4 text-yellow-500">
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                </div>
                <p className="text-xs font-body pt-2 px-4">Tempat yang sangat menarik untuk dikunjungi, lokasi yang strategis dan juga pemandangan yang indah cocok untuk liburan dengan teman maupun keluarga.</p>
            </div>
            <div className="w-1/3 h-44 bg-white rounded-lg shadow-md ">
                <div className="flex ">
                  <a className="text-4xl p-4" href="/"><FaRegUserCircle/></a>
                  <p className="text-md font-body pt-5">Selvi </p>
                </div>
                <div className="flex pl-4 text-yellow-500">
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                </div>
                <p className="text-xs font-body pt-2 px-4">Tempat yang sangat menarik untuk dikunjungi, lokasi yang strategis dan juga pemandangan yang indah cocok untuk liburan dengan teman maupun keluarga.</p>
            </div>
            <div className="w-1/3 h-44 bg-white rounded-lg shadow-md">
                <div className="flex">
                  <a className="text-4xl p-4" href="/"><FaRegUserCircle/></a>
                  <p className="text-md font-body pt-5">Dimas</p>
                </div>
                <div className="flex pl-4 text-yellow-500">
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                  <p><FaStar/></p>
                </div>
                <p className="text-xs font-body pt-2 px-4">Tempat yang sangat menarik untuk dikunjungi, lokasi yang strategis dan juga pemandangan yang indah cocok untuk liburan dengan teman maupun keluarga.</p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      )}
      <Footer />
    </>
  );
};

export default DetailWisata;

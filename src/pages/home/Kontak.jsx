import React, { useState } from 'react';
import Logo from "../../assets/Logo.png";
import Navbar from '../../Components/Navbar';
import { Footer } from '../../Components/Footer';
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Kontak = () => {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [no_hp, setNo_hp] = useState("");
  const [perusahaan, setPerusahaan] = useState("");
  const [pesan, setPesan] = useState("");

  const saveData = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nama", nama);
      formData.append("email", email);
      formData.append("no_hp", no_hp);
      formData.append("perusahaan", perusahaan);
      formData.append("pesan", pesan);

      await axios.post("http://localhost:5000/kontak", formData);
      Swal.fire({
        icon: "success",
        title: "Pesan Terkirim!",
        showConfirmButton: false,
        timer: 2000,
      });

      setTimeout(() => {
        navigate("/Landingpage");
        window.location.reload(); 
      }, 2000);
    } catch (error) {
      console.error("Error adding data:", error);

      Swal.fire({
        icon: "error",
        title: "Gagal Mengirim Pesan!",
        text: "Terjadi kesalahan dalam mengirim pesan.",
      });
    }
  };

  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center h-screen bg-[#FAFAFA]'>
      <div className='w-4/5 h-4/5 flex bg-white rounded-xl shadow-lg'>
        <div className='w-1/2 relative'>
          <img className='w-56 mx-auto' src={Logo} alt="Logo" />
          <p className='text-center text-lg font-body mt-4 px-10'>
            Tempat terbaik untuk menemukan rekomendasi pariwisata dan tempat nongkrong! Jika Anda memiliki pertanyaan, masukan, atau ingin berkolaborasi, kami siap membantu.
          </p>
        </div>
        <div className='w-1/2 mt-10 flex flex-col  items-center'>
          <form onSubmit={saveData} className='w-4/5'>
            <input type="text" id='nama' 
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder='Nama' 
            className='w-full py-1 px-3 mb-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body' />
            <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             id='email' placeholder='Email' className='w-full py-1 px-3 mb-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body' />
            <input type="tel" 
            value={no_hp}
            onChange={(e) => setNo_hp(e.target.value)}
            id='telepon' placeholder='No Telepon' className='w-full py-1 px-3 mb-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body' />
            <input type="text" 
            value={perusahaan}
            onChange={(e) => setPerusahaan(e.target.value)}
            id='perusahaan' placeholder='Perusahaan (Opsional)' className='w-full py-1 px-3 mb-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body' />
            <textarea
              id='pesan'
              value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
              placeholder='Pesan'
              className='w-full h-32 py-1 px-3 mb-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca] font-body placeholder-top transition-transform duration-300 ease-out focus:placeholder-translate-y-full'
            />
          <div className="mt-2">
            <a href="">
              <button type='submit' className='font-body py-1 px-7 mx-auto rounded-md text-white hover:bg-[#3373ac] bg-[#3c87ca]'>Kirim</button>
            </a>
          </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Kontak;

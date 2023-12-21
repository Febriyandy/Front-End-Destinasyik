import React, { useState, useEffect } from 'react';
import Navbar2 from '../../Components/Navbar2';
import foto from '../../assets/profil1.jpg';
import axios from 'axios';

const Profil = () => {
  const [user, setUser] = useState({});
  const id = 'cf14c473-5c5d-4a78-bab5-9cc3f8a2b6ee';

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/user/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <>
      <Navbar2 />
      <div className='ml-60 flex  justify-center h-auto bg-[#FAFAFA]'>
        <div className='w-4/5 h-auto mb-10 p-10 bg-white shadow-md mt-10 rounded-lg'>
          <h1 className='text-lg font-body font-bold'>Profil</h1>
          <p className='text-xl font-body font-bold'>{user.nama}</p>
          <div className='w-full gap-5 flex rounded-md mt-5 p-5 h-auto bg-[#FAFAFA]'>
            <div className='w-1/4 h-64 p-5 rounded-md bg-white shadow-lg'>
              <img src={foto} alt='' />
            </div>
            <div className='w-3/4 h-auto pt-5 pl-10 rounded-md bg-white shadow-lg'>
              <p className='text-xl font-body font-bold text-[#3c87ca]'>Ubah Biodata Diri</p>
              <div className='flex'>
                <div className='text-base mr-24 font-body mt-5 leading-9'>
                 
                </div>
                <div className='text-base mr-5 font-body mt-5 leading-9'>
                 
                </div>
                <div className='text-base flex flex-col text-[#3c87ca] font-body mt-5 leading-9'>
                
                </div>
              </div>
              <div className='flex'>
                <div className='text-base mr-24 font-body mt-5 leading-9'>
                <p>Nama</p>
                  <p>Email</p>
                  <p>Nomor HP</p>
                </div>
                <div className='text-base mr-5 font-body mt-5 leading-9'>
                <p>{user.nama}</p>
                  <p>{user.email}</p>
                  <p>{user.no_hp}</p>
                </div>
                <div className='text-base flex flex-col text-[#3c87ca] font-body mt-5 leading-9'>
                  <a href='#'>Ubah</a>
                  <a href='#'>Ubah</a>
                  <a href='#'>Ubah</a>
                </div>
              </div>
              <a
                href='#'
                className='w-48 mb-10 float-right mr-10 relative text-center hover:bg-[#3c87ca] hover:text-white cursor-pointer bg-transparent border-2 border-[#3c87ca] font-body mt-10 py-1  text-black rounded-md inline-block'
              >
                <button>Ubah Kata Sandi</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;

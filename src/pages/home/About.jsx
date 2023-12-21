import React from "react";
import mockup from "../../assets/mockup.png";
import web from "../../assets/WebCrafters.png";
import Navbar from '../../Components/Navbar';
import { Footer } from '../../Components/Footer';

const About = () => {
  return (
    <>
    <Navbar/>
      <div className=" flex items-center  pt-10 justify-center h-auto bg-[#FAFAFA]">
        <div className="w-4/5 h-auto mb-10 flex flex-wrap bg-white rounded-xl shadow-lg">
          <div className="w-1/2">
            <h1 className="font-body p-10 font-bold text-2xl text-[#3c87ca]">
              Tentang DestinAsyik
            </h1>
            <p className="font-body text-base pl-10">
              DestinAsyik merupakan sebuah website yang bertujuan menyediakan
              informasi terkini, promosi tempat-tempat menarik, rekomendasi
              lengkap untuk tempat wisata, nongkrong, tempat makan dan minum,
              serta menyediakan jasa tour guide yang ada di Yogyakarta.
            </p>
          </div>
          <div className="w-1/2">
            <img className="w-4/5 mx-auto mt-10 " src={mockup} alt="" />
          </div>
          <div className="w-1/2">
            <img
              className="mx-auto w-72 bg-[#3c87ca] mb-24 mt-10 p-10 rounded-2xl shadow-lg"
              src={web}
              alt=""
            />
          </div>
          <div className="w-1/2">
            <h1 className="font-body pt-10 font-bold text-2xl text-[#3c87ca]">
              Web Crafters
            </h1>
            <p className="font-body text-base mt-5 pr-10">
              Hallo sobat DestinAsyik,
              <br />
              Web Crafters merupakan tim developer dari pengembangan website
              DestinAsyik yang menyediakan jasa pelayanan website khusus untuk
              pengembangan industri pariwisata. Melalui kerjasama tim yang kuat,
              kami selalu berkomitmen untuk terus mengembangkan website
              DestinAsyik yang sesuai dengan minat pengguna untuk memberikan
              pengalaman yang terbaik untuk Anda. Jangan ragu untuk menghubungi
              kami dan berkonsultasi lebih lanjut. <br /> <br />
              Salam, Web Crafters
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;

import React from 'react'
import Navbar2 from '../../Components/Navbar2';
import PERTAMA from "../../assets/malioboro.png";
import KEDUA from "../../assets/candiprambanan.png";
import KETIGA from "../../assets/keratonjogja.png";
import oppio from "../../assets/oppio.png";
import epic from "../../assets/epic.png";
import SAWAH from "../../assets/TepiSawahCoffeeEatery.png";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Like = () => {
  return (
    <>
    <Navbar2/>
    <div className='ml-60 flex  justify-center h-auto pb-10 bg-[#FAFAFA]'>
    <div className="grid grid-cols-3 justify-center gap-10 mt-5">
          <div className="w-80 h-96  relative bg-white rounded-2xl shadow-md border-2  border-transparent hover:border-[#3c87ca] ">
            <img
              src={PERTAMA}
              className="rounded-lg  absolute  left-1/2 transform -translate-x-1/2 mt-5"
            />
            <div className="absolute px-5 top-44">
              <h1 className="text-xl font-bold font-body ">Malioboro</h1>
              <p className="text-base font-body">
                Jalan ikonik di Yogyakarta, pusat perbelanjaan dan hiburan malam
                dengan suasana khas, pedagang kaki lima, dan lampu neon yang
                menarik.
              </p>
            </div>
            <a
              href="#"
              className="text-3xl absolute bottom-0 right-0 pr-5 pb-5 hover:text-[#3c87ca] "
            >
              <BsArrowRightCircleFill />
            </a>
          </div>
          <div className="w-80 h-96  relative bg-white rounded-2xl shadow-md border-2  border-transparent hover:border-[#3c87ca] ">
            <img
              src={KEDUA}
              className="rounded-lg absolute  left-1/2 transform -translate-x-1/2 mt-5"
            />
            <div className="absolute px-5 top-44">
              <h1 className="text-xl font-bold font-body ">Candi Prambanan</h1>
              <p className="text-base font-body">
                Keindahan Hindu abad ke-9 di Yogyakarta. Siluet megah dan relief
                ukiran menciptakan potret budaya Indonesia yang memukau.
              </p>
            </div>
            <a
              href="#"
              className="text-3xl absolute bottom-0 right-0 pr-5 pb-5 hover:text-[#3c87ca] "
            >
              <BsArrowRightCircleFill />
            </a>
          </div>
          <div className="w-80 h-96  relative  bg-white rounded-2xl shadow-md border-2  border-transparent hover:border-[#3c87ca] ">
            <img
              src={KETIGA}
              className="rounded-lg absolute  left-1/2 transform -translate-x-1/2 mt-5"
            />
            <div className="absolute px-5 top-44">
              <h1 className="text-xl font-bold font-body ">
                Kraton Yogyakarta
              </h1>
              <p className="text-base font-body">
                Keelokan arsitektur Jawa, kehijauan taman, dan pesona sejarah
                yang terpancar. Suasana hangat dan detail artistik yang memikat
                perhatian.
              </p>
            </div>
            <a
              href="#"
              className="text-3xl absolute bottom-0 right-0 pr-5 pb-5 hover:text-[#3c87ca] "
            >
              <BsArrowRightCircleFill />
            </a>
          </div>
          <div className="w-80 h-96  relative bg-white rounded-2xl shadow-md border-2  border-transparent hover:border-[#3c87ca] ">
            <img
              src={SAWAH}
              className="rounded-lg px-5 absolute  left-1/2 transform -translate-x-1/2 mt-5"
            />
            <div className="absolute px-5 top-44">
              <h1 className="text-xl font-bold font-body ">Tepi Sawah Coffee Eatery</h1>
              <p className="text-base font-body">
              Kafe ini tepat berada di tepi sawah. Dengan bangunan utama
                berbentuk joglo, kafe ini mengusung konsep tradisional Jawa.
              </p>
            </div>
            <a
              href="/DetailWisata4"
              className="text-3xl absolute bottom-0 right-0 pr-5 pb-5 hover:text-[#3c87ca] "
            >
              <BsArrowRightCircleFill />
            </a>
          </div>
          <div className="w-80 h-96  relative bg-white rounded-2xl shadow-md border-2  border-transparent hover:border-[#3c87ca] ">
            <img
              src={oppio}
              className="rounded-xl h-36 absolute px-5  left-1/2 transform -translate-x-1/2 mt-5"
            />
            <div className="absolute px-5 top-44">
              <h1 className="text-xl font-bold font-body ">Oppio Coffee Milk</h1>
              <p className="text-base font-body">
              Memiliki konsep suasana alam, cafe ini memberikan kamu kesempatan untuk memanjakan mata dengan melihat hamparan sawah hijau di sekelilingnya. 
              </p>
            </div>
            <a
              href="/DetailWisata5"
              className="text-3xl absolute bottom-0 right-0 pr-5 pb-5 hover:text-[#3c87ca] "
            >
              <BsArrowRightCircleFill />
            </a>
          </div>
          <div className="w-80 h-96  relative  bg-white rounded-2xl shadow-md border-2  border-transparent hover:border-[#3c87ca] ">
            <img
              src={epic}
              className="rounded-lg px-5 h-36 absolute  left-1/2 transform -translate-x-1/2 mt-5"
            />
            <div className="absolute px-5 top-44">
              <h1 className="text-xl font-bold font-body ">
              Epic Coffee
              </h1>
              <p className="text-base font-body">
              Epic Coffee hadir dengan konsep bangunan industrial dan classic.
               Bangunan yang terbuka, dan dirancang 
               sedemikian rupa sehingga tampak luas.
              </p>
            </div>
            <a
              href="/Detailwisata6"
              className="text-3xl absolute bottom-0 right-0 pr-5 pb-5 hover:text-[#3c87ca] "
            >
              <BsArrowRightCircleFill />
            </a>
          </div>
        </div>
    </div>
    </>
  )
}

export default Like
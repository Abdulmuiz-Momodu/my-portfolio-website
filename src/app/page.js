"use client"
// import React, {useState} from "react";
import Footer from "@/footer/footer";
import Header from "@/header/header";
import Hero from "@/hero/hero";


export default function Home() {

  // const [modal, setModal] = useState(false);
  // const [modal2, setModal2] = useState(false);
  
  // const toggleModal = () => setModal(!modal);

  // const handleOpenModal2 = () => {
  //   setModal2((prevstate) => !prevstate);
  // };

  return ( 
    <div className="Home">
      <Header 
      // openModal2={handleOpenModal2}
      // toggleModal={toggleModal}
      />

      {/* {modal2 && ( */}
          {/* <div className="fixed h-screen w-full bg-[#6b7280c4] flex justify-center">
            <div className="fixed overflow-visible rounded[7px] px-4 pb-4 w-full h-fit bg-white shadow-lg z-50 menu-modal">
              <ModalMenu
                closeModal={() => setModal2(false)}
              />
            </div>
          </div> */}
        {/* )} */}

      <Hero/>
      <Footer/>
    </div>
  );
}

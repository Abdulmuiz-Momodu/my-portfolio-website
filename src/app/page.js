"use client";
import React, {useState} from "react";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const toggleModal = () => setModal(!modal); // Toggle function

  const handleOpenModal2 = () => {
    setModal2((prevstate) => !prevstate);
  };
  const closeModal = () => {setModal2(false)}

  return (
    <div className="Home">
      <Header 
        toggleModal={toggleModal} 
        openModal2={handleOpenModal2}
        closeModal={closeModal}

      />

        {modal2 && (
          <div className="fixed h-screen w-full bg-[#6b7280c4] flex justify-center">
            <div className="fixed overflow-visible rounded[7px] px-4 pb-4 w-full h-fit bg-white shadow-lg z-50 menu-modal">
              <ModalMenu
                closeModal={closeModal}
              />
            </div>
          </div>
        )}

      <Hero />
      <Footer />
    </div>
  );
}

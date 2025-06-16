import React from "react";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";

export default function Home() {

  return (
    <div className="Home">
      <Header/>
      <Hero />
      <Footer />
    </div>
  );
}

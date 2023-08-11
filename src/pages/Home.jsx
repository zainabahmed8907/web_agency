import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroMain from "../assets/img/HeroMain.png";
import Meeting from "../assets/img/meeting.png";
import grid from "../assets/img/grid.png";

import HomeSlider from "../components/sections/HomeSlider";
import HomeServices from "../components/sections/HomeServices";
import HomeGrid from "../components/sections/HomeGrid";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="w-auto lg:p-20 p-10 h-screen z-40 bg-orange-200">
        <Hero
          minitext="Digital Marketing"
          mainText="Work that we produce for our clients"
          paraDesc="Lorem ipsum is simply dummy text of the printing 
          and typing industry. Lorem ipsum has been the industry's standard"
          buttonText="Get More Details"
          img={HeroMain}
        />
      </div>

      <section className="lg:pt-2 m-10 lg:m-20">
        <p
          className="text-center font-bold
         lg:text-2xl text-lg lg:mt-10 mt-20 
         lg:w-auto"
        >
          Lorem ipsum is simply dummy text of the printing and <br />{" "}
          typesetting industry
        </p>
        <div className="mt-10">
          <p className="font-bold text-2xl mb-4">Lorem ipsum</p>
          <p className="lg:w-96 w-80 mr-4">
            Lorem ipsum is simply dummy text of the printing and typing
            industry. Lorem ipsum has been the industry's standard.
          </p>
        </div>

        <div className="mt-12 flex">
          <img src={Meeting} alt="meeting" className="z-20" />
          <img
            src={grid}
            alt=""
            className="h-40 -ml-10 z-10 -mt-20 lg:w-auto lg:block hidden"
          />
        </div>
      </section>

      <HomeServices />

      <HomeSlider />

      <HomeGrid/>
    </>
  );
};

export default Home;

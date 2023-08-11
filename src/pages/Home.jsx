import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroMain from "../assets/img/HeroMain.png";
import Meeting from "../assets/img/meeting.png";
import grid from "../assets/img/grid.png";

import service1 from "../assets/img/AR.png";
import s2 from "../assets/img/3D.png";
import s4 from "../assets/img/PS4.png";
import s5 from "../assets/img/VR.png";
import s6 from "../assets/img/MobileDev.png";
import ServiceContainer from "../components/ServiceContainer";

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

      <main className="lg:pt-2 m-10 lg:m-20">
        <p
          className="text-center font-bold
         lg:text-2xl text-lg lg:mt-10 mt-20 mb-3
         lg:w-auto"
        >
          Lorem ipsum is simply dummy text of the printing and <br />{" "}
          typesetting industry.
        </p>
        <p
          className="text-center lg:m-20
         text-sm lg:mt-10 mt-2 leading-6 mb-8
         "
        >
          Lorem ipsum is simply dummy text of the printing and typing industry.
          Lorem ipsum has been the industry's standard dummy text since the
          1500s.
        </p>

        <div className="flex justify-center  flex-wrap lg:flex-row flex-col align-center xl:flex-nowrap">
          <ServiceContainer
            serviceImg={s6}
            serviceText="Mobile Game Development"
          />
          <ServiceContainer
            serviceImg={service1}
            serviceText="Game Development"
          />

          <ServiceContainer serviceImg={s4} serviceText="PC Game Development" />
          <ServiceContainer
            serviceImg={s5}
            serviceText="AR/VR Solutions
            "
          />

          <div className="service-container  lg:mt-20">
            <ServiceContainer serviceImg={s2} serviceText="AR/VR Solutions" />
          </div>

          <div className="service-container lg:mt-20">
            <ServiceContainer serviceImg={s2} serviceText="3D Modelings" />
          </div>
        </div>
      </main>

      <section className="slider lg:pt-2 m-10 lg:m-20">
        <p className="font-bold text-2xl">Lorem Ipsum</p>
        <p className="mt-4 lg:w-96 text-sm">lorem ipsum is simply dummy text of the priniting and typesetting industry.</p>
      </section>
    </>
  );
};

export default Home;

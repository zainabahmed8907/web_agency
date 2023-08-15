import React from "react";
import Hero from "../components/Hero";
import ABoutUsMain from "../assets/img/AboutusMain.png";
import SliderCard from "../components/SliderCard";
import AboutMeeting from "../assets/img/AboutusMeeting.png";
import TeamMemberHolder from "../components/sections/About/TeamMemberHolder";
import Claudia from "../assets/img/Claudia 1.png";
import Beverly from "../assets/img/Beverly 1.png";
import Avatar1 from "../assets/img/Avatar 1.png";
import Bill1 from "../assets/img/Bill 1.png";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="lg:p-20 p-10 h-screen bg-orange-200">
        <Hero
          minitext="About Us"
          mainText="Work that we produce for our clients"
          paraDesc="Lorem ipsum is simply dummy text of the printing 
          and typing industry. Lorem ipsum has been the industry's standard"
          buttonText="Get More Details"
          img={ABoutUsMain}
        />
      </div>

      <section className="lg:pt-2 m-10 lg:m-20">
        <p className="font-bold text-xl">Why work with us</p>

        <div className="card-container flex pt-10 lg:flex-row flex-col">
          <div className="lg:mr-10 pb-4 ">
            <SliderCard pillbgColor="#bdf3d8" pilltextColor="#0CBE64"  />
          </div>
          <div className="lg:mr-10 pb-4">
            <SliderCard pillbgColor="#f79999" pilltextColor="#DC0000" />
          </div>
          <div className="lg:mr-10 pb-4">
            <SliderCard pillbgColor="#eab4f7" pilltextColor="#B000DC" />
          </div>
        </div>

        <div className="bg-[#F5F5F5] w-screen h-auto lg:mt-20 mt-10 flex lg:flex-row flex-col">
          <img
            src={AboutMeeting}
            alt=""
            className="pt-20 pl-20 lg:w-auto w-80"
          />
          <div className="lg:pt-2 m-10 lg:m-20">
            <p className="lg:text-sm  text-lg text-[#DC7000] pb-4 ">
              Lorem Ipsum
            </p>
            <p className="lg:text-2xl font-bold text-shadow text-lg lg:w-96 w-72 pr-10 lg:pr-0">
              Lorem Lorem ipsum is simply the dummy text of the printing and
              typesetting industry.
            </p>
            <p className="mt-10 text-sm lg:w-96 w-72 pr-10 lg:pr-0 lg:text-normal">
              Lorem ipsum is simply the dummy text of the printing and
              typesetting industry. Lorem ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              gallery of typeand scambled it to make a type speciman book. It
              has survived not only five centuries. Lorem ipsum is simply the
              dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10  lg:m-20 m-10 flex  ">
        <div className="mr-0 lg:mr-10">
          <TeamMemberHolder name="peter" avatar={Avatar1} />
        </div>
        <div className="mr-0 lg:mr-10">
          <TeamMemberHolder name="Claudia" avatar={Claudia} />
        </div>
        <div className="mr-0 lg:mr-10">
          <TeamMemberHolder name="Bill" avatar={Bill1} />
        </div>
        <div className="mr-0 lg:mr-10">
          <TeamMemberHolder name="Beverly" avatar={Beverly} />
        </div>
      </section>

      <div className="m-10 lg:m-20 pt-10">
        <p className="text-xl font-bold">Lorem Ipsum</p>
        <p className="text-sm pt-4">
          Lorem ipsum is simply the dummy text of the printing and <br />
          typesetting indsutry.
        </p>
        <Subscribe />
      </div>

      <div className="pt-10">
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;

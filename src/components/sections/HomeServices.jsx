import React from 'react'
import ServiceContainer from '../ServiceContainer'

import service1 from "../../assets/img/AR.png";
import s2 from "../../assets/img/3D.png";
import s4 from "../../assets/img/PS4.png";
import s5 from "../../assets/img/VR.png";
import s6 from "../../assets/img/MobileDev.png";
const HomeServices = () => {
  return (
      <>
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
      </main>xF
      
      </>
  )
}

export default HomeServices
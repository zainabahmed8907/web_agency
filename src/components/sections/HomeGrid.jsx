import React from "react";
import Office1 from "../../assets/img/Rectangle 15.png";
import Office2 from "../../assets/img/Rectangle 16.png";
import Office3 from "../../assets/img/Rectangle 17.png";
import Office4 from "../../assets/img/Rectangle 18.png";
import Office5 from "../../assets/img/Rectangle 19.png";
import Office6 from "../../assets/img/Rectangle 20.png";



const HomeGrid = () => {
  return (
    <div className="lg:pt-2 m-10 lg:m-20">
          <p className="text-2xl font-bold text-center">Our Recent Projects</p>
          <p className="mt-2 text-center text-sm">Lorem ipsum is the dummy text of the prinitng and typesetting <br/>industry.</p>
        
          <div className="flex justify-center p-10 flex-wrap flex-col lg:flex-row">
              <img src={Office1} alt="" className="mr-10 w-72"  />
              <img src={Office2} alt="" className="mr-10 w-72" />
              <img src={Office3} alt="" className="mr-10 w-72" />
         






          </div>
  
      </div>
  );
};

export default HomeGrid;

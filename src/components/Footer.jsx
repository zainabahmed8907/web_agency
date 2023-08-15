import React from 'react'
import Logo from "../assets/img/boldo_logo.png"
const Footer = () => {
  return (
      <div className='footer bg-black text-white flex justify-between lg:flex-row flex-col p-10 align-center '>
          <div>
              <p className='text-lg font-bold pb-4'>
                  <img src={Logo} alt=''/>
              </p>
              <p className='text-sm w-80 pb-4'
              >Lorem Ipsum is the dummy text of the priting and typesetting insdustry.</p>

              <p className='text-sm pb-10 lg:pb-0'>@company.com</p>
          </div>

          <div>
              <p className='text-lg font-bold pb-4'>ABOUT US</p>
              <ul className='list-none'>
                  <li>
                      Copmany
                  </li>
                  <li>
                      Portfolio
                  </li>
                  <li className='pb-10 lg:pb-0'>
                      Contact Us
                  </li>
             </ul>
          </div>

          <div>
              <p className='text-lg font-bold pb-4'>CONTACT US</p>
              <p className='text-sm w-80 pb-4'
              >Lorem Ipsum is the dummy text of the priting and typesetting insdustry.</p>

              <p className='text-sm'>+9000 000 000</p>
          </div>
    </div>
  )
}

export default Footer
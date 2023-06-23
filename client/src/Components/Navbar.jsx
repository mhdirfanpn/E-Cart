import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { BiMessage } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";


export default function Nav() {
  const [navbar, setNavbar] = useState(false);


  return (

    <nav
      className="w-full bg-white shadow"
      style={{
        backgroundColor: "#1565d4",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999
      }}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex">
              <p className="text-sm text-white cursor-pointer flex items-center">
                <FiPhoneCall style={{ marginRight: "10px" }} />
                +221 33 66 22
              </p>

              <p className="text-sm text-white cursor-pointer flex items-center ml-12">
                <BiMessage style={{ marginRight: "10px" }} />
                support@elextra.io
              </p>
            </div>


            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
            <ul className="flex flex-col items-center justify-center space-y-8 md:flex md:flex-row md:space-x-6 md:space-y-0">
              <li className="text-sm text-white cursor-pointer flex items-center md:border-r-2 md:pr-8">
                <SlLocationPin className="mr-1" />
                <p>locations</p>
              </li>
              <li className="text-sm text-white cursor-pointer flex items-center pl-4">
                <p  data-dropdown-toggle="dropdown" class="text-center inline-flex items-center"> <strong className="mr-2">$ </strong>Dollar (US)<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></p>
              </li>
              <li className="text-sm text-white cursor-pointer flex items-center pl-4">
              <p  data-dropdown-toggle="dropdown" class="text-center inline-flex items-center">EN<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></p>

              </li>
            </ul>
          </div>


        </div>
      </div>
    </nav>


  );
}
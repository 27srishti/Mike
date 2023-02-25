import React, { useEffect, useState } from "react";

import One from "../Images/One.jpg";
import Two from "../Images/Two.jpg";
import Three from "../Images/Three.png";

const images = [One, Two, Three];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <div className="flex grid-cols-2  ">
      {/* ------------------sidebar------------------------------ */}

      <aside
        id="separator-sidebar"
        className=" z-40  hidden cursor-pointer  lg:flex lg:block transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidbar"
      >
        <div className="h-screen w-54 px-3 py-4  overflow-y-auto bg-gray-50 ">
          <ul className="space-y-2 hover:text-green-400 cursor-pointer">
            <li>
              <a
                href="#"
                className="flex text-center items-center p-2 text-base font-normal text-green rounded-lg  hover:bg-gray-100 d"
              >
                <span className=" w-full h-9 hover:font-semibold text-green border-gray-400 border-b">
                  Search By Make
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  APC
                  <option>APC</option>
                  <option>Automatic Transfer Switch</option>
                  <option>PDU - 120V</option>
                  <option>PDU - 208V</option>
                  <option>PDU - 3 Phase</option>
                  <option>Symmetra</option>
                </select>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1  px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  Arista
                  <option> Arista</option>
                  <option>7048</option>
                  <option>7050</option>
                  <option>7050SX</option>
                  <option>7050TX</option>
                  <option>7050Q</option>
                  <option>7050X3</option>
                  <option>7060X</option>
                  <option>7100</option>
                  <option>7150</option>
                  <option>7160</option>
                  <option>7170</option>
                  <option>7250QX</option>
                  <option>7260X </option>
                  <option>7280E</option>
                  <option>7280R</option>
                  <option>7300X</option>
                  <option>7320X</option>
                  <option>7368X4</option>
                  <option>7500</option>
                  <option>7500R</option>
                  <option>Arista Transceiver </option>
                </select>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  Aruba
                  <option> Aruba</option>
                  <option> 2530</option>
                  <option>2540</option>
                  <option>2920</option>
                  <option>2930F</option>
                  <option> 2930M</option>
                  <option>3810</option>
                  <option> 5400R zl2</option>
                  <option> 7200</option>
                  <option> 7220</option>
                  <option>8320</option>
                  <option> CX 8325</option>
                  <option>s1500</option>
                  <option>s3500</option>
                  <option>X371</option>
                  <option>Transceivers</option>
                  <option>Wireless AP</option>
                </select>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  Brocade
                  <option>Brocade</option>
                  <option>300 SAN Switch</option>
                  <option>5100 SAN Switch</option>
                  <option>5300 SAN Switch</option>
                  <option>6500 SAN Switch</option>
                  <option>8000 SAN Switch</option>
                  <option>BigIron RX</option>
                  <option>FastIron Edge X</option>
                  <option>FastIron GS</option>
                  <option>FastIron SX</option>
                  <option>FCX</option>
                  <option>ICX</option>
                  <option>MLX</option>
                  <option>NetIron CER</option>
                  <option>NetIron CES</option>
                  <option>NetIron XMR</option>
                  <option>ServerIron</option>
                  <option>TurboIron</option>
                  <option>VDX Switches</option>
                  <option>Optical Transceivers</option>
                </select>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  Cisco
                  <option>Cisco </option>
                  <option>Catalyst Switches</option>
                  <option>Nexus Switches</option>
                  <option>Industrial Ethernet Switches</option>
                  <option>MDS Storage Switches</option>
                  <option>ME Ethernet Access</option>
                  <option>Small Business Switches</option>
                  <option>Firewalls</option>
                  <option>Routers</option>
                  <option>Transceivers</option>
                  <option>VoIP Phones</option>
                  <option>Wireless</option>
                  <option>UCS Servers</option>
                  <option>Cisco Rack Mount Brackets</option>
                </select>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  Cisco Meraki
                  <option>Meraki Firewalls</option>
                  <option>Meraki Switches</option>
                  <option>Meraki Wireless</option>
                </select>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  Dell
                  <option>Dell</option>
                  <option>PowerSwitch</option>
                  <option>PowerConnect</option>
                  <option>X-Series</option>
                  <option>PowerEdge</option>
                  <option>EqualLogic</option>
                  <option>Dell Power Cord</option>
                  <option>EMC Storage</option>
                  <option>Transceivers</option>
                </select>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  Extreme
                  <option>Extreme</option>
                  <option>X430</option>
                  <option>X450a</option>
                  <option>X440</option>
                  <option>X440-G2</option>
                  <option>X450E</option>
                  <option>X450-G2</option>
                  <option>X460</option>
                  <option>X460-G2</option>
                  <option>X480</option>
                  <option>X620</option>
                  <option>X650</option>
                  <option>X670</option>
                  <option>X770</option>
                  <option>8800</option>
                  <option>8900</option>
                  <option>ERS 4900</option>
                  <option>MLX</option>
                  <option>SLX 9030</option>
                  <option>SLX 9140</option>
                  <option>SLX 9240</option>
                  <option>SLX 9540</option>
                  <option>VDX</option>
                  <option>VSP4000</option>
                  <option>VSP4900</option>
                  <option>VSP7400</option>
                  <option>VSP8200</option>
                  <option>Altitude 4600</option>
                  <option>Extreme Transceiver</option>
                </select>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  HPE
                  <option>HPE</option>
                  <option>HPE Switches</option>
                  <option>HPE Transceivers</option>
                  <option>Proliant</option>
                </select>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  Intel
                  <option>Intel</option>
                  <option>Xeon E3 V3</option>
                  <option>Xeon E3 V5</option>
                  <option>Xeon E5 V2</option>
                  <option>Xeon E5 V3</option>
                  <option>Xeon E5 V4</option>
                  <option>Xeon E7 V2</option>
                  <option>Xeon E7 V3</option>
                  <option>Xeon E7 V4</option>
                  <option>Network Adapters</option>
                </select>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  Juniper
                  <option>Juniper</option>
                  <option>E Series</option>
                  <option>EX Switches</option>
                  <option>M Edge Routers</option>
                  <option>MX Routers</option>
                  <option>Pulse</option>
                  <option>QFX Switches</option>
                  <option>PTX Routers</option>
                  <option>SRX Gateways</option>
                  <option>SSG Gateways</option>
                  <option>STRM</option>
                  <option>T Core Routers</option>
                  <option>Transceivers</option>
                </select>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <a className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  Palo Alto
                </a>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  Ruckus
                  <option>Ruckus</option>
                  <option>ICX6430</option>
                  <option>ICX6450</option>
                  <option>ICX6610</option>
                  <option>ICX7150</option>
                  <option>ICX7250</option>
                  <option>ICX7450</option>
                  <option>ICX7650</option>
                  <option>ICX7750</option>
                  <option>ICX7850</option>
                  <option>Ruckus Wireless</option>
                </select>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  SonicWALL
                  <option>SonicWALL</option>
                  <option>NSA</option>
                  <option>SuperMassive</option>
                  <option>TZ SOHO</option>
                  <option>SonicPoint</option>
                  <option>Secure Remote Access</option>
                  <option>Rack Mount Brackets</option>
                  <option>Transceivers</option>
                </select>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  Other
                  <option>Other</option>
                  <option>Allied Telesis</option>
                  <option>Avaya Switches</option>
                  <option>Cyclades</option>
                  <option>Dialogic</option>
                  <option>Enterasys</option>
                  <option>Finisar</option>
                  <option>F5</option>
                  <option>IBM</option>
                  <option>Supermicro</option>
                  <option>Tripp Lite</option>
                </select>
              </a>
            </li>
            <a className="flex items-center text-sm font-normal text-gray-500 rounded-lg">
              <a className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-green  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                Consulting Services
              </a>
            </a>
          </ul>
        </div>
      </aside>

      {/* --------------------------Hero Section------------------------------------------------------ */}

      <div className="slide  ">
        <div className=" mt-[20%]  md:mt-[10%] w-[90%] pl-[10%]  absolute my-auto mx-auto ">
          <div class="relative  flex md:w-[36rem] 2xl:w-[54rem]  items-center">
            <div class=" w-5 mt-1 md:w-10  2xl:w-32 border-t border-[3px] border-green"></div>
            <span class="flex-shrink px-2 text-md  font-light  mx-auto  text-white 2xl:text-4xl  md:text-2xl">
              Networks Are Everywhere
            </span>
            <div class="flex-grow  mt-2 border-t  border-[3px] border-green"></div>
          </div>

          <h1 className="mt-3  md:w-[42rem] 2xl:leading-[3rem] 2xl:mt-5  2xl:w-[60rem] 2xl:text-4xl text-xl  font-semibold absolute  mx-auto  text-white  md:text-2xl ">
            {" "}
            NetworkTigers Support Network Managers Across All Networks
            <span className="text-white ">
              {" "}
              With Quality Switches, Routers, Firewalls And PDU's.
            </span>
            <div className="mt-7 ">
              <a
                href="https://www.networktigers.com/pages/all-products"
                className="relative inline-flex items-center justify-start px-3 py-3 overflow-hidden w-28 2xl:w-40 2xl:h-16 font-medium transition-all bg-green rounded hover:bg-green group"
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0" />
                <span className="relative w-full text-left text-white text-center transition-colors duration-300 ease-in-out font-semibold  2xl:text-xl text-sm group-hover:text-black">
                  Explore More
                </span>
              </a>
            </div>
          </h1>
        </div>  
        <div className=" grid items-end   flex place-items-center ">
          <div className=" text-center  w-screen  text-white absolute bg-gray-500 py-2 text-xs  ">
            
            
            Since 1996, NetworkTigers has been providing quality to Netowrk
            Managers around the world.
          </div>
          <img
            className=" w-screen h-[25rem] md:h-screen"
            src={images[currentIndex]}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;

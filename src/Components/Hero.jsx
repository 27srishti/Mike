import React from "react";
// import One from "../Images/One.jpg"
// import Two from "../Images/Two.jpeg"
// import Three from "../Images/Three.png"

const Hero = () => {
  return (
    <div className="flex grid-cols-2  ">
      {/* ------------------sidebar------------------------------ */}

      <aside
        id="separator-sidebar"
        className=" z-40  hidden cursor-pointer  lg:flex lg:block transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-screen w-54 px-3 py-4  overflow-y-auto bg-gray-50 ">
          <ul className="space-y-2 hover:text-green-400 cursor-pointer">
            <li>
              <a
                href="#"
                className="flex text-center items-center p-2 text-base font-normal text-lime-600 rounded-lg  hover:bg-gray-100 d"
              >
                <span className=" w-full h-9 hover:font-semibold text-lime-600 border-gray-400 border-b">
                  Search By Make
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600 border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
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
                <select className="flex-1  px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
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
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
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
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
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
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
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
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
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
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
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
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
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
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
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
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
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
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
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
                <a className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                  Palo Alto
                </a>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-sm font-normal text-gray-500 rounded-lg"
              >
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
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
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
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
                <select className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
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
              <a className="flex-1 px-3 p-0 m-0 hover:font-semibold hover:text-lime-600  border-none focus:ring-0 bg-gray-50 border-0 whitespace-nowrap">
                Consulting Services
              </a>
            </a>
          </ul>
        </div>
      </aside>

      {/* --------------------------Hero Section------------------------------------------------------ */}

      <div className="">
        <section className="img-slider overflow-hidden max-h-[25rem]   md:max-h-[100rem] ">
          <div className="slider-container  h-[25rem] md:h-auto rounded-lg  ">
            <div className="slide ">
              <div className=" mt-[20%] md:mt-[10%] w-[90%] pl-[10%]  absolute my-auto mx-auto ">
                <div class="relative  flex md:w-[36rem]  items-center">
                  <div class=" w-5 mt-1 md:w-10 border-t border-[3px] border-lime-400"></div>
                  <span class="flex-shrink px-1 text-md    mx-auto  text-white  md:text-2xl">
                    Networks are Everywhere
                  </span>
                  <div class="flex-grow  mt-1 border-t border-[3px] border-lime-400"></div>
                </div>

                <h1 className="mt-4  md:w-[42rem]  text-xl  font-semibold absolute  mx-auto  text-white  md:text-2xl ">
                  {" "}
                  NetworkTigers Support Network Managers Across All Networks
                  <span className="text-lime-400 ">
                    {" "}
                    With Quality Switches, Routers, Firewalls And PDU's.
                  </span>
                  <div className="mt-5 ">
                    <a
                      href="https://www.networktigers.com/pages/all-products"
                      className=" text-center mt-5    cursor-pointer font-semibold hover:text-black  bg-lime-600  w-28 text-sm text-white  px-3 py-3 rounded-md"
                    >
                      Explore More
                    </a>
                  </div>
                </h1>
              </div>

              <img src="https://img.freepik.com/free-photo/beautiful-cloudscape-sunset-evening-dawn_53876-16471.jpg?w=1380&t=st=1677230495~exp=1677231095~hmac=6443cc49d9b0b49beca3e7023d6c2b0757ddd8ade129a197a919abb0ed01a0ee"></img>
              {/* <img src={One} /> */}
            </div>
            <div className="slide">
              <div className=" mt-[20%] md:mt-[10%] w-[90%] pl-[10%]  absolute my-auto mx-auto ">
                <div class="relative  flex md:w-[36rem]  items-center">
                  <div class=" w-5 mt-1 md:w-10 border-t border-[3px] border-lime-400"></div>
                  <span class="flex-shrink px-1 text-md    mx-auto  text-white  md:text-2xl">
                    Networks are Everywhere
                  </span>
                  <div class="flex-grow  mt-1 border-t border-[3px] border-lime-400"></div>
                </div>

                <h1 className="mt-4  md:w-[42rem]  text-xl  font-semibold absolute  mx-auto  text-white  md:text-2xl ">
                  {" "}
                  NetworkTigers Support Network Managers Across All Networks
                  <span className="text-lime-400 ">
                    {" "}
                    With Quality Switches, Routers, Firewalls And PDU's.
                  </span>
                  <div className="mt-5 ">
                    <a
                      href="https://www.networktigers.com/pages/all-products"
                      className=" text-center mt-5    cursor-pointer font-semibold hover:text-black  bg-lime-600  w-28 text-sm text-white  px-3 py-3 rounded-md"
                    >
                      Explore More
                    </a>
                  </div>
                </h1>
              </div>
              <img src="https://c1.wallpaperflare.com/preview/430/884/964/tunnel-dark-passage.jpg"></img>
              {/* <img src={Two}/> */}
            </div>
            <div className="slide">
              <div className=" mt-[20%] md:mt-[10%] w-[90%] pl-[10%]  absolute my-auto mx-auto ">
                <div class="relative  flex md:w-[36rem]  items-center">
                  <div class=" w-5 mt-1 md:w-10 border-t border-[3px] border-lime-400"></div>
                  <span class="flex-shrink px-1 text-md    mx-auto  text-white  md:text-2xl">
                    Networks are Everywhere
                  </span>
                  <div class="flex-grow  mt-1 border-t border-[3px] border-lime-400"></div>
                </div>

                <h1 className="mt-4  md:w-[42rem]  text-xl  font-semibold absolute  mx-auto  text-white  md:text-2xl ">
                  {" "}
                  NetworkTigers Support Network Managers Across All Networks
                  <span className="text-lime-400 ">
                    {" "}
                    With Quality Switches, Routers, Firewalls And PDU's.
                  </span>
                  <div className="mt-5 ">
                    <a
                      href="https://www.networktigers.com/pages/all-products"
                      className=" text-center mt-5    cursor-pointer font-semibold hover:text-black  bg-lime-600  w-28 text-sm text-white  px-3 py-3 rounded-md"
                    >
                      Explore More
                    </a>
                  </div>
                </h1>
              </div>
              <img src="https://img.freepik.com/free-photo/beautiful-shot-small-house-water-with-trees-background-black-white_181624-5147.jpg?w=900&t=st=1677230414~exp=1677231014~hmac=c657a2c98f06f2c92947f73f0e3795954aec45dc63bcc2e4c03c62ce1a22fcad"></img>
              {/* <img src={Three} /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;

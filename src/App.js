import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import "tw-elements";

function App() {
  return (
    <div className="App   ">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
{/* <div className=" mt-[10%] sm:mt-14  md:mt-[10%] w-[90%] pl-[10%]  absolute my-auto mx-auto ">
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
        </div> */}
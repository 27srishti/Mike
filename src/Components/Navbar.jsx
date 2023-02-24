import React from "react";
import Logo from "../Images/Logo.png";

const Navbar = () => {
  return (
    <section>
      <div className="  text-sm text-center  bg-gray-700 text-white justify-between flex grid-cols-2 mx-auto bg-opacity-90 h-7">
        <ui className="flex grid-cols-4 ">
          <div className=" px-10 flex items-center bg-green">Store</div>
          <a
            href="https://www.networktigers.com/blogs/all-articles"
            className=" border-l flex items-center bg-gray-500 px-10"
          >
            Blog
          </a>
          <a
            href="https://news.networktigers.com/"
            className=" border-l flex items-center bg-gray-500 px-10"
          >
            News
          </a>
        </ui>
        <ui className="flex grid-cols-4 hidden lg:flex lg:block">
          <div className=" px-10 flex items-center bg-gray-500">
            <img className="w-5  mr-2" src="data:image/png;base64,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"></img>
            1- 800 - 430 - 6950
          </div>
          <a
            href="https://www.networktigers.com/pages/ask-for-quote/"
            className=" cursor-pointer border-l flex items-center bg-amber-600 px-10"
          >
            Ask For Quote
          </a>
        </ui>
      </div>
      {/* -----------------------------------TopNav-End---------------------------------------------------------- */}
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-green  w-full z-20  border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a
            href="https://www.networktigers.com/"
            className="flex items-center"
          >
            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="" />
          </a>

          <div className="flex md:order-2 mx-2 md:mx-0">
            <a
              href="https://www.networktigers.com/account/login"
              class="relative rounded px-5 py-2.5 text-sm  overflow-hidden group bg-green relative hover:bg-gradient-to-r hover:from-green hover:to-green text-white hover:ring-2 hover:ring-offset-2 hover:ring-green transition-all ease-out duration-300"
            >
              <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span class="relative">Log-In</span>
            </a>
            <a href="https://www.networktigers.com/cart">
              <img
                className=" cursor-pointer hover: text-gray-200 mx-5 hidden lg:block lg:flex md:w-10 opacity-60  "
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJUlEQVR4nO2Yz0sVURTHP6/iEUaJuJQg3ISQpFCJLVzZqhbiIghc2Kq/oJUREVIvonARtDF3BUaRtAlSoV1BtWkpREQ9RQzbiAbSe3HhBl8uz3Lu3LnjwHzgwJt5c77n3Llzf5wLJSUlJXuFW8A20LS2AbwFLgIVCsCGJO9ajQL2QNOxsxSMw8AzacA0BWRAGrC2wzMzwO9/9FwIWweeA8eSNqDNETLXSnvGiTcd+wEMJm3EmggM5NQDTbEPSWfFx+J8hXw44bzIRBPKVXF8SH7MSh5mbdo1w+L4jvx4L3kMJXHsFMdNYD/xOQBs2RwaQEdSgW/SiB7i0yvxv/gIvBSBS8RnTOK/8BG4KQJ3iM9diX/DR2BUBF4Tn3mJP+Ij0O2shrFZlfiJtxPYlW9dRLqIR5fE/ZmmNnkjQheIx3mJa3LwZkqErhGPCYlrcvBmXIRMnRCLpxL3chqhkyL0mXgsSdz+NEJV4Jcs56YWyJpDslU35e7BtIIf5W2cI3uGJN6nEIL3RHAxwsZuTuI9CCF43Dm5WABO291iSI4CTySO+WT7QolfD1gergCnRHvS3ms4z6WaPl0qthF/B3Rau291j7T4r2GrwEw+VbM/egR8/c+B2G57oAK8sve37O8zFJAOYF/eSRSOqi10loG6PQyuZugXnJrniXbN0y84yzsM0Kz8glNvkcj3DP2C0+pTuJ2hX3CqNpm6xyCuefiVlJSUsDf4Axp2YWimEJkBAAAAAElFTkSuQmCC"
              ></img>
            </a>
          </div>
          <div className=" md:w-full flex justify-between  h-[100%] hidden max-w-xs  md:max-w-xl xl:max-w-3xl 2xl:max-w-5xl  border-[0.5px] border-green border-opacity-50 rounded-sm  xl:flex items-center">
            <input
              className=" border-none focus:ring-0 w-full border-none font-normal text-sm pl-6"
              type="text"
              placeholder="Find what you need..."
            />
            <button className=" bg-green w-24 h-10  text-white ">
              {" "}
              Search
            </button>
            {/* <svg
            className="ml-auto h-5 px-5   "
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              className=""
              fill="currentColor"
              d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
            />
          </svg> */}
          </div>
        </div>
      </nav>
      {/* -------------------------------------------MiddleNav-End---------------------------------------------- */}
      <nav className="bg-green text-white text-xs sm:text-sm md:text-sm  lg:text-sm font-normal ">
        <div className="container flex items-center text-center  justify-center py-5 mx-auto  capitalize ">
          <a
            href="#"
            className="border-b-2 border-transparent   hover:text-gray-900  hover:border-gray-700 mx-3 sm:mx-6"
          >
            Home
          </a>
          <a
            href="https://www.networktigers.com/pages/all-products"
            className="border-b-2 border-transparent hover:text-gray-900  hover:border-gray-700 mx-3 sm:mx-6"
          >
            All Products
          </a>
          <a
            href="https://www.networktigers.com/pages/terms-of-sale"
            className="border-b-2 hidden lg:flex lg:block border-transparent text-center  hover:text-gray-900  hover:border-gray-700 mx-3 sm:mx-6"
          >
            {" "}
            Terms Of sale
          </a>
          <a
            href="https://www.networktigers.com/pages/terms-of-shipping"
            className="border-b-2 border-transparent hidden lg:flex lg:block  hover:text-gray-900  hover:border-gray-700 mx-3 sm:mx-6"
          >
            Shipping Policy
          </a>
          <a
            href="https://www.networktigers.com/pages/about-us"
            className="border-b-2 border-transparent  hover:text-gray-900  hover:border-gray-700 mx-3 sm:mx-6"
          >
            About Us
          </a>{" "}
          <a
            href="https://www.networktigers.com/pages/contact-us"
            className="border-b-2 border-transparent  hover:text-gray-900  hover:border-gray-700 mx-3 sm:mx-6"
          >
            Contact Us
          </a>{" "}
          <a
            href="https://www.networktigers.com/pages/faq"
            className="border-b-2 border-transparent hidden lg:flex lg:block  hover:text-gray-900  hover:border-gray-700 mx-3 sm:mx-6"
          >
            FAQ's
          </a>
          <a
            href="https://www.networktigers.com/pages/newsletter"
            className="border-b-2 border-transparent hidden lg:flex lg:block  hover:text-gray-900  hover:border-gray-700 mx-3 sm:mx-6"
          >
            Newsletter
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

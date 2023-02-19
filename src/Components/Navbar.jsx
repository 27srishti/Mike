import React from "react";
import Logo from "../Images/Logo.png";

const Navbar = () => {
  return (
    <section>
      <div className="  text-sm text-center  bg-gray-700 text-white justify-between flex grid-cols-2 mx-auto bg-opacity-90 h-7">
        <ui className="flex grid-cols-4 ">
          <div className=" px-10 flex items-center bg-lime-600">Store</div>
          <a href="https://www.networktigers.com/blogs/all-articles" className=" border-l flex items-center bg-gray-500 px-10">
            Blog
          </a>
          <a href="https://news.networktigers.com/" className=" border-l flex items-center bg-gray-500 px-10">
            News
          </a>
        </ui>
        <ui className="flex grid-cols-4 hidden lg:flex lg:block">
          <div className=" px-10 flex items-center bg-gray-500">
            1- 800 - 430 - 6950
          </div>
          <a href='https://www.networktigers.com/pages/ask-for-quote/' className=" cursor-pointer border-l flex items-center bg-amber-600 px-10">
            Ask For Quote
          </a>
        </ui>
      </div>
      {/* -----------------------------------TopNav-End---------------------------------------------------------- */}
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900  w-full z-20  border-b border-gray-200 dark:border-gray-600">
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
              class="relative rounded px-5 py-2.5 text-sm  overflow-hidden group bg-lime-600 relative hover:bg-gradient-to-r hover:from-lime-700 hover:to-lime-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-lime-400 transition-all ease-out duration-300"
            >
              <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span class="relative">Log-In</span>
            </a>
            <a href="https://www.networktigers.com/cart">
            <img
              className=" cursor-pointer mx-5 hidden lg:block lg:flex md:w-10 opacity-60  "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJUlEQVR4nO2Yz0sVURTHP6/iEUaJuJQg3ISQpFCJLVzZqhbiIghc2Kq/oJUREVIvonARtDF3BUaRtAlSoV1BtWkpREQ9RQzbiAbSe3HhBl8uz3Lu3LnjwHzgwJt5c77n3Llzf5wLJSUlJXuFW8A20LS2AbwFLgIVCsCGJO9ajQL2QNOxsxSMw8AzacA0BWRAGrC2wzMzwO9/9FwIWweeA8eSNqDNETLXSnvGiTcd+wEMJm3EmggM5NQDTbEPSWfFx+J8hXw44bzIRBPKVXF8SH7MSh5mbdo1w+L4jvx4L3kMJXHsFMdNYD/xOQBs2RwaQEdSgW/SiB7i0yvxv/gIvBSBS8RnTOK/8BG4KQJ3iM9diX/DR2BUBF4Tn3mJP+Ij0O2shrFZlfiJtxPYlW9dRLqIR5fE/ZmmNnkjQheIx3mJa3LwZkqErhGPCYlrcvBmXIRMnRCLpxL3chqhkyL0mXgsSdz+NEJV4Jcs56YWyJpDslU35e7BtIIf5W2cI3uGJN6nEIL3RHAxwsZuTuI9CCF43Dm5WABO291iSI4CTySO+WT7QolfD1gergCnRHvS3ms4z6WaPl0qthF/B3Rau291j7T4r2GrwEw+VbM/egR8/c+B2G57oAK8sve37O8zFJAOYF/eSRSOqi10loG6PQyuZugXnJrniXbN0y84yzsM0Kz8glNvkcj3DP2C0+pTuJ2hX3CqNpm6xyCuefiVlJSUsDf4Axp2YWimEJkBAAAAAElFTkSuQmCC"
            ></img></a>
          </div>
          <div className=" md:w-full flex justify-between  h-[100%] hidden max-w-xs  md:max-w-xl xl:max-w-3xl 2xl:max-w-5xl  border-[0.5px] border-gray-900 border-opacity-50 rounded-sm  xl:flex items-center">
            <input
              className=" border-none focus:ring-0 w-full border-none font-normal text-sm pl-6"
              type="text"
              placeholder="Find what you need..."
            />
            <button className=" bg-lime-600 w-24 h-10  text-white ">
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
      <nav className="bg-lime-600 text-white text-xs sm:text-sm md:text-sm  lg:text-sm font-normal ">
        <div className="container flex items-center text-center  justify-center py-5 mx-auto  capitalize ">
          <a
            href="#"
            className="border-b-2 border-transparent  hover:text-gray-900  hover:border-white mx-3 sm:mx-6"
          >
            Home
          </a>
          <a
            href="https://www.networktigers.com/pages/all-products"
            className="border-b-2 border-transparent hover:text-gray-900  hover:border-white mx-3 sm:mx-6"
          >
            All Products
          </a>
          <a
            href="https://www.networktigers.com/pages/terms-of-sale"
            className="border-b-2 hidden lg:flex lg:block border-transparent text-center hover:text-gray-900  hover:border-white mx-3 sm:mx-6"
          >
            {" "}
            Terms Of sale
          </a>
          <a
            href="https://www.networktigers.com/pages/terms-of-shipping"
            className="border-b-2 border-transparent hidden lg:flex lg:block hover:text-gray-900  hover:border-white mx-3 sm:mx-6"
          >
            Shipping Policy
          </a>
          <a
            href="https://www.networktigers.com/pages/about-us"
            className="border-b-2 border-transparent hover:text-gray-900  hover:border-white mx-3 sm:mx-6"
          >
            About Us
          </a>{" "}
          <a
            href="https://www.networktigers.com/pages/contact-us"
            className="border-b-2 border-transparent hover:text-gray-900  hover:border-white mx-3 sm:mx-6"
          >
            Contact Us
          </a>{" "}
          <a
            href="https://www.networktigers.com/pages/faq"
            className="border-b-2 border-transparent hidden lg:flex lg:block hover:text-gray-900  hover:border-white mx-3 sm:mx-6"
          >
            FAQ's
          </a>
          <a
            href="https://www.networktigers.com/pages/newsletter"
            className="border-b-2 border-transparent hidden lg:flex lg:block hover:text-gray-900  hover:border-white mx-3 sm:mx-6"
          >
            Newsletter
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

import React, { useState } from "react";
import logo from '../images/CHAWCAD.png';
import { Button } from "@material-tailwind/react";
import { Transition } from "@headlessui/react";
import {ArrowLongRightIcon} from "@heroicons/react/24/outline";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="font-pop">
        <div className="lg:mx-20 md:mx-10 mx-5 lg:my-10 my-5 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-24"
                  src={logo}
                  alt="Chawcad Logo"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className=" hover:font-bold hover:underline hover:decoration-2 hover:underline-offset-4 text-shawgreen px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    className="hover:font-bold hover:underline hover:decoration-2 hover:underline-offset-4 text-shawgreen px-3 py-2 rounded-md text-sm "
                  >
                    Features
                  </a>

                  <a
                    href="#"
                    className="hover:font-bold hover:underline hover:decoration-2 hover:underline-offset-4 text-shawgreen px-3 py-2 rounded-md text-sm "
                  >
                    About
                  </a>

                  <a
                    href="#"
                    className="hover:font-bold hover:underline hover:decoration-2 hover:underline-offset-4 text-shawgreen px-3 py-2 rounded-md text-sm "
                  >
                    Testimonials
                  </a>

                </div>
              </div>
            </div>
            {/* Left Buttons */}
            <div className="md:flex gap-4 hidden">
            <Button variant="outlined" className="flex items-center gap-2  font-thin text-sm px-3 py-2 bg-shawgreen hover:font-semibold text-white hover:animate-pulse rounded-lg">
                Open App
                <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
            </Button>

            <Button variant="outlined" className="border border-shawgreen font-normal text-sm px-3 py-2 hover:font-bold hover:animate-pulse text-shawgreen rounded-lg">Sign Up</Button>
            </div>

            {/* Mobile Menu */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-shawgreen inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-shawgreen hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-shawgreen hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Features
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-shawgreen hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-shawgreen hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Testimonial
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
import React from 'react';
import { Button } from '@material-tailwind/react';


function Footer() {
  return (
    <div className='font-pop'>
        <div className="bg-green-50 mt-10 px-10 lg:px-20">
            <div className="flex flex-col gap-4 sm:flex-row justify-between sm:items-center items-start">
                <div className="">
                    <p className='text-base lg:text-lg font-medium mt-8 text-shawgreen'>Join our newsletter</p>
                    <p className='text-sm lg:text-base font-normal text-shawgreen my-2'>We'll send you a nice letter once per week. No spam.</p>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <input type="text" placeholder='Enter your email' className='bg-white border border-shawgreen text-base lg:text-lg rounded-lg px-3 py-2' />
                    <Button variant="outlined" className="sm:mx-0 font-thin text-sm lg:text-base px-3 py-2 bg-shawgreen hover:font-semibold text-white">
                        Submit
                    </Button>
                </div>
            </div>

            <hr className='bg-shawgreen my-5 md:my-10' />

        <div className='w-full grid grid-row lg:grid-cols-6 grid-cols-2 md:grid-cols-3 text-center md:text-left  text-blue1 lg:gap-8 md:gap-6 gap-4 place-content-center '>
            <div className=''>
                <div className='text-shawgreen' >
                    <h3 className='uppercase font-bold text-lg pb-4'>Product</h3>
                    <p className='py-4 cursor-pointer'>Overview</p>
                    <p className='py-4 cursor-pointer'>Features</p>
                    <p className='py-4 cursor-pointer'>Solutions</p>
                    <p className='py-4 cursor-pointer'>Tutorials</p>
                    <p className='py-4 cursor-pointer'>Releases</p>
                </div>
            </div>

            <div className=''>
                <div className='text-shawgreen' >
                    <h3 className='uppercase font-bold text-lg pb-4'>Company</h3>
                    <p className='py-4 cursor-pointer'>About Us</p>
                    <p className='py-4 cursor-pointer'>Careers</p>
                    <p className='py-4 cursor-pointer'>News</p>
                    <p className='py-4 cursor-pointer'>Media Kits</p>
                    <p className='py-4 cursor-pointer'>Contact</p>
                </div>
            </div>

            <div className=''>
                <div className='text-shawgreen' >
                    <h3 className='uppercase font-bold text-lg pb-4'>Resources</h3>
                    <p className='py-4 cursor-pointer'>Blog</p>
                    <p className='py-2 cursor-pointer'>Newsletter</p>
                    <p className='py-2 cursor-pointer'>Events</p>
                    <p className='py-2 cursor-pointer'>Help Center</p>
                    <p className='py-2 cursor-pointer'>Tutorials</p>
                    <p className='py-4 cursor-pointer'>Support</p>
                </div>
            </div>

            <div className=''>
                <div className='text-shawgreen' >
                    <h3 className='uppercase font-bold text-lg pb-4'>Use Cases</h3>
                    <p className='py-2 cursor-pointer'>Startups</p>
                    <p className='py-2 cursor-pointer'>Enterprise</p>
                    <p className='py-2 cursor-pointer'>Restuarants</p>
                    <p className='py-2 cursor-pointer'>Marketplaces</p>
                    <p className='py-4 cursor-pointer'>Ecommerce</p>
                </div>
            </div>

            <div className=''>
                <div className='text-shawgreen' >
                    <h3 className='uppercase font-bold text-lg pb-4'>Social</h3>
                    <p className='py-2 cursor-pointer'>Twitter</p>
                    <p className='py-2 cursor-pointer'>Facebook</p>
                    <p className='py-2 cursor-pointer'>Instagram</p>
                </div>
            </div>

            <div className=''>
                <div className='text-shawgreen' >
                    <h3 className='uppercase font-bold text-lg pb-4'>Legal</h3>
                    <p className='py-2 cursor-pointer'>Terms</p>
                    <p className='py-2 cursor-pointer'>Privacy</p>
                    <p className='py-2 cursor-pointer'>Cookies</p>
                    <p className='py-2 cursor-pointer'>Licences</p>
                    <p className='py-2 cursor-pointer'>Setting</p>
                    <p className='py-4 cursor-pointer'>Contact</p>
                </div>
            </div>

        </div>

        <hr className='bg-shawgreen my-5 md:my-10' />

        <p className='text-center text-shawgreen pb-5 text-lg'>&copy; 2023 Chawcad. All RIghts Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
import React from 'react';
import { Button } from '@material-tailwind/react';
import { ArrowLongRightIcon, CameraIcon, PaperClipIcon, WifiIcon, BellAlertIcon, Battery100Icon, ChartBarIcon, EyeSlashIcon, UserIcon, QrCodeIcon, PlusCircleIcon, ShareIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import lady from '../images/lady.png';
import catalog from '../images/Catalog.png';
import circoole from '../images/Circooles.png';
import layer from '../images/Layers.png';
import quotient from '../images/Quotient.png';
import sisyphus from '../images/Sisyphus.png';
import myPhoto from '../images/myPhoto.jpg'

function Hero() {
  return (
    <div className='font-pop'>
        <div className='lg:mx-20 md:mx-10 mx-5 lg:my-10 my-5 -z-10 font-pop'>
           <div className="bg-green-50 rounded-3xl shadow-lg px-12 py-10 relative">
           <div className="sm:flex-row flex flex-col items-center justify-between md:gap-4 sm:gap-2 space-y-4">
              <div className="text-center sm:text-left">
                <h1 className='md:text-3xl lg:text-4xl text-2xl text-shawgreen font-medium'>Revolunize Your Dining <br/> Experience with <br/> Chawcad's Convenient <br/> Payment System!</h1>
                <p className='py-4 text-sm text-shawgreen'>Pay for your mean instantly by scanning the QR code at your table with Chawcad. <br/>No cash or cards needed, no more waiting for the check or flagging down a server.</p>
                <Button variant="outlined" className="flex items-center gap-2 mx-auto sm:mx-0 font-thin text-sm px-3 py-2 bg-shawgreen hover:font-semibold text-white hover:animate-pulse rounded-lg">
                Open App
                <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
            </Button>
              </div>

              <div className='relative z-40' > {/*For the absolute circle */}
              {/* For Desktop */}
              <div className="flex items-center justify-center ">
                <div className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] border-[1.5px] border-green-900 border-opacity-25 rounded-full flex items-center justify-center">
                  <div className="lg:w-[330px] lg:h-[330px] w-[230px] h-[230px] border-[1.5px] border-green-900 border-opacity-25 rounded-full flex items-center justify-center">
                    <div className="lg:w-[260px] lg:h-[270px] w-[160px] h-[160px] border-[1.5px] border-green-900 border-opacity-25 rounded-full flex items-center justify-center">
                    <div className="lg:w-[190px] lg:h-[190px] w-[90px] h-[90px] border-[1.5px] border-green-900 border-opacity-25 rounded-full flex items-center justify-center">
                    <div className="lg:w-[120px] lg:h-[120px] w-[20px] h-[20px] border-[1.5px] border-green-900 border-opacity-25 rounded-full flex items-center justify-center">
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
          </div>

          <div className="inline-flex justify-center items-center bg-shawgreen gap-3 px-4 py-2 rounded-lg absolute top-10 left-0">
            <div className="bg-white lg:p-2 p-1 rounded-xl text-shawgreen">
              <CameraIcon className='lg:h-6 lg:w-6 h-4 w-4'/>
            </div>
            <div className="">
              <p className='text-white lg:text-sm text-xs '>Swift and seamless <br /> transfer</p>
            </div>
          </div>

          <div className="inline-flex justify-center items-center bg-white gap-3 px-4 py-2 rounded-lg absolute bottom-24 lg:right-0 -right-3 ">
            <div className="bg-shawgreen bg-opacity-25 lg:p-2 p-1 rounded-xl text-shawgreen ">
              <PaperClipIcon className='lg:h-6 lg:w-6 h-4 w-4'/>
            </div>
            <div className="">
              <p className='text-shawgreen lg:text-sm text-xs '>Pay bills and many <br /> more</p>
            </div>
          </div>

          <div className="inline-flex justify-center items-center bg-white gap-3 px-4 py-2 rounded-lg absolute bottom-0 left-0">
            <div className="bg-shawgreen bg-opacity-25 lg:p-2 p-1 rounded-xl text-shawgreen ">
              <WifiIcon className='lg:h-6 lg:w-6 h-4 w-4'/>
            </div>
            <div className="">
              <p className='text-shawgreen lg:text-sm text-xs '>Offline and Online <br /> Payment</p>
            </div>
          </div>

          <div className='h-10 w-10 absolute -left-2 top-28 bg-green-400 bg-opacity-50 rounded-full'></div>
          <div className='h-10 w-10 absolute left-2 bottom-20 bg-green-600 bg-opacity-50 rounded-full'></div>
          <div className='h-10 w-10 absolute -right-3 bottom-48 bg-green-950 bg-opacity-50 rounded-full'></div>
          </div>
            </div>

            <img className='absolute lg:bottom-0 lg:right-10 md:bottom-10 md:right-12 sm:bottom-7 sm:right-0 bottom-10 right-16 z-30
            w-1/2  md:w-1/3' src={lady} alt="" />
           </div>

           <div className="flex justify-center items-center my-5 gap-2">
              <div className='h-2 w-10 bg-shawgreen rounded-full'></div>
              <div className='h-2 w-2 bg-shawgreen bg-opacity-25 rounded-full'></div>
              <div className='h-2 w-2 bg-shawgreen bg-opacity-25 rounded-full'></div>
           </div>

           {/* For Mobile */}

           <div className="text-center my-16">
            <p className=" text-shawgreen text-opacity-75 text-sm">Join 4,000+ companies already growing</p>

            <div className="flex justify-center items-center sm:gap-8 gap-16 my-5">
              <div className="sm:flex justify-center items-center block sm:gap-8 sm:space-y-0 space-y-4">
                <img className='w-20 h-6' src={layer} alt="" />
                <img className='w-20 h-6' src={sisyphus} alt="" />
                <img className='w-20 h-6' src={circoole} alt="" />
              </div>
              <div className="sm:flex block md:gap-8 sm:space-y-0 space-y-4 justify-center items-center">
                <img className='w-20 h-6' src={catalog} alt="" />
                <img className='w-20 h-6' src={quotient} alt="" />
                <img className='w-20 h-6' src={circoole} alt="" />
              </div>
            </div>
           </div>
        </div>

</div>
  )
}

export default Hero

// https://www.figma.com/file/f2pDmJ2fbW6fjHw0nX91g5/CHAWCAD?type=design&mode=design&t=MDwFAefOl4lZzTR9-0
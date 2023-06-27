import React from 'react';
import { Button } from '@material-tailwind/react';
import { ChevronRightIcon, ChartBarIcon, QrCodeIcon, PlusCircleIcon, ShareIcon, EyeSlashIcon, UserIcon, BellAlertIcon, WifiIcon, Battery100Icon } from '@heroicons/react/24/outline';
import myPhoto from "../images/myPhoto.jpg"

function Section() {
  return (
    <div className='font-pop container sm:mx-4 lg:mx-20'>
        <div class="flex flex-col sm:flex-row justify-between items-center">
        <div class="flex-1">
            <div className="mx-auto bg-green-50 rounded-2xl lg:h-[38rem] lg:w-[30rem] h-[38rem] w-[20rem] relative lg:my-30 my-10">
            <div className="bg-green-50 border-8 rounded-2xl border-gray-800 w-64 h-[40rem] lg:w-80 lg:h-[37.5rem] shadow-md absolute lg:-top-20 lg:left-20 -top-16 left-8 ">
       <div className="flex flex-col justify-between">
            <div className="p-3">
            <div className="flex justify-between mb-4">
            <div className="text-sm">9:41</div>
            <div className="flex items-center space-x-2">
          <ChartBarIcon className='w-4 h-4' />
          <WifiIcon className='w-4 h-4' />
          <Battery100Icon className='w-4 h-4' />
        </div>
      </div>

      <div className="flex justify-between items-center ">
    <div className="">
      <p className='text-xs font-semibold text-shawgreen'>Good Afternoon</p>
      <h3 className='text- font-bold text-shawgreen'>Hello Unwana</h3>
    </div>
    <div className="flex justify-center items-center space-x-2">
      <BellAlertIcon className='w-6 h-6' />
      <div className="flex items-center">
        <div className="relative">
          <img src={myPhoto} alt="Profile Picture" className="rounded-full w-12 h-12" />
          <div class="absolute bottom-0 right-0 bg-green-500 rounded-full w-3 h-3"></div>
        </div>
      </div>
    </div>
    </div>
    <div className="bg-white rounded-lg shawdow my-5 p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className='text-shawgreen'>Voucher Balance</p>
          <EyeSlashIcon className='w-4 h-4 text-shawgreen' />
        </div>
        <UserIcon className='w-5 h-5 text-shawgreen'  />
      </div>
      <p className='text-shawgreen text-lg font-semibold'>N5,000</p>
    </div>
    <div className="flex justify-between items-center py-4">
      <p className='text-sm'>Status: <span className='bg-green-200 text-shawgreen p-1 rounded text-sm'> Online</span></p>
      <p className='text-sm'>Points: <span className=' text-shawgreen text-sm'> 200pts</span></p>
    </div>

    <div className='mt-2'>
      <div className="flex items-center justify-between space-x-6 text-center">
        <div class="bg-white p-4 rounded-full">
          <QrCodeIcon className='w-6 h-6 text-shawgreen'  />
        </div>
        <div class="bg-white p-4 rounded-full">
          <PlusCircleIcon className='w-6 h-6 text-shawgreen'  />
        </div>
        <div class="bg-white p-4 rounded-full">
          <ShareIcon className='w-6 h-6 text-shawgreen'  />
        </div>
      </div>

      <div className="flex items-center justify-between space-x-3 my-1">
        <p className='text-sm'>Voucher Code</p>
        <p className='text-sm'>Top Up Voucher</p>
        <p className='text-sm'>Send</p>
      </div>
    </div>
  </div>
  <div className="">
            <div className="flex justify-center items-center bg-white rounded-lg shadow-md">
            <div className="mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-green-500 w-12 h-12 mx-auto mb-4">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm4.707-9.293a1 1 0 00-1.414-1.414L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l5-5z" clip-rule="evenodd" />
            </svg>
            <h2 className="text-base font-bold text-gray-800 mb-2 text-center px-2">Transaction Successful!</h2>
            <p className="text-gray-600 text-center mb-6 px-2">The receipient account is expected to be credited within 5 minutes.</p>
            <div className="">
                <Button className="w-full rounded-t-lg px-4 py-2 text-sm bg-shawgreen text-white  hover:bg-green-950 ">Done</Button>
            </div>
            </div>
    </div>
      </div>

    </div>
       </div>
            </div>

</div>
        <div class="flex-1 px-7 md:py-0">
            <h1 className='text-xl lg:text-2xl text-shawgreen text-medium'>Fast and Reliable Transfer</h1>
                <p className='my-4 text-shawgreen font-normal text-base'>Chawcad's payment system is also highly reliable, ensuring that payments are processed quickly and securely. The app is designed to work seamlessly with the restaurant's existing systems, allowing payments to be processed without any disruption to service. This ensures that customers can always pay for their meals quickly and easily, without any delays or glitches.</p>
                <Button variant="outlined-none" className="flex items-center gap-2 font-medium text-base lg:text-lg px-3 py-2 hover:font-semibold text-shawgreen ">
                            Learn more
                            <ChevronRightIcon strokeWidth={2} className="h-5 w-5" />
                        </Button>
    </div>
    </div>

    {/* Second */}
    <div class="flex flex-col-reverse sm:flex-row justify-between items-center">
    <div class="flex-1 p-7 md:py-0">
            <h1 className='text-xl lg:text-2xl text-shawgreen text-medium'>Splitting Bills Made Easy</h1>
                <p className='my-4 text-shawgreen font-normal text-base'>Chawcad also allows customers to split the bill with ease, making it perfect for groups of friends or colleagues who want to share the cost of their meal. Each person can pay their share directly from their own phone, saving time and avoiding any awkwardness.</p>
                <Button variant="outlined-none" className="flex items-center gap-2 font-medium text-base lg:text-lg px-3 py-2 hover:font-semibold text-shawgreen ">
                            Learn more
                            <ChevronRightIcon strokeWidth={2} className="h-5 w-5" />
                        </Button>
    </div>

        <div class="flex-1">
            <div className="mx-auto bg-green-50 rounded-2xl lg:h-[38rem] lg:w-[30rem] h-[38rem] w-[20rem] relative lg:my-30 mt-20">
            <div className="bg-green-50 border-8 rounded-2xl border-gray-800 w-64 h-[40rem] lg:w-80 lg:h-[39rem] shadow-md absolute lg:-top-20 lg:left-20 -top-16 left-8 ">
       <div className="flex flex-col justify-between">
            <div className="p-3">
            <div className="flex justify-between mb-4">
            <div className="text-sm">9:41</div>
            <div className="flex items-center space-x-2">
          <ChartBarIcon className='w-4 h-4' />
          <WifiIcon className='w-4 h-4' />
          <Battery100Icon className='w-4 h-4' />
        </div>
      </div>

      <div className="flex justify-between items-center ">
    <div className="">
      <p className='text-xs font-semibold text-shawgreen'>Good Afternoon</p>
      <h3 className='text- font-bold text-shawgreen'>Hello Unwana</h3>
    </div>
    <div className="flex justify-center items-center space-x-2">
      <BellAlertIcon className='w-6 h-6' />
      <div className="flex items-center">
        <div className="relative">
          <img src={myPhoto} alt="Profile Picture" className="rounded-full w-12 h-12" />
          <div class="absolute bottom-0 right-0 bg-green-500 rounded-full w-3 h-3"></div>
        </div>
      </div>
    </div>
    </div>
    <div className="bg-white rounded-lg shawdow my-5 p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className='text-shawgreen'>Voucher Balance</p>
          <EyeSlashIcon className='w-4 h-4 text-shawgreen' />
        </div>
        <UserIcon className='w-5 h-5 text-shawgreen'  />
      </div>
      <p className='text-shawgreen text-lg font-semibold'>N5,000</p>
    </div>
    <div className="flex justify-between items-center py-4">
      <p className='text-sm'>Status: <span className='bg-green-200 text-shawgreen p-1 rounded text-sm'> Online</span></p>
      <p className='text-sm'>Points: <span className=' text-shawgreen text-sm'> 200pts</span></p>
    </div>

    <div className='mt-2'>
      <div className="flex items-center justify-between space-x-6 text-center">
        <div class="bg-white p-4 rounded-full">
          <QrCodeIcon className='w-6 h-6 text-shawgreen'  />
        </div>
        <div class="bg-white p-4 rounded-full">
          <PlusCircleIcon className='w-6 h-6 text-shawgreen'  />
        </div>
        <div class="bg-white p-4 rounded-full">
          <ShareIcon className='w-6 h-6 text-shawgreen'  />
        </div>
      </div>

      <div className="flex items-center justify-between space-x-3 my-1">
        <p className='text-sm'>Voucher Code</p>
        <p className='text-sm'>Top Up Voucher</p>
        <p className='text-sm'>Send</p>
      </div>
    </div>
  </div>
  <div className="">
            <div className="bg-white rounded-lg shadow-md">
                <div className='p-4'>
                  <h3 className='text-normal text-shawgreen font-bold'>Send</h3>
                <p className=' text-shawgreen text-xs'>Transactions are swift and Fast</p>

                <div className='my-4 border border-shawgreen rounded-xl px-3'>
                <p className=' text-shawgreen text-xs py-1 font-bold'>Enter Chawcard's ID</p>
                <p className=' text-shawgreen text-xs pb-1'>3456 7543 9082 1289</p>
                </div>

                <div className=' border border-shawgreen rounded-xl px-3'>
                <p className=' text-shawgreen text-xs py-1 font-bold'>Account Name</p>
                <p className=' text-shawgreen text-xs pb-1'>Name</p>
                </div>
                </div>

            <div className="">
                <Button className="w-full rounded-t-lg px-4 py-3 text-sm bg-shawgreen text-white  hover:bg-green-950 ">Done</Button>
            </div>
            </div>
      </div>

    </div>
       </div>
            </div>

</div>

    </div>

    {/* Third */}
    <div class="flex flex-col sm:flex-row justify-between items-center">
        <div class="flex-1">
            <div className="mx-auto bg-green-50 rounded-2xl lg:h-[38rem] lg:w-[30rem] h-[38rem] w-[20rem] relative lg:my-40 mt-20">
            <div className="bg-green-50 border-8 rounded-2xl border-gray-800 w-64 h-[40rem] lg:w-80 lg:h-[37.5rem] shadow-md absolute lg:-top-20 lg:left-20 -top-16 left-8 ">
       <div className="flex flex-col justify-between">
            <div className="p-3">
            <div className="flex justify-between mb-4">
            <div className="text-sm">9:41</div>
            <div className="flex items-center space-x-2">
          <ChartBarIcon className='w-4 h-4' />
          <WifiIcon className='w-4 h-4' />
          <Battery100Icon className='w-4 h-4' />
        </div>
      </div>

      <div className="flex justify-between items-center ">
    <div className="">
      <p className='text-xs font-semibold text-shawgreen'>Good Afternoon</p>
      <h3 className='text- font-bold text-shawgreen'>Hello Unwana</h3>
    </div>
    <div className="flex justify-center items-center space-x-2">
      <BellAlertIcon className='w-6 h-6' />
      <div className="flex items-center">
        <div className="relative">
          <img src={myPhoto} alt="Profile Picture" className="rounded-full w-12 h-12" />
          <div class="absolute bottom-0 right-0 bg-green-500 rounded-full w-3 h-3"></div>
        </div>
      </div>
    </div>
    </div>
    <div className="bg-white rounded-lg shawdow my-5 p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className='text-shawgreen'>Voucher Balance</p>
          <EyeSlashIcon className='w-4 h-4 text-shawgreen' />
        </div>
        <UserIcon className='w-5 h-5 text-shawgreen'  />
      </div>
      <p className='text-shawgreen text-lg font-semibold'>N5,000</p>
    </div>
    <div className="flex justify-between items-center py-4">
      <p className='text-sm'>Status: <span className='bg-green-200 text-red-700 p-1 rounded text-sm'> Offline</span></p>
      <p className='text-sm'>Points: <span className=' text-shawgreen text-sm'> 200pts</span></p>
    </div>

    <div className='mt-2'>
      <div className="flex items-center justify-between space-x-6 text-center">
        <div class="bg-white p-4 rounded-full">
          <QrCodeIcon className='w-6 h-6 text-shawgreen'  />
        </div>
        <div class="bg-white p-4 rounded-full">
          <PlusCircleIcon className='w-6 h-6 text-shawgreen'  />
        </div>
        <div class="bg-white p-4 rounded-full">
          <ShareIcon className='w-6 h-6 text-shawgreen'  />
        </div>
      </div>

      <div className="flex items-center justify-between space-x-3 my-1">
        <p className='text-sm'>Voucher Code</p>
        <p className='text-sm'>Top Up Voucher</p>
        <p className='text-sm'>Send</p>
      </div>
    </div>
  </div>
  <div className="">
            <div className="flex justify-center items-center bg-white rounded-lg shadow-md">
            <div className="mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-green-500 w-12 h-12 mx-auto mb-4">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm4.707-9.293a1 1 0 00-1.414-1.414L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l5-5z" clip-rule="evenodd" />
            </svg>
            <h2 className="text-base font-bold text-gray-800 mb-2 text-center px-2">Transaction Successful!</h2>
            <p className="text-gray-600 text-center mb-6 px-2">The receipient account is expected to be credited within 5 minutes.</p>
            <div className="">
                <Button className="w-full rounded-t-lg px-4 py-2 text-sm bg-shawgreen text-white  hover:bg-green-950 ">Done</Button>
            </div>
            </div>
    </div>
      </div>

    </div>
       </div>
            </div>

</div>
        <div class="flex-1 p-7 md:py-0">
            <h1 className='text-xl lg:text-2xl text-shawgreen text-medium'>Pay Anytime, Anywhere with Chawcad's Offline Payment Feature!</h1>
                <p className='my-4 text-shawgreen font-normal text-base'>Chawcad's offline payment feature lets customers pay even without internet. Scan the QR code with the Chawcad app and store payment info locally offline. Payments will be securely transmitted once internet is restored. Enjoy hassle-free payment anytime, anywhere, even in areas with limited internet access.</p>
                <Button variant="outlined-none" className="flex items-center gap-2 font-medium text-base lg:text-lg px-3 py-2 hover:font-semibold text-shawgreen ">
                            Learn more
                            <ChevronRightIcon strokeWidth={2} className="h-5 w-5" />
                        </Button>
    </div>
    </div>

        </div>
  )
}

export default Section
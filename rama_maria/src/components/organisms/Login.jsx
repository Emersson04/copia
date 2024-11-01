import React from 'react';
import { LoginForm } from '../molecules/LoginForm';

export const Login = () => {
  return (
    <div className="flex items-center justify-between p-20 flex-col lg:flex-row w-full h-screen max-h-screen overflow-hidden bg-gray-100">



      {/* Right section with image gallery */}
      <div className="w-[50%]">
        <div className="container max-h-[90%]">
          <div className="-m-1 flex flex-wrap md:-m-2 scale-90">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="descarga (1).jpeg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="Healthiest and Nutritious Berries You Can Eat.jpeg"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="caficultor.jpg"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="descarga.jpeg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="Kona coffee cherries IV by Yves Rubin.jpeg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="descarga (2).jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Left section with form */}
    <div className='w-[50%] flex h-full items-center justify-center'>
    <div className="flex w-[400px] 2xl:w-[420px] h-[560px]  items-center justify-center">
        <div className="w-full 2xl:h-full px-8 pb-10 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col items-center">
            <img src="logoProyeccto-removebg.png" alt="Logo" className="w-60 2xl:w-72 2xl:h-72 h-60" />
            {/* <h2 className="text-3xl font-extrabold text-center text-gray-800">Maddac Coffee</h2> */}
          </div>

          <LoginForm />


        </div>
      </div>

    </div>
      
    </div>
  );
};

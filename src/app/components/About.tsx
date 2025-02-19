import React from "react";
import { ContactRound, IdCard } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative bg-[#F5F3EF] pt-10 pb-5 lg:py-15 overflow-hidden" id="about">
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 opacity-60 animate-pulse">
        <Image
          src="/circle-shape.png"
          alt="circle shape"
          width={96}
          height={96}
          className="animate-spin-slow"
        />
      </div>
      <div className="absolute bottom-20 right-10 w-20 h-20 opacity-60 animate-bounce">
        <Image
          src="/dot-shape.png"
          alt="dot shape"
          width={80}
          height={80}
        />
      </div>

      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="order-2 lg:order-1 flex items-center justify-center w-full h-[30rem] lg:w-1/2">
          <div className="relative w-full h-full max-w-2xl" data-aos="fade-right">
            <Image
              className="object-cover object-top w-full h-full rounded-md overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300"
              src="/e25dba74-4af8-4e81-a9f0-848f63aea7b1.jpg"
              alt="about me photo"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 border-2 border-[#cea96a] rounded-md -m-3 pointer-events-none" />
          </div>
        </div>

        <div className="order-1 lg:order-2 w-full lg:w-1/2 mb-10 lg:mb-0" data-aos="fade-left">
          <div className="lg:max-w-lg">
            <h2 className="text-xl text-[#cea96a] uppercase mb-2 font-medium tracking-wider">
              About Me
            </h2>
            <h1 className="text-4xl font-bold tracking-wide text-[#06213a] lg:text-5xl mb-4 relative">
              Akavin Panichpongsapak
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-[#cea96a]"></span>
            </h1>

            <div className="space-y-6 mt-8">
              <div className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-start gap-4">
                  <IdCard className="text-[#06213a]" width={40} height={40} strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-semibold text-[#06213a] capitalize mb-2">
                      Personal Info
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex gap-2">
                        <span className="font-semibold text-[#cea96a]">Birthday:</span>
                        <span>25/06/2003</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold text-[#cea96a]">Age:</span>
                        <span>21</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold text-[#cea96a]">Nationality:</span>
                        <span>Thai</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-semibold text-[#cea96a]">Religion:</span>
                        <span>Buddhist</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="transform hover:scale-105 transition-transform duration-300 bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-start gap-4">
                  <ContactRound className="text-[#06213a]" width={40} height={40} strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-semibold text-[#06213a] capitalize mb-2">
                      Contact
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="font-semibold text-[#cea96a]">Phone:</span>
                        <span>+65 93975434</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="font-semibold text-[#cea96a]">Email:</span>
                        <span>vinakavin16@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
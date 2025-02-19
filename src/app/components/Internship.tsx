import Image from "next/image";
import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function Internship() {


  const achievements = [
    "Gained hands-on experience in trade processes",
    "Developed strong problem-solving and adaptability skills",
    "Improved collaboration and efficiency in a fast-paced environment",
    "Served as a student ambassador at an industry event"
  ];

  return (
    <div className="bg-[#F5F3EF] relative overflow-hidden" id="internship">
      {/* Background decoration */}
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-blue-100 rounded-full opacity-50 animate-pulse delay-700"></div>
      
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center relative">
        <div 
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="lg:max-w-lg">
            <h1 
              className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-5xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Internship
            </h1>
            <p 
              className="mt-4 text-gray-600"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              I interned at a leading wholesale sourcing and distribution company for consumer goods, household goods, and more from Asia to West Africa.
            </p>
            <div className="mt-8 space-y-5">
              {achievements.map((achievement, index) => (
                <p 
                  key={index}
                  className="flex items-center -mx-2 text-gray-700 hover:transform hover:translate-x-2 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={800 + (index * 200)}
                >
                  <CheckCircle2 className="w-6 h-6 mx-2 text-blue-500 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }} />
                  <span className="mx-2">{achievement}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div 
          className="flex items-center justify-center w-full h-96 lg:w-1/2"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="relative group">
            {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div> */}
            <Image
              className="object-cover object-top w-full h-full max-w-2xl rounded-md relative transform transition-transform duration-500 group-hover:scale-105"
              src="/intern.png"
              alt="internship photo"
              width={700}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
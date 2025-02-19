import { Award, Package, Star, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Shopify() {
  return (
    <>
    <div className="bg-gradient-to-b from-[#06213a]/5 to-white py-10">
      <div 
        className="text-center mb-12"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r  bg-clip-text text-[#cea96a]">
          Milestone Achievement
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div 
          className="lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#06213a7c] via-[#cea96a] to-[#06213a6e] rounded-2xl opacity-20 blur-xl animate-pulse" />
            <Image
              src="/award.png"
              alt="Shopify achievement"
              width={600}
              height={600}
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2">
          <div 
            className="bg-white rounded-3xl p-8 lg:p-12 shadow border border-[#cea96a]/20 relative overflow-hidden"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#06213a]/10 to-[#cea96a]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-[#cea96a]/10 to-[#06213a]/10 rounded-full blur-3xl" />

            {/* Achievement Number */}
            <div 
              className="text-center mb-12"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="relative inline-block">
                <span className="absolute -inset-4 bg-gradient-to-r from-[#cea96a]/20 to-[#06213a]/20 blur-lg rounded-full animate-pulse" />
                <span className="relative font-bold text-7xl lg:text-8xl bg-gradient-to-r from-[#06213a] to-[#cea96a] bg-clip-text text-transparent">
                  10,000+
                </span>
              </div>
              <div 
                className="mt-4 text-2xl text-[#06213a]/80 font-medium"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Lifetime Orders
              </div>
            </div>

            {/* Message Content */}
            <div className="space-y-6 relative z-10">
              <p 
                className="text-lg leading-relaxed text-[#06213a]/80"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                You've reached a <span className="font-semibold text-[#cea96a]">pivotal moment</span> in your entrepreneurship journey. This milestone represents dedication, persistence, and growth.
              </p>

              <p 
                className="text-lg leading-relaxed text-[#06213a]/80"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Every order has been a stepping stone towards building something extraordinary. Your commitment to excellence has brought you here.
              </p>

              {/* Achievement Tags */}
              <div 
                className="flex flex-wrap gap-4 mt-8"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <span className="px-6 py-3 bg-gradient-to-r from-[#06213a]/5 to-[#cea96a]/5 text-[#06213a] rounded-full text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform border border-[#cea96a]/20">
                  <Star className="w-4 h-4 text-[#cea96a]" />
                  Elite Merchant
                </span>
                <span className="px-6 py-3 bg-gradient-to-r from-[#cea96a]/5 to-[#06213a]/5 text-[#06213a] rounded-full text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform border border-[#cea96a]/20">
                  <Package className="w-4 h-4 text-[#cea96a]" />
                  10K Achievement
                </span>
              </div>

              {/* Signature */}
              <div 
                className="text-center mt-12"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <p className="font-bold text-xl text-[#cea96a]">
                  Here's to 10x more
                </p>
                <p className="text-[#06213a]/60 mt-2">
                  We'll be with you every step of the way
                </p>
                <p className="italic text-[#06213a]/60 mt-1">
                  - Your friends at Shopify
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
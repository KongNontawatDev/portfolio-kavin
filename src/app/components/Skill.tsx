
import Container from "@/components/common/Container";
import Image from "next/image";
import React from "react";
import "aos/dist/aos.css";

export default function Skill() {


  const items = [
    { title: "E-commerce", image: "/icon/ecommerce.png" },
    { title: "Shopify", image: "/icon/shopify.png" },
    { title: "Facebook Ads", image: "/icon/facebook-ads.webp" },
    { title: "Store", image: "/icon/store.png" },
    { title: "Management", image: "/icon/management.png" },
    { title: "Video Editing", image: "/icon/video-editing.png" },
    { title: "TikTok Organic", image: "/icon/tiktok.png" },
    { title: "Graphic Design", image: "/icon/graphic.png" },
    { title: "Customer Service", image: "/icon/customer.png" },
    { title: "TikTok Ads", image: "/icon/tiktok-ads.png" },
  ];

  return (
    <section className="bg-white py-10 lg:py-16" id="skill">
      <Container>
        {/* Title with animation */}
        <h1
          className="text-3xl text-center mb-8 font-semibold capitalize text-gray-800"
          data-aos="fade-up"
        >
          My Skills
        </h1>

        {/* Skills Grid */}
        <div className="flex flex-wrap items-center justify-evenly lg:justify-center gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="shadow-lg rounded-xl bg-[#F5F3EF] p-6 w-[45%] md:w-1/3 lg:w-1/5 flex flex-col items-center transition-transform transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Image src={item.image} alt={item.title} width={50} height={50} />
              <h4 className="lg:text-lg font-medium mt-3">{item.title}</h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

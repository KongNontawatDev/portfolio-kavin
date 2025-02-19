"use client";

import Image from "next/image";
import LuvModal from "@/components/LuvModal";
import TiktokModal from "@/components/TiktokModal";
import VentaModal from "@/components/VentaModal";
import React, { useState, useEffect } from "react";
import AOS from 'aos';

const projects = [
  {
    id: "venta",
    title: "Venta Blocks E-commerce",
    description: "Building the future of e-commerce, block by block",
    image: "/venta-tag.png",
    modal: VentaModal,
  },
  {
    id: "luv",
    title: "LuvJewelry E-commerce",
    description: "Crafting digital experiences for luxury jewelry",
    image: "/luv-tag.png",
    modal: LuvModal,
  },
  {
    id: "tiktok",
    title: "Tiktok Affiliate",
    description: "Mastering social e-commerce and affiliate marketing",
    image: "/tiktok-tag.png",
    modal: TiktokModal,
  },
  // {
  //   id: "shopify",
  //   title: "Shopify Award",
  //   description: "Recognition for e-commerce excellence",
  //   image: "/shopify-award.png",
  //   modal: ShopifyModal,
  // },
];

export default function MyJourney() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#F5F3EF] to-white py-10 lg:py-15">
      <div className="container px-6 mx-auto">
        <div 
          className="max-w-2xl mx-auto text-center mb-10"
          data-aos="fade-up"
        >
          <h1 className="text-3xl font-bold text-primary capitalize lg:text-5xl mb-4">
					My Entrepreneurial Journey
          </h1>
          <p className="text-gray-600 text-lg">
            A collection of milestones that shaped my path in digital commerce
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-2 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, title, description, image, modal: ModalComponent }, index) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative"
              onMouseEnter={() => setHoveredProject(id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow transition-all duration-300 hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredProject === id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                    hoveredProject === id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="flex h-full items-center justify-center">
                      <button
                        onClick={() => setOpenModal(id)}
                        className="transform rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-transform hover:scale-105"
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {title}
                  </h2>
                  <p className="mt-2 text-gray-600">
                    {description}
                  </p>
                  
                </div>
              </div>
              <ModalComponent 
                isOpen={openModal === id} 
                onClose={() => setOpenModal(null)} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
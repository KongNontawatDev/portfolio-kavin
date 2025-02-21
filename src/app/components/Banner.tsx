import React from "react";
import Navbar from "./Navbar";
import Container from "@/components/common/Container";
import { ShoppingBag, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
	return (
		<div className="relative h-[850px] lg:h-[950px] overflow-hidden">
			<div
				style={{ backgroundImage: "url('/banner-bg.png')" }}
				className="h-full w-full bg-cover bg-center bg-no-repeat overflow-hidden"
			>
				<Navbar />
				<Container>
					<div className="items-center lg:flex">
						{/* Left Section */}
						<div 
							className="w-full lg:w-1/2 mt-8 lg:-mt-50"
							data-aos="fade-right"
							data-aos-delay="200"
						>
							<div className="lg:max-w-lg">
								<h1 
									className="text-4xl lg:text-6xl font-medium text-gray-800 uppercase"
									data-aos="fade-up"
									data-aos-delay="400"
								>
									Passion,
								</h1>
								<h1 
									className="text-5xl lg:text-8xl font-semibold text-gray-800 uppercase"
									data-aos="fade-up"
									data-aos-delay="600"
								>
									Perseverance,
									<br />
									<span 
										className="text-transparent text-stroke-1 uppercase animate-pulse"
										data-aos="fade-up"
										data-aos-delay="800"
									>
										Growth
									</span>
								</h1>

								<h2 
									className="my-4 text-xl font-medium text-gray-600"
									data-aos="fade-up"
									data-aos-delay="1000"
								>
									Started from Side Hustles to <b>Million $Dollar Success!</b>
								</h2>
								<div 
									className="flex items-center gap-5 justify-center lg:justify-start"
									data-aos="fade-up"
									data-aos-delay="1200"
								>
									<Link
										href={"https://theventashop.com/"}
										target="_blank"
										className="btn btn-primary lg:btn-xl hover:scale-105 transition-transform duration-300"
									>
										<Store className="me-2" /> Venta Blocks
									</Link>
									<Link
										href={"https://luvjewelryth.com/"}
										target="_blank"
										className="btn btn-secondary lg:btn-xl rounded-full hover:scale-105 transition-transform duration-300"
									>
										<ShoppingBag className="me-2" /> LuvJewelry
									</Link>
								</div>
							</div>
						</div>

						{/* Right Section - Image with Shopify Icons */}
						<div 
							className="flex items-end justify-center w-full mt-6 lg:mt-0 lg:w-1/2 relative"
							data-aos="fade-left"
							data-aos-delay="400"
						>
							{/* Main Banner Image */}
							<Image
								className="w-full h-auto lg:max-w-2xl z-10 hover:scale-105 transition-transform duration-300"
								src="/banner-thumb-02.png"
								alt="my avatar thumb"
								width={800}
								height={1080}
							/>

							{/* Floating Shopify Tag */}
							<Image
								className="absolute top-5 left-0 lg:top-10 w-48 h-24  lg:w-72 lg:h-36 object-contain animate-bounce z-20"
								src="/shopify-tag.png"
								alt="Shopify Tag"
								width={1280}
								height={800}
							/>

							{/* Rotating Shopify Bag */}
							<Image
								className="absolute top-28 right-5 lg:top-40 lg:right-16 w-36 h-32  lg:w-48 lg:h-32 object-contain animate-spin-slow z-20"
								src="/shopify-bag.png"
								alt="Shopify Bag"
								width={1200}
								height={800}
							/>

							{/* Background Shape */}
							<Image
								className="w-56 lg:w-72 absolute z-0 top-28 lg:top-48 animate-spin-slow"
								src="/square-shape-02.png"
								alt="shap bg"
								width={400}
								height={400}
							/>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}

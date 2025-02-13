import { ArrowRight } from "lucide-react";
import React from "react";

export default function MyJourney() {
	return (
		<>
			<section className="bg-[#F5F3EF] ">
				<div className="container px-6 py-10 mx-auto">
					<h1 className="text-2xl font-semibold text-center text-primary capitalize lg:text-4xl ">
						My Entrepreneurship Journey
					</h1>

					{/* <p className="mt-4 text-center text-gray-500 ">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
						quam voluptatibus
					</p> */}

					<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
						<div>
							<div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('/venta.png')]">
								<div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
									<h2 className="mt-4 text-xl font-semibold text-white capitalize">
									Venta Blocks E-commerce
									</h2>
									<p className="mt-2 flex items-center tracking-wider text-blue-400 uppercase ">
									View Detail <ArrowRight />
									</p>
								</div>
							</div>
							<h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">
							Venta Blocks E-commerce
							</h2>
							<p className="mt-2 text-xs flex items-center tracking-wider text-blue-500 uppercase ">
							View Detail <ArrowRight  size={14}/>
							</p>
						</div>

						<div>
							<div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('/luv-jewelry.png')]">
								<div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
									<h2 className="mt-4 text-xl font-semibold text-white capitalize">
										Luv Jewely Ecommerce
									</h2>
									<p className="mt-2 flex items-center tracking-wider text-blue-400 uppercase ">
									View Detail <ArrowRight />
									</p>
								</div>
							</div>
							<h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">
							Luv Jewely Ecommerce
							</h2>
							<p className="mt-2 text-xs flex items-center tracking-wider text-blue-500 uppercase ">
							View Detail  <ArrowRight  size={14}/>
							</p>
						</div>

						<div>
							<div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('/tiktok.png')]">
								<div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
									<h2 className="mt-4 text-xl font-semibold text-white capitalize">
										Tiktok Affiliate
									</h2>
									<p className="mt-2 flex items-center tracking-wider text-blue-400 uppercase ">
										View Detail <ArrowRight />
									</p>
								</div>
							</div>
							<h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize ">
							Tiktok Affiliate
							</h2>
							<p className="mt-2 text-xs flex items-center tracking-wider text-blue-500 uppercase ">
							View Detail <ArrowRight  size={14}/>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

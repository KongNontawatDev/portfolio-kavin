"use client";
import LuvModal from "@/components/LuvModal";
import TiktokModal from "@/components/TiktokModal";
import VentaModal from "@/components/VentaModal";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

export default function MyJourney() {
	const [ventaModalOpen, setVentaModalOpen] = useState(false);
	const [luvModalOpen, setLuvModalOpen] = useState(false);
	const [tiktokModalOpen, setTiktokModalOpen] = useState(false);

	return (
		<>
			<section className="bg-[#F5F3EF]">
				<div className="container px-6 py-10 mx-auto">
					<h1 className="text-2xl font-semibold text-center text-primary capitalize lg:text-4xl">
						My Entrepreneurship Journey
					</h1>

					<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
						<div>
							<div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('/venta.png')]">
								<div
									className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100"
									onClick={() => setVentaModalOpen(true)}
								>
									<h2 className="mt-4 text-xl font-semibold text-white capitalize">
										Venta Blocks E-commerce
									</h2>
									<p className="mt-2 flex items-center tracking-wider text-blue-400 uppercase">
										View Detail <ArrowRight />
									</p>
								</div>
							</div>
							<h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">
								Venta Blocks E-commerce
							</h2>
							<p
								className="mt-2 text-xs flex items-center tracking-wider text-blue-500 uppercase cursor-pointer"
								onClick={() => setVentaModalOpen(true)}
							>
								View Detail <ArrowRight size={14} />
							</p>
						</div>

						<div>
							<div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('/luv-jewelry.png')]">
								<div
									className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100"
									onClick={() => setLuvModalOpen(true)}
								>
									<h2 className="mt-4 text-xl font-semibold text-white capitalize">
										Luv Jewelry Ecommerce
									</h2>
									<p className="mt-2 flex items-center tracking-wider text-blue-400 uppercase">
										View Detail <ArrowRight />
									</p>
								</div>
							</div>
							<h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">
								Luv Jewelry Ecommerce
							</h2>
							<p
								className="mt-2 text-xs flex items-center tracking-wider text-blue-500 uppercase cursor-pointer"
								onClick={() => setLuvModalOpen(true)}
							>
								View Detail <ArrowRight size={14} />
							</p>
						</div>

						<div>
							<div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('/tiktok.png')]">
								<div
									className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100"
									onClick={() => setTiktokModalOpen(true)}
								>
									<h2 className="mt-4 text-xl font-semibold text-white capitalize">
										Tiktok Affiliate
									</h2>
									<p className="mt-2 flex items-center tracking-wider text-blue-400 uppercase">
										View Detail <ArrowRight />
									</p>
								</div>
							</div>
							<h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">
								Tiktok Affiliate
							</h2>
							<p
								className="mt-2 text-xs flex items-center tracking-wider text-blue-500 uppercase cursor-pointer"
								onClick={() => setTiktokModalOpen(true)}
							>
								View Detail <ArrowRight size={14} />
							</p>
						</div>
					</div>
				</div>
			</section>

			<VentaModal
				isOpen={ventaModalOpen}
				onClose={() => setVentaModalOpen(false)}
			/>
			<LuvModal isOpen={luvModalOpen} onClose={() => setLuvModalOpen(false)} />
			<TiktokModal
				isOpen={tiktokModalOpen}
				onClose={() => setTiktokModalOpen(false)}
			/>
		</>
	);
}

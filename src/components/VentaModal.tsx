"use client";
import React from "react";
import { Modal } from "antd";
import Image from "next/image";
import Link from "next/link";

interface VentaModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const VentaModal: React.FC<VentaModalProps> = ({ isOpen, onClose }) => {
	return (
		<Modal
			open={isOpen}
			onCancel={onClose}
			footer={null}
			width={{
				xs: "90%",
				sm: "80%",
				md: "80%",
				lg: "70%",
				xl: "60%",
				xxl: "50%",
			}}
		>
			<div className="p-4">
				<h1 className="text-center mb-4 text-2xl lg:text-3xl font-medium">
					VENTA BLOCKS E-COMMERCE
				</h1>
				<div className="w-full flex items-center justify-center">
					<Image
						src={"/venta.png"}
						alt="cover venta block e-commerce"
						width={500}
						height={500}
					/>
				</div>
				<div className="space-y-8 max-w-4xl mx-auto px-4 mt-4">
					<div className="relative">
						<p className="text-lg md:text-xl leading-relaxed">
							I founded{" "}
							<span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
								Venta Blocks
							</span>{" "}
							in <span className="font-semibold text-gray-700">June 2024</span>{" "}
							to bring{" "}
							<span className="italic font-medium">
								screen-free, creativity-boosting games
							</span>{" "}
							to kids. Drawing from past experiences in{" "}
							<span className="font-medium text-blue-600">paid ads</span>,{" "}
							<span className="font-medium text-purple-600">
								website creation
							</span>
							, and{" "}
							<span className="font-medium text-indigo-600">
								product research
							</span>
							, this venture became my breakthrough—generating over{" "}
							<span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
								$1,000,000
							</span>{" "}
							in revenue.
						</p>
					</div>

					<div className="relative">
						<p className="text-lg md:text-xl leading-relaxed">
							Through this journey, I ve collaborated with a{" "}
							<span className="font-medium">diverse team</span>, including{" "}
							<span className="inline-flex gap-2 items-center">
								<span className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
									suppliers
								</span>{" "}
								•
								<span className="text-purple-500 hover:text-purple-600 transition-colors duration-200">
									marketers
								</span>{" "}
								•
								<span className="text-indigo-500 hover:text-indigo-600 transition-colors duration-200">
									support
								</span>{" "}
								•
								<span className="text-pink-500 hover:text-pink-600 transition-colors duration-200">
									creators
								</span>{" "}
								•
								<span className="text-violet-500 hover:text-violet-600 transition-colors duration-200">
									strategists
								</span>
							</span>
							. While I m still growing as a{" "}
							<span className="font-semibold text-gray-700">leader</span>, my
							goal is to{" "}
							<span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								scale and eventually exit
							</span>{" "}
							this business in the coming years.{" "}
							<span className="inline-block animate-bounce">🚀</span>
						</p>
					</div>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Website Homepage (1).PNG"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
						STORE HOMEPAGE <br />{" "}
						<Link href={"https://theventashop.com"} target="_blank">
							theventashop.com
						</Link>
					</h2>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/ยอดขาย (USD).png"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
						Analytics From The Past 90 Days Of Running This Brand
					</h2>
				</div>

				{/* Video Sections */}
        				<div className="grid grid-cols-1 my-10">
					{/* Factory Video */}
					<div className="relative group flex items-center flex-col lg:flex-row gap-5">
						<div className="relative w-full lg:w-1/2 overflow-hidden rounded shadow-lg">
							<video
								className="w-full aspect-[9/16] object-cover "
								controls
								autoPlay
								poster="/video-thumbnail-1.jpg"
							>
								<source src="/venta-blocks-video2.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
						<h2 className="text-lg lg:text-2xl font-medium">
            Venta Blocks UGC Video Ad Example (Product Showcase)
						</h2>
					</div>
				</div>
				<div className="grid grid-cols-1 my-10">
					{/* Factory Video */}
					<div className="relative group flex items-center flex-col lg:flex-row gap-5">
						<div className="relative w-full lg:w-1/2 overflow-hidden rounded shadow-lg">
							<video
								className="w-full aspect-[9/16] object-cover "
								controls
								autoPlay
								poster="/video-thumbnail-2.jpg"
							>
								<source src="/venta-blocks-video1.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
						<h2 className="text-lg lg:text-2xl font-medium">
            
            Venta Blocks - The Supplier's Factory that I Work with in China
						</h2>
					</div>
				</div>



				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Facebook Ads (1).png"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
						An Example Of A Facebook Ads Video
					</h2>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Inventory 1.jpg"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
						Our Stocked Inventory At The Warehouse
					</h2>
				</div>
			</div>
		</Modal>
	);
};

export default VentaModal;

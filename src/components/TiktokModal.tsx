"use client";
import React from "react";
import { Modal } from "antd";
import Image from "next/image";

interface TiktokModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const TiktokModal: React.FC<TiktokModalProps> = ({ isOpen, onClose }) => {
	return (
		<Modal
			open={isOpen}
			onCancel={onClose}
			footer={null}
			width={{
				xs: "90%",
				sm: "80%",
				md: "80%",
				lg: "80%",
				xl: "70%",
				xxl: "60%",
			}}
		>
			<div className="p-4">
				<h1 className="text-center mb-4 text-2xl lg:text-3xl font-medium">
					TIKTOK AFFILIATE
				</h1>
				<div className="w-full flex items-center justify-center">
					<Image
						src={"/tiktok.png"}
						alt="cover venta block e-commerce"
						width={500}
						height={500}
					/>
				</div>
				<div className="space-y-8 max-w-4xl mx-auto px-4 mt-4">
					<div className="relative">
						<p className="text-lg md:text-xl leading-relaxed">
							As{" "}
							<span className="inline-flex items-center gap-1">
								<span className="font-bold text-black">TikTok</span>
								<span className="text-sm">➜</span>
							</span>{" "}
							introduced the new{" "}
							<span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
								TikTok Shop
							</span>{" "}
							feature, I saw an opportunity, believing they would{" "}
							<span className="font-medium text-purple-600">
								push and promote
							</span>{" "}
							this feature extensively. I decided to test the algorithm by
							becoming a{" "}
							<span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								TikTok Affiliate Marketer
							</span>
							.
						</p>
					</div>

					<div className="relative">
						<div className="text-lg md:text-xl leading-relaxed">
							Through this venture, I successfully helped multiple stores
							achieve{" "}
							<span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
								3,600+ orders
							</span>{" "}
							and earned approximately{" "}
							<span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
								$5,000
							</span>{" "}
							in commission revenue. The power of{" "}
							<span className="font-medium text-black">TikTok</span> lies in its
							ability to generate{" "}
							<span className="font-medium text-purple-600">viral content</span>
							, providing{" "}
							<span className="italic font-medium">free product awareness</span>
							. Moving forward, my strategy is to{" "}
							<span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
								leverage TikTok Shop
							</span>{" "}
							as an additional marketing channel for my business.
							<span className="block mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
								<span className="font-medium text-gray-700 block mb-2">
									Key Achievements:
								</span>
								<div className="flex flex-wrap gap-3">
									<span className="px-3 py-1 bg-purple-100 rounded-full text-sm font-medium text-purple-700 hover:bg-purple-200 transition-colors duration-200">
										3,600+ Orders Facilitated
									</span>
									<span className="px-3 py-1 bg-green-100 rounded-full text-sm font-medium text-green-700 hover:bg-green-200 transition-colors duration-200">
										$5,000 Commission Revenue
									</span>
									<span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium text-blue-700 hover:bg-blue-200 transition-colors duration-200">
										Multiple Store Partnerships
									</span>
									<span className="px-3 py-1 bg-pink-100 rounded-full text-sm font-medium text-pink-700 hover:bg-pink-200 transition-colors duration-200">
										Viral Content Creation
									</span>
								</div>
							</span>
						</div>
					</div>
				</div>
				<div className="flex justify-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Tiktok profile.PNG"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
				</div>
				<div className="flex justify-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/จำนวน Orders.PNG"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
				</div>
				<div className="flex justify-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Analytics Dashboard.PNG"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
				</div>
			</div>
		</Modal>
	);
};

export default TiktokModal;

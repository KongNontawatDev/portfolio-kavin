"use client";
import React from "react";
import { Modal } from "antd";
import Image from "next/image";
import Link from "next/link";

interface LuvModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const LuvModal: React.FC<LuvModalProps> = ({ isOpen, onClose }) => {
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
					LUVJEWELY ECOMMERCE
				</h1>
				<div className="w-full flex items-center justify-center">
					<Image
						src={"/luv-jewelry.png"}
						alt="cover venta block e-commerce"
						width={500}
						height={500}
					/>
				</div>
				<div className="space-y-8 max-w-4xl mx-auto px-4 mt-4">
					<div className="relative">
						<p className="text-lg md:text-xl leading-relaxed">
							Created this store in{" "}
							<span className="font-semibold text-gray-700">November 2023</span>{" "}
							as I saw the opportunity to sell this product in{" "}
							<span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
								Thailand
							</span>{" "}
							as it went viral in the{" "}
							<span className="font-medium text-blue-600">United States</span>.
							It was also only a few months away from{" "}
							<span className="text-pink-500 font-medium">Valentine&apos;s day</span>
							, so I thought that it was the perfect opportunity.
						</p>
					</div>

					<div className="relative">
						<p className="text-lg md:text-xl leading-relaxed">
							What makes this store special is, instead of hiring UGC creators,
							my friend and I actually{" "}
							<span className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
								created our own advertising videos
							</span>
							. I leveraged my{" "}
							<span className="font-medium text-indigo-600">
								content creation skills
							</span>
							, grew its{" "}
							<span className="inline-flex items-center gap-2">
								<span className="text-pink-500 hover:text-pink-600 transition-colors duration-200">
									Instagram
								</span>
								<span className="text-gray-400">and</span>
								<span className="text-black hover:text-gray-800 transition-colors duration-200">
									TikTok
								</span>
							</span>{" "}
							accounts and gained{" "}
							<span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
								thousands of followers
							</span>{" "}
							on both platforms. I ran this brand for a few months before
							starting an internship in{" "}
							<span className="font-semibold text-gray-700">March 2024</span>.
							In just <span className="italic font-medium">3-4 months</span>,
							this brand generated{" "}
							<span className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
								$100,000+
							</span>{" "}
							in revenue from multiple channels:
							<span className="block mt-2 flex flex-wrap gap-2">
								<span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
									Website
								</span>
								<span className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200">
									Messenger
								</span>
								<span className="px-3 py-1 bg-pink-100 rounded-full text-sm font-medium hover:bg-pink-200 transition-colors duration-200">
									Instagram DMs
								</span>
								<span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
									TikTok Inbox
								</span>
							</span>
						</p>
					</div>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Website homepage.PNG"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
						THE HOMEPAGE OF THE STORE’S WEBSITE <br />{" "}
						<Link href={"https://luvjewelryth.com/"} target="_blank">
							luvjewelryth.com
						</Link>
					</h2>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/ยอดขาย (THB) .png"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
						Analytics From The 3-4 Months Period Of Running This Store <br />
						(over $100,000 in revenue)
					</h2>
				</div>
				{/* <div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Facebook Ads (2).png"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
          A Screenshot Of
Facebook Ads
Campaigns That
I Managed
					</h2>
				</div> */}
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/หน้า Tiktok.PNG"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
						Tiktok Profile - 2,000+ Followers
					</h2>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/หน้า IG.PNG"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
						Instagram Profile - 5,000+ Followers
					</h2>
				</div>
			</div>
		</Modal>
	);
};

export default LuvModal;

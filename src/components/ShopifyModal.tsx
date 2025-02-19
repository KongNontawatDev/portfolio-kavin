"use client";
import React from "react";
import { Modal } from "antd";
import Image from "next/image";

interface ShopifyModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const ShopifyModal: React.FC<ShopifyModalProps> = ({ isOpen, onClose }) => {
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
					Shopify Award
				</h1>
				<div className="w-full flex items-center justify-center">
					<Image
						src={"/award.png"}
						alt="cover shopify award"
						width={500}
						height={500}
					/>
				</div>
				<div className="max-w-4xl mx-auto px-4 my-12">
					<div className="relative bg-gradient-to-br from-slate-50 to-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-lg">
						{/* Decorative Elements */}
						<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-2xl" />
						<div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-500/10 to-green-500/10 rounded-full blur-2xl" />

						{/* Shopify Logo and Achievement Banner */}
						<div className="flex items-center justify-center mb-8">
							<span className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
								Shopify Milestone Achieved
							</span>
						</div>

						{/* Achievement Number */}
						<div className="text-center mb-8">
							<span className="font-bold text-5xl md:text-6xl bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
								10,000
							</span>
							<span className="block text-xl md:text-2xl text-gray-600 mt-2">
								Lifetime Orders
							</span>
						</div>

						{/* Message Content */}
						<div className="space-y-6 relative z-10 text-lg md:text-xl leading-relaxed text-gray-700">
							<p>
								Welcome. You&apos;ve made it. You&apos;ve reached a{" "}
								<span className="font-semibold text-gray-900">
									pivotal moment
								</span>{" "}
								in your entrepreneurship journey, one that deserves something
								extra special.
							</p>

							<p>
								The start of an entrepreneur&apos;s journey is packed with{" "}
								<span className="font-medium text-emerald-600">promise</span>{" "}
								and{" "}
								<span className="font-medium text-emerald-600">potential</span>.
								Throughout the daily hustle of packing and stacking, of building
								and believing, you understood that{" "}
								<span className="italic font-medium">
									every order was an opportunity
								</span>{" "}
								for improvement—and a chance to grow your business to where it
								is today.
							</p>

							<p>
								This{" "}
								<span className="font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
									Shopify Milestone
								</span>{" "}
								is a testament to how far your business has come, forged from
								that very first order and molded to withstand anything that
								comes your way.
							</p>

							<p className="text-center font-medium">
								Go ahead—take a bow, because this deserves a celebration.
							</p>

							<p>
								You&apos;re now in an{" "}
								<span className="font-semibold">exclusive community</span> of
								top Shopify merchants worldwide who overcame the challenges of
								starting up and have turned their focus now to a new goal:{" "}
								<span className="font-bold text-2xl bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
									100,000
								</span>{" "}
								lifetime orders.
							</p>

							<div className="text-center space-y-2">
								<p className="font-bold text-xl text-emerald-600">
									Here to 10x more.
								</p>
								<p>We&apos;ll be with you every step of the way.</p>
								<p className="italic text-gray-600">
									- Your friends at Shopify
								</p>
							</div>
						</div>

						{/* Achievement Tags */}
						<div className="mt-8 flex flex-wrap justify-center gap-3">
							<span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
								Top Merchant
							</span>
							<span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
								10K Club Member
							</span>
							<span className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
								Milestone Achieved
							</span>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default ShopifyModal;

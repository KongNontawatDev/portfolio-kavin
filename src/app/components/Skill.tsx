import Container from "@/components/common/Container";
import Image from "next/image";
import React from "react";

export default function Skill() {
	const items = [
		{
			label: "Proficient",
			title: "E-commerce",
			percent: 95,
			image: "/icon/ecommerce.png",
			width: 50,
			height:30,
		},
		{
			label: "Proficient",
			title: "Shopify",
			percent: 90,
			image: "/icon/shopify.png",
			width: 50,
			height:30,
		},
		{
			label: "Proficient",
			title: "Facebook Ads",
			percent: 98,
			image: "/icon/facebook-ads.webp",
			width: 50,
			height:30,
		},
		{
			label: "Proficient",
			title: "Store",
			percent: 94,
			image: "/icon/store.png",
			width: 50,
			height:30,
		},
		{
			label: "Proficient",
			title: "Management",
			percent: 90,
			image: "/icon/management.png",
			width: 50,
			height:30,
		},
		{
			label: "Proficient",
			title: "Video Editing",
			percent: 88,
			image: "/icon/video-editing.png",
			width: 50,
			height:30,
		},
		{
			label: "Proficient",
			title: "TikTok Organic",
			percent: 90,
			image: "/icon/tiktok.png",
			width: 50,
			height:30,
		},
		{
			label: "Moderate",
			title: "Graphic Design",
			percent: 98,
			image: "/icon/graphic.png",
			width: 50,
			height:30,
		},
		{
			label: "Moderate",
			title: "Customer Service",
			percent: 95,
			image: "/icon/customer.png",
			width: 50,
			height:30,
		},
		{
			label: "Moderate",
			title: "TikTok Ads",
			percent: 90,
			image: "/icon/tiktok-ads.png",
			width: 50,
			height:30,
		},
	];
	return (
		<>
			<section className="bg-white pb-10 py-5 lg:py-10 lg:pb-16">
				<Container>
					<h1 className="text-3xl text-center mb-5 font-medium capitalize">
						My Skills
					</h1>
					<div className="flex flex-wrap items-center justify-evenly lg:justify-center gap-4 lg:gap-8">
						{items.map((item) => (
							<div key={item.title} className="shadow rounded-lg bg-[#F5F3EF] py-4 w-[45%] md:w-1/3 lg:w-1/5 flex flex-col row justify-center items-center">
								<Image
									src={item.image}
									alt={`image ${item.title}`}
									width={item.width}
									height={item.height}
									className="w-11 h-11 lg:w-14 lg:h-14"
								/>
								<h4 className="lg:text-lg font-medium">{item.title}</h4>
							</div>
						))}
					</div>
				</Container>
			</section>
		</>
	);
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/common/Container";

const projects = [
	{
		title: "Interacting & Entertaining the Elderly at NTUC Healthcare",
		description:
			"I had the opportunity to entertain the elderly at NTUC Healthcare. My friends and I came up with activity plan and games to engage with the elderly for about 3 hours. Overall, it was a good experience as… Interaction with elder first, then playing Pictionary about general business terms, or games such a guessing prices of food/drinks/ groceries now, buying food/groceries on a budget.  NTUC Health is among the largest senior day care, nursing home and home personal care providers in Singapore. They offer other services for seniors such as fitness classes and elderly gyms, and community support for vulnerable seniors, and run a chain of dental clinics and a family medicine clinic.",
		image: "/volunteer1.png",
	},
	{
		title: "Decoration for the CNY Garden Party",
		description:
			"I had the opportunity to help create an upcycled art piece as a decoration for the CNY Garden Party —an annual event held at the Istana by the Prime Minister and People’s Association to celebrate Chinese New Year. The project was part of the TP sustainability club event. It was a good experience, showcasing creativity making a piece of decoration for a prestigious event, using sustainable materials.  ",
		image: "/volunteer2.png",
	},
];

export default function Volunteer() {
	const [current, setCurrent] = useState(0);

	const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);
	const prevSlide = () =>
		setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

	return (
		<section className="bg-white flex items-center justify-center py-8">
			<Container className="text-center">
				<div className="flex flex-col lg:flex-row items-center justify-center">
					<Image
						src={projects[current].image}
						width={600}
						height={300}
						alt={projects[current].title}
						className="order-2 lg:order-1 object-cover w-full max-w-2xl rounded-lg"
					/>

					<div className="order-1 lg:order-2 mb-8 lg:mt-0 lg:px-10">
						<h1 className="text-3xl mb-3 font-semibold text-secondary">
							Volunteer
						</h1>
						<h2 className="text-2xl font-semibold text-gray-800 ">
							{projects[current].title}
						</h2>
						<p className="mt-4 text-gray-500 ">
							{projects[current].description}
						</p>
					</div>
				</div>

				<div className="flex items-center justify-center mt-10 space-x-4">
					<button
						onClick={prevSlide}
						className="p-2 text-gray-800  border rounded-full  hover:bg-gray-100 "
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
					<button
						onClick={nextSlide}
						className="p-2 text-gray-800  border rounded-full  hover:bg-gray-100 "
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			</Container>
		</section>
	);
}

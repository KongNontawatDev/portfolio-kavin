import React from "react";

export default function Marquee() {
	return (
		<div className="relative overflow-hidden py-4 marquee-container ">
			<div
				className="flex gap-5 text-4xl md:text-5xl font-bold text-primary uppercase marquee-content"
			>
				<span className="px-6">
					"Success is built on failure, perseverance, and learning. Keep moving
					forward!"
				</span>
				<span className="px-6">
					"Every challenge is an opportunity to grow stronger."
				</span>
				<span className="px-6">
					"Innovate, adapt, and never stop dreaming!"
				</span>
			</div>
		</div>
	);
}

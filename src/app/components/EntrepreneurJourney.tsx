"use client";

import Container from "@/components/common/Container";
import React from "react";

const EntrepreneurJourney = () => {
	return (
		<section
			className="relative bg-cover bg-center py-10 bg-fixed"
			style={{ backgroundImage: "url('/section-bg.png')" }}
		>
			<div className="absolute inset-0 bg-black opacity-60"></div>
			<Container>
				<div className="relative mx-auto text-center text-white">
					<h2 className="text-4xl md:text-5xl font-extrabold">
						My Entrepreneurial Journey
					</h2>
					<p className="text-lg mt-4">
						Since childhood, I’ve been inspired by my parents’ entrepreneurial
						journey, but I’ve always wanted to carve my own path in business.
						Instead of relying on their success, I explored multiple side
						hustles—stock trading, content creation, and social media
						management—which helped me earn enough to launch my first Ecommerce
						store.
					</p>
				</div>
				<div className="relative mx-auto mt-12 grid gap-8 md:grid-cols-2">
					<div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg p-6 rounded-lg text-white">
						<h3 className="text-2xl font-semibold text-primary">
							Challenges & Growth
						</h3>
						<p className="mt-2 text-primary">
							The beginning was far from easy. My initial stores failed, but
							each setback became a lesson, sharpening my skills in business
							strategy, market analysis, and perseverance.
						</p>
					</div>
					<div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg p-6 rounded-lg text-white">
						<h3 className="text-2xl font-semibold text-primary">
							Success & Achievements
						</h3>
						<p className="mt-2 text-primary">
							Through continuous learning and adaptation, I now run a 7-figure
							toy brand catering to parents. I have also managed a jewelry store
							for Valentine’s 2024, fulfilling over 20,000 orders and surpassing
							$1 million in revenue.
						</p>
					</div>
				</div>
				<div className="relative mx-auto text-center mt-16 text-white">
					<h3 className="text-3xl font-semibold">Beyond E-Commerce</h3>
					<p className="text-lg mt-4">
						Leveraging my content creation expertise, I explored TikTok
						Affiliate Marketing, generating $5,000 in commissions. These
						experiences strengthened my ability to manage businesses, lead
						teams, and stay ahead of trends—qualities that fuel my passion for
						entrepreneurship and continuous growth.
					</p>
				</div>
			</Container>
		</section>
	);
};

export default EntrepreneurJourney;

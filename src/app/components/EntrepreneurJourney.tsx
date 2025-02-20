
import Container from "@/components/common/Container";
import { Divider } from "antd";
import { DollarSign, ShoppingCart, Trophy } from "lucide-react";
import React from "react";

const EntrepreneurJourney = () => {
	return (
		<section
			className="relative bg-cover bg-center py-10 bg-fixed"
			style={{ backgroundImage: "url('/section-bg.png')" }}
			id="myjourney"
		>
			<div className="absolute inset-0 bg-black opacity-60"></div>
			<Container>
				<div className="relative mx-auto text-center text-white">
					<h2 
						className="text-4xl md:text-5xl font-extrabold"
						data-aos="fade-up" // AOS animation for fading in
						data-aos-duration="1000"
						data-aos-delay="300"
					>
						My Entrepreneurial Journey
					</h2>
					<p className="text-lg mt-4" data-aos="fade-up" data-aos-duration="1000">
						Since childhood, I’ve been inspired by my parents’ entrepreneurial
						journey, but I’ve always wanted to carve my own path in business.
						Instead of relying on their success, I explored multiple side
						hustles—stock trading, content creation, and social media
						management—which helped me earn enough to launch my first E-commerce
						store.
					</p>
				</div>

				<div className="relative mx-auto mt-12 grid gap-8 md:grid-cols-2">
					{/* Success & Achievements */}
					<div 
						className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg p-6 rounded-lg text-white"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<h3 className="text-2xl font-semibold text-primary">
							Success & Achievements
						</h3>
						<p className="mt-2 text-primary">
							Through continuous learning and adaptation, I now run a 7-figure
							toy brand catering to parents. I have also created and managed a
							jewelry store for Valentine’s 2024.
						</p>
						<div className="my-3 flex justify-around items-center text-primary">
							<div className="flex items-center gap-1">
								<ShoppingCart size={30} />
								<h2 className="text-4xl font-medium">
									20,000+ <span className="text-2xl font-medium">Orders</span>
								</h2>
							</div>

							<Divider type="vertical" />
							<div className="flex items-center gap-1">
								<DollarSign size={30} />
								<h2 className="text-4xl font-medium">
									1,500,000+{" "}
									<span className="text-2xl font-medium">Dollars</span>
								</h2>
							</div>
						</div>
					</div>

					{/* Challenges & Growth */}
					<div 
						className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg p-6 rounded-lg text-white"
						data-aos="zoom-in"
						data-aos-duration="1000"
						data-aos-delay="200"
					>
						<h3 className="text-2xl font-semibold text-primary">
							Challenges & Growth
						</h3>
						<p className="mt-2 text-primary">
							The beginning was far from easy. My initial stores failed, but
							each setback became a lesson, sharpening my skills in business
							strategy, market analysis, and perseverance.
						</p>
						<div className="my-3 flex justify-around items-center text-primary">
							<div className="flex items-center gap-1">
								<Trophy size={30} className="text-secondary"/>
								<h2 className="text-4xl font-medium text-highlight">
									&apos;Action Over Fear, Always&apos;
								</h2>
							</div>
						</div>
					</div>
				</div>

				{/* Beyond E-Commerce */}
				<div className="relative mx-auto text-center mt-16 text-white">
					<h3 className="text-3xl font-semibold" data-aos="fade-up" data-aos-duration="1000">
						Beyond E-Commerce
					</h3>
					<p className="text-lg mt-4" data-aos="fade-up" data-aos-duration="1000">
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

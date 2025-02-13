import React from "react";
import Navbar from "./Navbar";
import Container from "@/components/common/Container";
import { Store } from "lucide-react";
import Image from "next/image";

export default function Banner() {
	return (
		<div className="relative h-[850px] lg:h-[950px]">
			<div className="bg-[url(/banner-bg.png)] h-[100%] w-[100%] bg-cover bg-center bg-no-repeat overflow-hidden -z-20">
				<Navbar />
				<Container>
					<div className="items-center lg:flex">
						<div className="w-full lg:w-1/2 mt-8 lg:-mt-50">
							<div className="lg:max-w-lg">
								<h1 className="text-4xl lg:text-6xl font-medium text-gray-800 uppercase">
									Passion,
								</h1>
								<h1 className="text-5xl lg:text-8xl font-semibold text-gray-800 uppercase">
									Perseverance,
									<br />
									<span className="text-transparent text-stroke-1 uppercase">
										Innovation
									</span>
								</h1>

								<h2 className="my-4 text-xl font-medium text-gray-600 ">
									Started from Side Hustles to Multi-Million Success!
								</h2>

								<button className="btn btn-primary lg:btn-xl btn-block lg:btn-wide ">
									<Store className="me-2" /> My Shop
								</button>
							</div>
						</div>

						<div className="flex items-end justify-center w-full mt-6 lg:mt-0 lg:w-1/2 relative">
							<Image
								className="w-full h-full lg:max-w-2xl z-10"
								src="/banner-thumb-01.png"
								alt="my avatar thumb"
							/>
							<Image
								className="w-full  lg:max-w-md lg:max-h-md absolute z-0 top-28 lg:top-48"
								src="/square-shape-02.png"
								alt="shap bg"
							/>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}

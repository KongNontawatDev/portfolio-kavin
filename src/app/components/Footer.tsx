import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<>
			<footer className="bg-primary">
				<div className="container px-6 py-8 mx-auto">
					<div className="flex flex-col items-center text-center">
						<a href="#">
							<Image
								className="w-auto h-16"
								src="/logo_sub.webp"
								alt=""
								style={{ filter: "invert(1)" }}
							/>
						</a>

						<ul className="menu menu-horizontal px-1 gap-4 lg:gap-6 text-base font-medium text-white">
							<li>
								<Link href={"#home"}>Home</Link>
							</li>
							<li>
								<Link href={"#about"}>About Me</Link>
							</li>
							<li>
								<Link href={"#education"}>Education</Link>
							</li>
							<li>
								<Link href={"#transcript"}>Transcript</Link>
							</li>
							<li>
								<Link href={"#skill"}>Skill</Link>
							</li>
							<li>
								<Link href={"#myjourney"}>My Journey</Link>
							</li>
							<li>
								<Link href={"#intership"}>Internship</Link>
							</li>
							<li>
								<Link href={"#volunteen"}>Volunteen</Link>
							</li>
						</ul>

						<div className="flex flex-wrap mt-4 flex-row lg:items-center lg:justify-center">
							<button className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform border rounded-md sm:mx-2  sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring  focus:ring-gray-300 focus:ring-opacity-40">
								<svg
									className="w-5 h-5 mx-1"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
										fill="currentColor"
									></path>
								</svg>

								<span className="mx-1">Contact 1</span>
							</button>
							<button className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform border rounded-md sm:mx-2  sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring  focus:ring-gray-300 focus:ring-opacity-40">
								<svg
									className="w-5 h-5 mx-1"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
										fill="currentColor"
									></path>
								</svg>

								<span className="mx-1">Contact 2</span>
							</button>
							<button className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform border rounded-md sm:mx-2  sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring  focus:ring-gray-300 focus:ring-opacity-40">
								<svg
									className="w-5 h-5 mx-1"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
										fill="currentColor"
									></path>
								</svg>

								<span className="mx-1">Contact 3</span>
							</button>
						</div>
					</div>

					<hr className="my-5 border-gray-200 " />

					<div className="flex items-center justify-center">
						<p className="text-sm text-gray-200">
							© Copyright 2025. All Rights Reserved.{" "}
							<Link
								href={"https://nakdev-studio.com/"}
								target="_blank"
								className="text-blue-500 font-medium underline"
							>
								Nakdev Studio
							</Link>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/common/Container";

export default function Navbar() {
	return (
		<div className="w-full flex justify-center items-center" data-aos="fade-down">
			<Container>
				<div className="navbar py-2 lg:py-4">
					<div className="navbar-start">
						<div className="dropdown z-50">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8"
									fill="none"
									viewBox="0 0 30 30"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
							>
								<li>
									<Link href={"#home"}>Home</Link>
								</li>
								<li>
									<Link href={"#about"}>About Me</Link>
								</li>
								<li>
									<Link href={"#myjourney"}>My Entrepreneurial Journey</Link>
								</li>
								<li>
									<Link href={"#skill"}>Skill</Link>
								</li>
								
								<li>
									<Link href={"#internship"}>Internship</Link>
								</li>
								<li>
									<Link href={"#volunteer"}>Volunteer</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="navbar-center hidden lg:flex lg:flex-col">
						<Link
							href={"#top"}
							className="cursor-pointer text-xl hidden lg:block"
						>
							<Image
								src={"/logo_sub.webp"}
								width={160}
								height={50}
								alt="logo website Akavin Panichpongsapak webp png"
							/>
						</Link>
						<ul className="menu menu-horizontal px-1 gap-4 lg:gap-6 text-base font-medium text-primary">
							<li>
								<Link href={"#home"}>Home</Link>
							</li>
							<li>
								<Link href={"#about"}>About Me</Link>
							</li>{" "}
							<li>
								<Link href={"#myjourney"}>My Entrepreneurial Journey</Link>
							</li>
							{/* <li>
								<Link href={"#education"}>Education</Link>
							</li>
							<li>
								<Link href={"#transcript"}>Transcript</Link>
							</li> */}
							<li>
								<Link href={"#skill"}>Skill</Link>
							</li>
							<li>
								<Link href={"#internship"}>Internship</Link>
							</li>
							<li>
								<Link href={"#volunteer"}>Volunteer</Link>
							</li>
						</ul>
					</div>

					<div className="navbar-end">
						<Link
							href={"#top"}
							className="cursor-pointer text-xl block lg:hidden"
						>
							<Image
								src={"/logo_sub.webp"}
								width={130}
								height={35}
								alt="logo website Akavin Panichpongsapak webp png"
							/>
						</Link>
						{/* <Link
							href={""}
							className="hidden lg:flex btn btn-primary lg:btn-xl rounded-full"
							style={{ fontSize: "1.2rem" }}
						>
							A Button
						</Link> */}
					</div>
				</div>
			</Container>
		</div>
	);
}

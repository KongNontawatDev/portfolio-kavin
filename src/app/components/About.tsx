import { ContactRound, Dumbbell, IdCard } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function About() {
	return (
		<>
			<section className="bg-[#F5F3EF] pt-10 pb-5 lg:pt-40 lg:pb-30" id="about">
				<div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
					<div className="order-2 lg:order-1 flex items-center justify-center w-full h-[40rem] lg:w-1/2">
						<Image
							className="object-cover object-top w-full h-full max-w-2xl rounded-md overflow-hidden"
							src="/e25dba74-4af8-4e81-a9f0-848f63aea7b1.jpg"
							alt="about me photo"
							width={500}
							height={500}
						/>
					</div>
					<div className="order-1 lg:order-2 w-full lg:w-1/2 mb-10 lg:mb-0">
						<div className="lg:max-w-lg">
							<h2 className=" text-xl text-gray-600 uppercase mb-2">
								About Me
							</h2>
							<h1 className="text-4xl font-semibold tracking-wide text-primary  lg:text-5xl mb-4">
								Akavin Panichpongsapak
							</h1>
								<div className="md:flex md:items-start md:-mx-4">
									<div className="mt-4 md:mx-4 md:mt-0">
										<div className="flex items-start">
											<IdCard width={70} height={30} strokeWidth={1.5} />
											<div className="flex flex-col">
												<h3 className="text-xl font-semibold text-primary capitalize ">
													About Me
												</h3>
												<ul className="mt-1 text-gray-500 ">
													<li><b>Birthday :</b> 25/06/2003</li>
													<li><b>Age : </b>21 </li>
													<li><b>Nationality : </b> Thai </li>
													<li><b>Religion : </b> Buddhist</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div className="md:flex md:items-start md:-mx-4 mt-4">
									<div className="mt-4 md:mx-4 md:mt-0">
										<div className="flex items-start">
                      <Dumbbell width={70} height={30} strokeWidth={1.5} />
											<div className="flex flex-col">
												<h3 className="text-xl font-semibold text-primary capitalize ">
													Soft Skills
												</h3>
												<ul className="mt-1 text-gray-500">
													<li>- <b>Adaptability</b></li>
													<li>- <b>Problem Solving</b></li>
													<li>- <b>Creative Thinking</b></li>
													<li>- <b>Communication</b></li>
													<li>- <b>Leadership</b></li>
													<li>- <b>Resilience</b></li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div className="md:flex md:items-start md:-mx-4 mt-4">
									<div className="mt-4 md:mx-4 md:mt-0">
										<div className="flex items-start">
                      <ContactRound width={70} height={30} strokeWidth={1.5} />
											<div className="flex flex-col">
												<h3 className="text-xl font-semibold text-primary capitalize ">
													Contact
												</h3>
												<ul className="mt-1 text-gray-500 ">
													<li><b> +65 93975434</b></li>
													<li><b>vinakavin16@gmail.com</b></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

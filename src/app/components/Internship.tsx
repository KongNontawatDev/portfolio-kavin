import Image from "next/image";
import React from "react";

export default function Internship() {
	return (
		<>
			<div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
				<div className="w-full lg:w-1/2">
					<div className="lg:max-w-lg">
						<h1 className="text-3xl font-semibold tracking-wide text-gray-800  lg:text-5xl">
            Internship
						</h1>
						<p className="mt-4 text-gray-600 ">
            I interned at a leading wholesale sourcing and distribution company for consumer goods, household goods, and more from Asia to West Africa.
						</p>
						<div className="mt-8 space-y-5">
							<p className="flex items-center -mx-2 text-gray-700 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 mx-2 text-blue-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>

								<span className="mx-2">
									Gained hands-on experience in trade processes
								</span>
							</p>

							<p className="flex items-center -mx-2 text-gray-700 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 mx-2 text-blue-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>

								<span className="mx-2">
									Developed strong problem-solving and adaptability skills
								</span>
							</p>

							<p className="flex items-center -mx-2 text-gray-700 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 mx-2 text-blue-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>

								<span className="mx-2">
									Improved collaboration and efficiency in a fast-paced
									environment
								</span>
							</p>

							<p className="flex items-center -mx-2 text-gray-700 ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 mx-2 text-blue-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>

								<span className="mx-2">
									Served as a student ambassador at an industry event
								</span>
							</p>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center w-full h-96 lg:w-1/2">
					<Image
						className="object-cover object-top w-full h-full max-w-2xl rounded-md"
						src="/intern.png"
						alt="glasses photo"
						width={700}
						height={400}
					/>
				</div>
			</div>
		</>
	);
}

import Container from "@/components/common/Container";
import { GraduationCap } from "lucide-react";
import React from "react";

export default function Education() {
	return (
		<div>
			<section className="bg-primary py-10" id="education">
				<Container>
					<h1 className="text-4xl font-semibold text-white capitalize lg:text-5xl  text-center flex items-center justify-center">
						<GraduationCap size={70} className="me-4" strokeWidth={1.5} /> EDUCATION
					</h1>

					<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
						<div className="p-8 space-y-3 border-2 border-secondary  rounded-xl text-center">
							<h3 className="text-secondary border px-4 py-1 inline rounded-full text-lg">
								2016
							</h3>

							<h1 className="text-2xl font-semibold text-white capitalize mt-4">
								LOWER SEC
							</h1>

							<p className="text-gray-500 dark:text-gray-300">
								MAHASARAKHAM UNIVERSITY DEMONSTRATION SCHOOL
							</p>
						</div>

						<div className="p-8 space-y-3 border-2 border-secondary  rounded-xl text-center">
							<h3 className="text-secondary border px-4 py-1 inline rounded-full text-lg">
								2019
							</h3>

							<h1 className="text-2xl font-semibold text-white capitalize mt-4">
								UPPER SEC
							</h1>

							<p className="text-gray-500 dark:text-gray-300">
								EAST SPRING SECONDARY SCHOOL
							</p>
						</div>

						<div className="p-8 space-y-3 border-2 border-secondary  rounded-xl text-center">
							<h3 className="text-secondary border px-4 py-1 inline rounded-full text-lg">
								2022
							</h3>

							<h1 className="text-2xl font-semibold text-white capitalize mt-4">
								POLYTECHNIC
							</h1>

							<p className="text-gray-500 dark:text-gray-300">
								TEMASEK POLYTECHNIC
							</p>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}

"use client";
import Container from "@/components/common/Container";
import React from "react";
import TranscriptImageButton from "../../components/TranscriptImageButton";

export default function Transcript() {


	return (
		<Container>
			<section className="bg-white py-8 lg:py-12 lg:flex lg:justify-center w-full" id="transcript">
				<div className="overflow-hidden bg-white lg:flex  lg:w-full lg:shadow-md lg:rounded-xl border border-[#e6e6e6]">
					<div className="lg:w-1/2 rounded lg:rounded-xl overflow-hidden shadow">
						{/* <img src="/transcript.webp" alt="transcript image" width={500} height={500}/> */}
						<div
							className="h-64 bg-cover lg:h-full bg-[url(/transcript.webp)] bg-top"
						></div>
					</div>

					<div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
						<h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">
							TRANSCRIPT
						</h2>

						<p className="mt-4 text-gray-500 ">
							Achieved an impressive 3.55 cumulative GPA across 5 semesters with
							consistent academic performance and grade point averages ranging
							from 3.10 to 4.00. Successfully completed diverse business-related
							courses including Startup Launchpad, Business Technology &
							Analytics, and Customer Experience Design. Completed a Student
							Internship Programme with an A grade, demonstrating practical
							skills and professional readiness in the business domain.
						</p>

						<div className="inline-flex w-full mt-6 sm:w-auto">
            <TranscriptImageButton/>
						</div>
					</div>
				</div>
			</section>

			{/* <dialog
				ref={modalRef}
				id="my_modal_5"
				className="modal sm:modal-middle"
			>
				<div className="modal-box w-11/12 max-w-5xl">
					<h3 className="font-bold text-lg text-center">Transcript</h3>
					<Image
						width={700}
						height={1000}
						src={"/transcript.webp"}
						alt="my Transcript"
					/>
					<div className="modal-action">
						<form method="dialog">
							<button className="btn">Close</button>
						</form>
					</div>
				</div>
			</dialog> */}
		</Container>
	);
}

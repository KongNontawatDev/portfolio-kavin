"use client";
import React from "react";
import { Modal } from "antd";
import Image from "next/image";

interface TiktokModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const TiktokModal: React.FC<TiktokModalProps> = ({ isOpen, onClose }) => {
	return (
		<Modal
			open={isOpen}
			onCancel={onClose}
			footer={null}
			width={{
				xs: "90%",
				sm: "80%",
				md: "80%",
				lg: "80%",
				xl: "70%",
				xxl: "60%",
			}}
		>
			<div className="p-4">
				<h1 className="text-center mb-4 text-2xl lg:text-3xl font-medium">
        TIKTOK AFFILIATE
				</h1>
				<div className="w-full flex items-center justify-center">
					<Image
						src={"/tiktok.png"}
						alt="cover venta block e-commerce"
						width={500}
						height={500}
					/>
				</div>
				<div className="mt-4">
					<p className="indent-10 lg:indent-16 text-lg">
          As Tiktok introduced the new Tiktok Shop feature, I saw an
opportunity as I was quite certain that Tiktok would want to push
and promote this feature as much as they can. Hence I decided to
test the algorithm to see how easy it is to go viral by becoming a
Tiktok Affiliate Marketer.
					</p>
				</div>
				<div className="mt-4">
					<p className="indent-10 lg:indent-16 text-lg">
          I managed to help multiple stores sell a total of about 3600
orders, and earned around $5000 in commission revenue. The
great thing about Tiktok is that by creating viral content, I would be
able to gain free awareness for my products. Hence, my plan going
forward is to potentially leverage Tiktok shop as another marketing
channel for my business.
					</p>
				</div>
				<div className="flex justify-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Tiktok profile.PNG"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>

				</div>
				<div className="flex justify-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/จำนวน Orders.PNG"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
				</div>
				<div className="flex justify-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Analytics Dashboard.PNG"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
				</div>

			</div>
		</Modal>
	);
};

export default TiktokModal;

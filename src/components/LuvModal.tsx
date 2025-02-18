"use client";
import React from "react";
import { Modal } from "antd";
import Image from "next/image";
import Link from "next/link";

interface LuvModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const LuvModal: React.FC<LuvModalProps> = ({ isOpen, onClose }) => {
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
        LUV JEWELY ECOMMERCE
				</h1>
				<div className="w-full flex items-center justify-center">
					<Image
						src={"/luv-jewelry.png"}
						alt="cover venta block e-commerce"
						width={500}
						height={500}
					/>
				</div>
				<div className="mt-4">
					<p className="indent-10 lg:indent-16 text-lg">
          created this store in November 2023 as I saw the opportunity to sell this
product in Thailand as it went viral in the United States. It was also only a few
months away from Valentine’s day, so I thought that it was the perfect
opportunity.
					</p>
				</div>
				<div className="mt-4">
					<p className="indent-10 lg:indent-16 text-lg">
          What makes this store special is, instead of hiring UGC creators to make
videos for me, my friend and I actually made the videos that were used for
advertising ourselves. I was able to leveraged my content creation skills, grew its
Instagram and Tiktok account and gained thousands of followers on both
accounts. I ended up running this brand for a few months before going for
internship in March 2024. In the period of 3-4 months, this brand generated me
over $100,000 in revenue from the website, and social media platforms like
Messenger, Instagram or Tiktok Inboxes.
					</p>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Website homepage.PNG"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
          THE HOMEPAGE OF THE
STORE’S WEBSITE <br />{" "}
						<Link href={"https://luvjewelryth.com/"} target="_blank">
            luvjewelryth.com
						</Link>
					</h2>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/ยอดขาย (THB) .png"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
          Analytics From The 3-4
Months Period Of
Running This Store
					</h2>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Facebook Ads (2).png"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
          A Screenshot Of
Facebook Ads
Campaigns That
I Managed
					</h2>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/หน้า Tiktok.PNG"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
          Tiktok Profile - 2,000+ Followers
					</h2>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/หน้า IG.PNG"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
          Instagram Profile - 5,000+ Followers
					</h2>
				</div>
			</div>
		</Modal>
	);
};

export default LuvModal;

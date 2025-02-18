"use client";
import React from "react";
import { Modal } from "antd";
import Image from "next/image";
import Link from "next/link";

interface VentaModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const VentaModal: React.FC<VentaModalProps> = ({ isOpen, onClose }) => {
	return (
		<Modal
			open={isOpen}
			onCancel={onClose}
			footer={null}
			width={{
				xs: "90%",
				sm: "80%",
				md: "80%",
				lg: "70%",
				xl: "60%",
				xxl: "50%",
			}}
		>
			<div className="p-4">
				<h1 className="text-center mb-4 text-2xl lg:text-3xl font-medium">
					VENTA BLOCKS ECOMMERCE
				</h1>
				<div className="w-full flex items-center justify-center">
					<Image
						src={"/venta.png"}
						alt="cover venta block e-commerce"
						width={500}
						height={500}
					/>
				</div>
				<div className="mt-4">
					<p className="indent-10 lg:indent-16 text-lg">
						I founded Venta Blocks in June 2024 to bring screen-free,
						creativity-boosting games to kids. Drawing from past experiences in
						paid ads, website creation, and product research, this venture
						became my breakthrough—generating over $1,000,000 in revenue.
					</p>
				</div>
				<div className="mt-4">
					<p className="indent-10 lg:indent-16 text-lg">
						Through this journey, I’ve collaborated with a diverse team,
						including suppliers, marketers, customer support, UGC creators, and
						strategists. While I’m still growing as a leader, my goal is to
						**scale and eventually exit** this business in the coming years. 🚀
					</p>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Website Homepage (1).PNG"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
						STORE HOMEPAGE <br />{" "}
						<Link href={"https://theventashop.com"} target="_blank">
							theventashop.com
						</Link>
					</h2>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/ยอดขาย (USD).png"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
						Analytics From The Past 90 Days Of Running This Brand
					</h2>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Facebook Ads.png"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
						A Screenshot Of The Facebook Ads Campaigns That I Am Managing
					</h2>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Facebook Ads (1).png"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
						An Example Of A Facebook Ads Video
					</h2>
				</div>
				<div className="flex items-center flex-col lg:flex-row gap-5 my-10 lg:my-14">
					<Image
						src={"/Inventory 1.jpg"}
						alt=""
						width={500}
						height={500}
						className="w-full lg:w-1/2"
					/>
					<h2 className="text-lg lg:text-2xl font-medium">
						Our Stocked Inventory At The Warehouse
					</h2>
				</div>
			</div>
		</Modal>
	);
};

export default VentaModal;

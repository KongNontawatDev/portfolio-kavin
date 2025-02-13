import { Urbanist } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/provider/Aos";
import {generateMetadata} from "@/components/layout/Metadata"



const font = Urbanist({
	subsets: ["latin"],
	weight:["100","300","400","500","700","900"]
});

// const robotoMono = Roboto_Slab({
// 	subsets: ["latin"],
// });

export const metadata = generateMetadata

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<AOSInit />
			<body
				className={`${font.className} `}
			>
				{children}
			</body>
		</html>
	);
}

import { HTMLProps, ReactNode } from "react";

type Props = {
	className?: HTMLProps<HTMLElement>["className"];
	children: ReactNode;
};

export default function Container({ children, className }: Props) {
	return (
			<div className={`container max-w-[1320px] px-2 lg:px-3 mx-auto ${className}`}>
				{children}
			</div>
	);
}

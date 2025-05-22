import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
    children: ReactNode
	className?: string
}

export default function MainLayout({ children, className }: Props) {
    return (
		<div
			className={cn("max-w-7xl w-full mx-auto")}
		> 
			{children}
		</div>
    );
}

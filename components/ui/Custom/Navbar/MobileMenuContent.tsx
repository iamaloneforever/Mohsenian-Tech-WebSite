"use client";

import { navigationList } from "@/data/navigationList";

export const MobileMenuContent = () => {
	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<div className="border-t-2">
			<ul className="mt-8 ml-2 flex h-full w-full flex-col gap-3 text-xl">
				{navigationList.map((item) => (
					<li
						key={item.id}
						onClick={() => scrollToSection(item.id)}
						className="cursor-pointer transition-colors hover:text-primary"
					>
						{item.title}
					</li>
				))}
			</ul>
		</div>
	);
};

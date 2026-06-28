"use client";

const navItems = [
	{ title: "Demos", id: "demos" },
	{ title: "FAQ", id: "faq" },
	{ title: "Features", id: "features" },
];

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
				{navItems.map((item) => (
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

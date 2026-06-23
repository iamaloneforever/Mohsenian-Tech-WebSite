"use client";
import { Button } from "@/components/retroui/Button";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { motion } from "motion/react";

export const Navbar = (props: {}) => {
	const navItems = ["Home", "Gallery"];

	return (
		<motion.div
			className="flex justify-center"
			initial={{ y: "-100vh" }}
			animate={{ y: 0 }}
			transition={{ duration: 1 }}
		>
			<div className="fixed z-10 mx-2 mt-5 w-full border-2 border-foreground bg-white p-5 font-heading text-black md:w-2/3">
				{/* Mobile Layout */}
				<div className="flex items-center justify-between md:hidden">
					<div className="flex items-center gap-4">
						<Image
							src={"/logo.png"}
							alt="Tech Company's Logo"
							height={40}
							width={40}
						/>
						<h1 className="text-lg font-extrabold">Tech Name</h1>
					</div>
					<MobileMenu />
				</div>

				{/* Desktop Layout */}
				<div className="hidden md:grid md:grid-cols-3 md:items-center">
					<div className="flex items-center gap-4">
						<Image
							src={"/logo.png"}
							alt="Tech Company's Logo"
							height={40}
							width={40}
						/>
						<h1 className="text-lg font-extrabold">Tech Name</h1>
					</div>
					<div className="font-text">
						<ul className="flex h-full w-full items-center justify-center gap-10 text-lg">
							{navItems.map((item) => (
								<motion.li
									key={item}
									className="relative cursor-pointer transition-colors hover:text-primary"
									whileHover="hover"
									initial="initial"
								>
									{item}
									<motion.div
										className="absolute bottom-0 left-0 h-0.5 bg-primary"
										variants={{
											initial: { width: "0%" },
											hover: { width: "100%" },
										}}
										transition={{
											duration: 0.3,
											ease: "easeInOut",
										}}
									/>
								</motion.li>
							))}
						</ul>
					</div>
					<div className="flex justify-end">
						<Button>See Demos</Button>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

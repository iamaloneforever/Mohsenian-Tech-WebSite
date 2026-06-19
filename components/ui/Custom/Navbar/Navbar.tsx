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
			transition={{ duration: 1, type: "spring", damping: 15, stiffness: 100 }}
		>
			<div className="bg-white text-black mx-2 w-full md:w-2/3 mt-5 p-5 border-foreground border-2 font-heading">
				{/* Mobile Layout */}
				<div className="md:hidden flex items-center justify-between">
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
						<ul className="flex h-full w-full gap-10 items-center justify-center text-lg">
							{navItems.map((item) => (
								<motion.li
									key={item}
									className="relative cursor-pointer hover:text-primary transition-colors"
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

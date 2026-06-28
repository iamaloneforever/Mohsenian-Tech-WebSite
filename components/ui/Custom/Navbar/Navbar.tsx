"use client";
import { Button } from "@/components/retroui/Button";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { motion } from "motion/react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import { Phone } from "lucide-react";
import { navigationList } from "@/data/navigationList";

export const Navbar = (props: {}) => {
	const scrollToSection = (id: string) => {
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};
	return (
		<motion.div
			className="flex justify-center"
			initial={{ y: "-100vh" }}
			animate={{ y: 0 }}
			transition={{ duration: 1 }}
		>
			<div className="fixed z-10 mx-2 mt-5 w-full border-2 border-foreground bg-white p-5 font-heading text-black md:w-2/3">
				{/* Mobile Layout */}
				<div className="flex items-center justify-between sm:hidden">
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
				<div className="hidden sm:grid sm:grid-cols-3 sm:items-center">
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
							{navigationList.slice(1, 4).map((item) => (
								<motion.li
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className="relative cursor-pointer transition-colors hover:text-primary"
									whileHover="hover"
									initial="initial"
								>
									{item.title}

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
						</ul>{" "}
					</div>
					<div className="flex justify-end">
						<Dialog>
							<DialogTrigger asChild>
								<Button className="bg-green-400">
									Call Me <Phone className="mx-2" />
								</Button>
							</DialogTrigger>

							<DialogContent>
								<DialogHeader>
									<DialogTitle className="text-xl">Call Me</DialogTitle>

									<DialogDescription className="font-text">
										from 9 to 10
									</DialogDescription>
								</DialogHeader>

								<DialogFooter className="flex flex-col sm:justify-start">
									<Button type="button" className="w-full bg-green-400">
										Call Me
									</Button>

									<DialogClose asChild>
										<Button type="button" className="w-full">
											Close
										</Button>
									</DialogClose>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

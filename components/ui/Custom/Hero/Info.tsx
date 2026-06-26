"use client";

import { Button } from "@/components/retroui/Button";
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
import { Phone, Send } from "lucide-react";
import { Typewriter } from "../../typewriter";
import { motion, Variants } from "motion/react";

export const Info = () => {
	const buttonContainer: Variants = {
		hidden: {},
		animate: {
			transition: {
				delayChildren: 4.5,
				staggerChildren: 0.15,
			},
		},
	};

	const buttonItem: Variants = {
		hidden: {
			opacity: 0,
			y: 30,
			scale: 0.8,
			rotateX: -25,
			filter: "blur(8px)",
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1,
			rotateX: 0,
			filter: "blur(0px)",
			transition: {
				type: "spring",
				stiffness: 320,
				damping: 18,
				mass: 0.8,
			},
		},
	};
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-10">
			<h1 className="flex items-center gap-2 text-2xl lg:text-3xl">
				I Am{" "}
				<span className="relative">
					<Typewriter
						staggerDuration={0.1}
						className="mb-1 text-3xl font-extrabold text-primary lg:text-6xl"
						onComplete={() => console.log("Done!")}
					>
						Hello World!
					</Typewriter>

					{/* حاشیه متحرک */}
					<motion.div
						className="absolute bottom-0 left-0 h-1 bg-primary"
						initial={{ width: 0 }}
						animate={{ width: "100%" }}
						transition={{
							delay: 0.5 + 0.1 * "Hello World!".length,
							duration: 0.8,
							ease: "easeInOut",
						}}
					/>
				</span>{" "}
			</h1>

			<Typewriter
				className="text-md font-text text-gray-700"
				delay={2.5}
				animation="typewriter"
			>
				Create Your Dreams
			</Typewriter>

			<motion.div
				className="flex gap-10"
				variants={buttonContainer}
				initial="hidden"
				animate="animate"
			>
				<motion.div variants={buttonItem}>
					<Dialog>
						<DialogTrigger asChild>
							<Button className="bg-blue-400">
								Telegram <Send className="mx-2" />
							</Button>
						</DialogTrigger>

						<DialogContent>
							<DialogHeader>
								<DialogTitle className="text-xl">
									Are you absolutely sure?
								</DialogTitle>

								<DialogDescription className="font-text">
									@CompanyOwner_TELEGRAM
								</DialogDescription>
							</DialogHeader>

							<DialogFooter className="sm:justify-start">
								<Button type="button" className="w-full bg-blue-400">
									Message ME
								</Button>

								<DialogClose asChild>
									<Button type="button" className="w-full">
										Close
									</Button>
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</motion.div>

				<motion.div variants={buttonItem}>
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
				</motion.div>
			</motion.div>
		</div>
	);
};

"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";
import { ChevronDown, Sparkles, Zap, Rocket, Star } from "lucide-react";
import { Badge } from "@/components/retroui/Badge";

const faqItems = [
	{
		question: "What technologies do you use?",
		answer:
			"I mainly work with React, Next.js, TypeScript, Tailwind CSS, Node.js and modern web technologies.",
		icon: Sparkles,
	},
	{
		question: "Can you build full-stack applications?",
		answer:
			"Yes. I can develop both frontend and backend applications using Next.js, Express, MongoDB, PostgreSQL and REST APIs.",
		icon: Zap,
	},
	{
		question: "Do you create responsive designs?",
		answer:
			"Absolutely. Every project is optimized for desktop, tablet and mobile devices.",
		icon: Rocket,
	},
	{
		question: "Can I request custom features?",
		answer:
			"Of course. Every project can be tailored to fit your specific needs and requirements.",
		icon: Star,
	},
];

const getItemVariants = (index: number): Variants => {
	const isEven = index % 2 === 0;

	return {
		hidden: {
			opacity: 0,
			[isEven ? "x" : "x"]: isEven ? -100 : 100,
			rotate: isEven ? -10 : 10,
			scale: 0.8,
			filter: "blur(10px)",
		},
		visible: {
			opacity: 1,
			x: 0,
			rotate: 0,
			scale: 1,
			filter: "blur(0px)",
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
				delay: index * 0.15,
				duration: 0.6,
			},
		},
		exit: {
			opacity: 0,
			[isEven ? "x" : "x"]: isEven ? -50 : 50,
			scale: 0.9,
			transition: {
				duration: 0.3,
			},
		},
	};
};

// انیمیشن هدر با افکت پارالاکس
const headerVariants: Variants = {
	hidden: {
		opacity: 0,
		y: -50,
		scale: 0.9,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			damping: 15,
			stiffness: 150,
			duration: 0.8,
		},
	},
};

function FAQItem({
	question,
	answer,
	isOpen,
	onClick,
	index,
	icon: Icon,
}: {
	question: string;
	answer: string;
	isOpen: boolean;
	onClick: () => void;
	index: number;
	icon: React.ElementType;
}) {
	const isEven = index % 2 === 0;

	return (
		<motion.div
			className="relative overflow-hidden border-2 border-black bg-primary"
			variants={getItemVariants(index)}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50px" }}
			animate={{
				boxShadow: isOpen ? "var(--shadow-xs)" : "var(--shadow-md)",
			}}
			whileHover={{
				boxShadow: "var(--shadow-sm)",
				y: 4,
				x: isEven ? 4 : -4,
				scale: 1.01,
			}}
			transition={{ duration: 0.15 }}
			whileTap={{ boxShadow: "var(--shadow-xs)", y: 6, x: isEven ? 6 : -6 }}
		>
			<motion.div
				className="absolute top-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-purple-500"
				initial={{ width: 0 }}
				animate={{ width: isOpen ? "100%" : "0%" }}
				transition={{ duration: 0.4, ease: "easeInOut" }}
			/>

			<motion.div
				className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-yellow-400/10 blur-2xl"
				animate={{
					scale: isOpen ? [1, 1.5, 1] : 1,
					opacity: isOpen ? [0.3, 0.6, 0.3] : 0.1,
				}}
				transition={{
					duration: 2,
					repeat: isOpen ? Infinity : 0,
					ease: "easeInOut",
				}}
			/>

			<button
				onClick={onClick}
				className="relative z-10 flex w-full items-center justify-between p-6 text-left"
			>
				<div className="flex items-center gap-3">
					{/* آیکون با انیمیشن منحصر‌به‌فرد */}
					<motion.div
						animate={{
							rotate: isOpen ? [0, 360] : 0,
							scale: isOpen ? [1, 1.2, 1] : 1,
						}}
						transition={{
							duration: 0.6,
							ease: "easeInOut",
						}}
					>
						<Icon className="h-5 w-5 text-yellow-400" />
					</motion.div>

					<h3 className="text-lg font-semibold text-white">{question}</h3>
				</div>

				<motion.div
					animate={{
						rotate: isOpen ? 180 : 0,
						scale: isOpen ? 1.2 : 1,
					}}
					whileHover={{ scale: 1.3 }}
					transition={{ type: "spring", damping: 10, stiffness: 200 }}
				>
					<ChevronDown className="text-white" />
				</motion.div>
			</button>

			<AnimatePresence mode="wait">
				{isOpen && (
					<motion.div
						initial={{
							height: 0,
							opacity: 0,
							y: -20,
							rotateX: -15,
						}}
						animate={{
							height: "auto",
							opacity: 1,
							y: 0,
							rotateX: 0,
						}}
						exit={{
							height: 0,
							opacity: 0,
							y: -20,
							rotateX: -15,
						}}
						transition={{
							duration: 0.4,
							type: "spring",
							damping: 15,
							stiffness: 150,
						}}
						className="overflow-hidden"
						style={{ transformStyle: "preserve-3d" }}
					>
						<motion.p
							className="px-6 pb-6 font-text text-white"
							initial={{ opacity: 0, x: isEven ? -20 : 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: isEven ? 20 : -20 }}
							transition={{ duration: 0.3, delay: 0.1 }}
						>
							{answer}
						</motion.p>

						{/* دکوریشن پایین */}
						<motion.div
							className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"
							initial={{ width: 0, left: isEven ? "0%" : "100%" }}
							animate={{
								width: "100%",
								left: "0%",
							}}
							transition={{ duration: 0.6, ease: "easeInOut" }}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export const Faq = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section className="relative min-h-screen overflow-hidden py-32">
			{/* پس‌زمینه داینامیک */}
			<motion.div
				className="absolute inset-0 -z-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl" />
				<div className="bg-brown-500 absolute right-10 bottom-20 h-64 w-64 rounded-full blur-3xl" />
				<div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
			</motion.div>

			<div className="relative z-10 mx-auto max-w-5xl px-6">
				<motion.div
					variants={headerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="mb-16 text-center"
				>
					<motion.div
						whileHover={{ scale: 1.05, rotate: -2 }}
						transition={{ type: "spring", damping: 10 }}
					>
						<Badge variant={"solid"} className="my-5">
							<span className="flex items-center gap-2">
								<Sparkles className="h-4 w-4" />
								Frequently Asked Questions
								<Sparkles className="h-4 w-4" />
							</span>
						</Badge>
					</motion.div>

					<motion.h2
						className="text-5xl font-bold text-white"
						whileHover={{ scale: 1.02 }}
						transition={{ type: "spring", damping: 15 }}
					>
						Got Questions?
					</motion.h2>

					<motion.p
						className="mt-4 font-text font-semibold text-white/80"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
					>
						Everything you need to know about working with me.
					</motion.p>
				</motion.div>

				<div className="space-y-4">
					{faqItems.map((item, index) => (
						<FAQItem
							key={index}
							question={item.question}
							answer={item.answer}
							isOpen={openIndex === index}
							onClick={() => setOpenIndex(openIndex === index ? null : index)}
							index={index}
							icon={item.icon}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

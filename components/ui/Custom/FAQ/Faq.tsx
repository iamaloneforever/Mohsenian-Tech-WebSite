"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants, stagger } from "motion/react";
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

// ─── Parent Container (Stagger) ──────────────────────────
const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: stagger(0.5),
		},
	},
};

// ─── Item Entrance (no open/closed here) ─────────────────
const parentitemVariants: Variants = {
	hidden: (isEven: boolean) => ({
		opacity: 0,
		x: isEven ? -100 : 100,
		scale: 0.9,
	}),

	visible: {
		opacity: 1,
		x: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 110,
			damping: 16,
		},
	},
};
const itemVariants: Variants = {
	initial: {
		boxShadow: "var(--shadow-md)",
	},
	hover: {
		boxShadow: "var(--shadow-sm)",
		y: 6,
		x: 6,
		scale: 1.01,
		transition: { duration: 0.15 },
	},
	tap: {
		boxShadow: "var(--shadow-xs)",
		y: 10,
		x: 10,
		scale: 0.99,
		transition: { duration: 0.1 },
	},
};

// ─── Internal animations (open/closed) ───────────────────
const barVariants: Variants = {
	closed: { width: "0%" },
	open: {
		width: "100%",
		transition: { duration: 0.4, ease: "easeInOut" },
	},
};

const glowVariants: Variants = {
	closed: { scale: 1, opacity: 0.1 },
	open: {
		scale: [1, 1.5, 1],
		opacity: [0.3, 0.6, 0.3],
		transition: {
			duration: 2,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

const iconVariants: Variants = {
	closed: { rotate: 0, scale: 1 },
	open: {
		rotate: 360,
		scale: [1, 1.2, 1],
		transition: {
			rotate: { duration: 0.6, ease: "easeInOut" },
			scale: { duration: 0.6, ease: "easeInOut" },
		},
	},
};

const chevronVariants: Variants = {
	closed: { rotate: 0, scale: 1 },
	open: {
		rotate: 180,
		scale: 1.2,
		transition: { type: "spring", damping: 12, stiffness: 180 },
	},
	hover: { scale: 1.3, transition: { duration: 0.15 } },
};

// ─── Answer Content (expand/collapse) ────────────────────
const contentVariants: Variants = {
	hidden: {
		height: 0,
		opacity: 0,
		y: -20,
		rotateX: -15,
		filter: "blur(4px)",
	},
	visible: {
		height: "auto",
		opacity: 1,
		y: 0,
		rotateX: 0,
		filter: "blur(0px)",
		transition: {
			type: "spring",
			damping: 16,
			stiffness: 140,
			duration: 0.4,
		},
	},
	exit: {
		height: 0,
		opacity: 0,
		y: -20,
		rotateX: -15,
		filter: "blur(4px)",
		transition: { duration: 0.3, ease: "easeInOut" },
	},
};

// Answer text slide‑in
const textVariants: Variants = {
	hidden: (isEven: boolean) => ({
		opacity: 0,
		x: isEven ? -20 : 20,
	}),
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.35, delay: 0.1, ease: "easeOut" },
	},
	exit: (isEven: boolean) => ({
		opacity: 0,
		x: isEven ? 20 : -20,
		transition: { duration: 0.25 },
	}),
};

// Bottom decorative line
const lineVariants: Variants = {
	hidden: (isEven: boolean) => ({
		width: 0,
		left: isEven ? "0%" : "100%",
		opacity: 0,
	}),
	visible: {
		width: "100%",
		left: "0%",
		opacity: 1,
		transition: { duration: 0.6, ease: "easeInOut", delay: 0.2 },
	},
};

// ─── Header ────────────────────────────────────────────────
const headerVariants: Variants = {
	hidden: {
		opacity: 0,
		y: -50,
		scale: 0.9,
		filter: "blur(8px)",
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		filter: "blur(0px)",
		transition: {
			type: "spring",
			damping: 15,
			stiffness: 150,
			duration: 0.8,
		},
	},
};

// ─── FAQ Item ─────────────────────────────────────────────
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
			variants={itemVariants}
			initial="initial"
			whileHover="hover"
			whileTap="tap"
		>
			{/* Top progress bar */}
			<motion.div
				className="absolute top-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-purple-500"
				variants={barVariants}
				animate={isOpen ? "open" : "closed"}
			/>

			{/* Glow blob */}
			<motion.div
				className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-yellow-400/10 blur-2xl"
				variants={glowVariants}
				animate={isOpen ? "open" : "closed"}
			/>

			<button
				onClick={onClick}
				className="relative z-10 flex w-full items-center justify-between p-6 text-left"
			>
				<div className="flex items-center gap-3">
					<motion.div
						variants={iconVariants}
						animate={isOpen ? "open" : "closed"}
					>
						<Icon className="h-5 w-5 text-yellow-400" />
					</motion.div>
					<h3 className="text-lg font-semibold text-white">{question}</h3>
				</div>

				<motion.div
					variants={chevronVariants}
					animate={isOpen ? "open" : "closed"}
					whileHover="hover"
				>
					<ChevronDown className="text-white" />
				</motion.div>
			</button>

			{/* Answer content with AnimatePresence */}
			<AnimatePresence mode="wait">
				{isOpen && (
					<motion.div
						variants={contentVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="overflow-hidden"
						style={{ transformStyle: "preserve-3d" }}
					>
						<motion.p
							className="px-6 pb-6 font-text text-white"
							variants={textVariants}
							custom={isEven}
							initial="hidden"
							animate="visible"
							exit="exit"
						>
							{answer}
						</motion.p>

						<motion.div
							className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"
							variants={lineVariants}
							custom={isEven}
							initial="hidden"
							animate="visible"
							exit="hidden"
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

// ─── Main ──────────────────────────────────────────────────
export const Faq = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section className="relative min-h-screen overflow-hidden py-32">
			{/* Background decorations */}
			<motion.div
				className="absolute inset-0 -z-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				<motion.div
					className="absolute top-20 left-10 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl"
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
				/>
				<motion.div
					className="absolute right-10 bottom-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
				/>
				<motion.div
					className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl"
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
				/>
			</motion.div>

			<div className="px-3">
				{/* Header */}
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
						<Badge variant="solid" className="my-5">
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
						transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
					>
						Everything you need to know about working with me.
					</motion.p>
				</motion.div>

				{/* FAQ List – parent container controls stagger */}
				<motion.div
					className="space-y-4"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{faqItems.map((item, index) => (
						<motion.div
							key={index}
							custom={index % 2 === 0}
							variants={parentitemVariants}
						>
							<FAQItem
								question={item.question}
								answer={item.answer}
								isOpen={openIndex === index}
								onClick={() => setOpenIndex(openIndex === index ? null : index)}
								index={index}
								icon={item.icon}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

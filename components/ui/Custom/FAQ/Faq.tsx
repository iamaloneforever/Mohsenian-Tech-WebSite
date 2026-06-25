"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/retroui/Badge";

const faqItems = [
	{
		question: "What technologies do you use?",
		answer:
			"I mainly work with React, Next.js, TypeScript, Tailwind CSS, Node.js and modern web technologies.",
	},
	{
		question: "Can you build full-stack applications?",
		answer:
			"Yes. I can develop both frontend and backend applications using Next.js, Express, MongoDB, PostgreSQL and REST APIs.",
	},
	{
		question: "Do you create responsive designs?",
		answer:
			"Absolutely. Every project is optimized for desktop, tablet and mobile devices.",
	},
	{
		question: "Can I request custom features?",
		answer:
			"Of course. Every project can be tailored to fit your specific needs and requirements.",
	},
];

function FAQItem({
	question,
	answer,
	isOpen,
	onClick,
}: {
	question: string;
	answer: string;
	isOpen: boolean;
	onClick: () => void;
}) {
	return (
		<motion.div
			className="border-2 border-black bg-primary"
			animate={{
				boxShadow: isOpen ? "var(--shadow-xs)" : "var(--shadow-md)",
			}}
			whileHover={{ boxShadow: "var(--shadow-sm)", y: 4, x: 4 }}
			transition={{ duration: 0.1 }}
			whileTap={{ boxShadow: "var(--shadow-xs)", y: 6, x: 6 }}
		>
			<button
				onClick={onClick}
				className="flex w-full items-center justify-between p-6 text-left"
			>
				<h3 className="text-lg font-semibold text-white">{question}</h3>

				<motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
					<ChevronDown className="text-white" />
				</motion.div>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25 }}
						className="overflow-hidden"
					>
						<p className="px-6 pb-6 font-text text-white">{answer}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export const Faq = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section className="relative min-h-screen py-32">
			<div className="mx-auto max-w-5xl px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16 text-center"
				>
					<Badge variant={"solid"} className="my-5">
						Frequently Asked Questions
					</Badge>

					<h2 className="text-5xl font-bold text-white">Got Questions?</h2>

					<p className="mt-4 font-text font-semibold text-white">
						Everything you need to know about working with me.
					</p>
				</motion.div>

				<div className="space-y-4">
					{faqItems.map((item, index) => (
						<FAQItem
							key={index}
							question={item.question}
							answer={item.answer}
							isOpen={openIndex === index}
							onClick={() => setOpenIndex(openIndex === index ? null : index)}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

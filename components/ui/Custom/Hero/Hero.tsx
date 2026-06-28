"use client";

import CardHero from "./CardHero";
import { Info } from "./Info";
import { motion, stagger, Variants } from "motion/react";
const HeroVARIANT: Variants = {
	initial: {},
	animate: {
		transition: {
			delayChildren: stagger(1),
		},
	},
};

const InfoVARIANT: Variants = {
	initial: {
		y: -40,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
			type: "spring",
			damping: 15,
			stiffness: 100,
		},
	},
};

const CardVARIANT: Variants = {
	initial: {
		opacity: 0,
		x: "100vw",
		scale: 0,
		rotate: 30,
	},
	animate: {
		opacity: 1,
		x: 0,
		scale: 1,
		rotate: 0,
		transition: {
			duration: 1,
			type: "spring",
			damping: 15,
			stiffness: 100,
		},
	},
};

export default function Hero() {
	return (
		<motion.section
			id="hero"
			variants={HeroVARIANT}
			initial="initial"
			animate="animate"
			className="grid h-screen grid-cols-1 lg:grid-cols-2"
		>
			{/* Info */}
			<motion.div variants={InfoVARIANT}>
				<Info />
			</motion.div>

			{/* Card entrance animation */}
			<motion.div variants={CardVARIANT}>
				{/* Card hover animation */}
				<CardHero />
			</motion.div>
		</motion.section>
	);
}

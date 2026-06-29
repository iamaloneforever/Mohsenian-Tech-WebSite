"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function ScrollAnimatedSvg() {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end end"], // ✅ تمام شدن در نیمهٔ صفحه
	});

	const progress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	const pathLength = useTransform(progress, [0, 1], [0, 1]);
	const scrollScale = useTransform(progress, [0, 0.5, 1], [0.9, 1, 1.1]);

	return (
		<section ref={containerRef} className="relative h-full">
			<div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
				<motion.div
					style={{ scale: scrollScale }}
					className="flex h-full w-full items-center justify-center"
				>
					<motion.svg
						viewBox="0 0 193 622"
						width="300"
						height="auto"
						className="overflow-visible"
						fill="none"
					>
						<motion.path
							d="M39.144 6C39.144 6 199.47 224.75 175.57 306.174C151.671 387.597 32.1733 478.743 16.2403 539.507C0.307252 600.271 142.708 602.701 163.621 562.597C184.533 522.493 109.847 386.382 75.989 410.688C42.1314 434.993 105.863 706 105.863 706"
							stroke="#CE9137"
							strokeWidth="30"
							strokeLinecap="round"
							filter="url(#glow)"
							style={{ pathLength }}
						/>
					</motion.svg>
				</motion.div>
			</div>
		</section>
	);
}

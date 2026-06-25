"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function ScrollAnimatedSvg() {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const progress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	const pathLength = useTransform(progress, [0, 1], [0, 1]);
	const opacity = useTransform(progress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
	const scale = useTransform(progress, [0, 0.5, 1], [0.9, 1, 1.1]);

	return (
		<section ref={containerRef} className="relative h-full">
			<div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
				<motion.div
					style={{ scale, opacity }}
					className="w-full max-w-5xl px-8"
				>
					<motion.svg
						viewBox="0 0 1369 3776"
						className="h-auto w-full"
						fill="none"
					>
						<defs>
							<filter id="glow">
								<feGaussianBlur stdDeviation="10" result="blur" />
								<feMerge>
									<feMergeNode in="blur" />
									<feMergeNode in="SourceGraphic" />
								</feMerge>
							</filter>
						</defs>

						<path
							d="M120.005 40C120.005 40 592.005 40.0002 912.005 840C1232.01 1640 424.005 2296 120.005 1880C-183.995 1464 1552.01 1880 1304.01 2488C1056.01 3096 40.0052 3736 40.0052 3736"
							stroke="#3a3125"
							strokeWidth="80"
							strokeLinecap="round"
							opacity="0.2"
						/>

						{/* مسیر اصلی */}
						<motion.path
							d="M120.005 40C120.005 40 592.005 40.0002 912.005 840C1232.01 1640 424.005 2296 120.005 1880C-183.995 1464 1552.01 1880 1304.01 2488C1056.01 3096 40.0052 3736 40.0052 3736"
							stroke="#CE9137"
							strokeWidth="80"
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

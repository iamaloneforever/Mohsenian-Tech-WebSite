"use client";
import { motion } from "motion/react";
export const Background = () => {
	return (
		<div className="pointer-events-none inset-0">
			<svg
				className="absolute inset-0 h-full w-full"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<pattern
						id="diagonalLines"
						patternUnits="userSpaceOnUse"
						width="40"
						height="40"
						patternTransform="rotate(15)"
					>
						<motion.line
							x1="0"
							y1="0"
							x2="0"
							y2="40"
							stroke="var(--primary)"
							strokeWidth="20"
							opacity="0.5"
							animate={{
								y1: [0, -40, 0],
								y2: [40, 0, 40],
								opacity: [0.3, 0.7, 0.3],
								strokeWidth: [15, 25, 15],
							}}
							transition={{
								duration: 30,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>{" "}
					</pattern>{" "}
				</defs>
				<rect width="100%" height="100%" fill="url(#diagonalLines)" />
			</svg>
		</div>
	);
};

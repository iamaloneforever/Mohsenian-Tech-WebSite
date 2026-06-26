import { motion, stagger, Variants } from "motion/react";
import { useMemo } from "react";

type Animation = "fade" | "slide" | "pop" | "wave" | "glitch" | "typewriter";

interface TypewriterProps {
	children: string;
	className?: string;
	staggerDuration?: number;
	delay?: number;
	once?: boolean;
	onComplete?: () => void;
	animation?: Animation;
}

const spring = {
	type: "spring" as const,
	damping: 12,
	stiffness: 220,
};

const variants: Record<Animation, Variants> = {
	fade: {
		hidden: {
			opacity: 0,
			y: 8,
			filter: "blur(4px)",
		},
		visible: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: spring,
		},
	},

	slide: {
		hidden: {
			x: -20,
			opacity: 0,
			rotate: -8,
		},
		visible: {
			x: 0,
			opacity: 1,
			rotate: 0,
			transition: spring,
		},
	},

	pop: {
		hidden: {
			scale: 0,
			opacity: 0,
			rotate: 180,
		},
		visible: {
			scale: 1,
			opacity: 1,
			rotate: 0,
			transition: {
				type: "spring",
				stiffness: 320,
				damping: 10,
			},
		},
	},

	wave: {
		hidden: {
			opacity: 0,
			y: 20,
			rotate: -15,
		},
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			rotate: 0,
			transition: {
				...spring,
				delay: i * 0.02,
			},
		}),
	},

	glitch: {
		hidden: {
			opacity: 0,
			x: 10,
			y: -6,
			filter: "blur(6px)",
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			filter: "blur(0px)",
			transition: {
				type: "spring",
				stiffness: 150,
				damping: 8,
			},
		},
	},

	typewriter: {
		hidden: {
			opacity: 0,
			scaleX: 0,
			transformOrigin: "left",
		},
		visible: {
			opacity: 1,
			scaleX: 1,
			transformOrigin: "left",
			transition: {
				duration: 0.2,
				ease: "easeOut",
			},
		},
	},
};

export const Typewriter = ({
	children,
	className = "",
	staggerDuration = 0.06,
	delay = 0,
	once = true,
	onComplete,
	animation = "fade",
}: TypewriterProps) => {
	const chars = useMemo(() => Array.from(children), [children]);

	const container: Variants = {
		hidden: {},
		visible: {
			transition: {
				delayChildren: delay,
				staggerChildren: staggerDuration,
			},
		},
	};
	return (
		<motion.div
			className={className}
			style={{
				display: "inline-block",
				whiteSpace: "pre-wrap",
			}}
			initial="hidden"
			whileInView="visible"
			viewport={{
				once,
				amount: 0.6,
			}}
			variants={container}
			onAnimationComplete={onComplete}
		>
			{chars.map((char, index) => (
				<motion.span
					key={index}
					custom={index}
					variants={variants[animation]}
					style={{
						display: "inline-block",
					}}
				>
					{char}
				</motion.span>
			))}
		</motion.div>
	);
};

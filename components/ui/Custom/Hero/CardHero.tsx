"use client";
import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import Image from "next/image";
import { BriefcaseBusiness, Clock, Wrench } from "lucide-react";
import { motion, Variants } from "motion/react";

const CardVARIANT: Variants = {
	initial: {
		scale: 1,
		rotate: 0,
	},
	hover: {
		scale: 1.05,
		rotate: 5,
		transition: { duration: 1, type: "spring", damping: 15, stiffness: 100 },
	},
};

export default function CardHero() {
	return (
		<div className="flex justify-center items-center min-h-screen p-4">
			<motion.div variants={CardVARIANT} whileHover={"hover"}>
				<Card className="max-w-md w-full">
					<Card.Header className="space-y-4">
						<Card.Title>About Me</Card.Title>

						<div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
							<Image
								src="/CardPhoto.jpg"
								alt="Company SEO's Profile picture"
								fill
								className="object-cover"
							/>
						</div>

						<div className="flex gap-4 items-start py-4 flex-col border-t-2">
							<div className="flex items-center gap-2">
								<div className="relative w-10 h-10 flex-shrink-0">
									<Image
										src="/Avatar.jpg"
										alt="Company SEO's Profile picture"
										fill
										className="rounded-full border-2 object-cover"
									/>
								</div>
								<h1>Company Name </h1>
							</div>
							<p>@TechCompany</p>
							<p className="font-text text-sm text-gray-700 leading-relaxed">
								I can not find what to write here.. so imagine I wrote some good
								stuff.
							</p>
							<div className="flex justify-between w-full">
								<Badge>
									128 Work <BriefcaseBusiness className="mx-2" />{" "}
								</Badge>
								<Badge>
									28 Brands <Wrench className="mx-2" />{" "}
								</Badge>
								<Badge>
									1000+ hours <Clock className="mx-2" />{" "}
								</Badge>
							</div>
						</div>
					</Card.Header>
				</Card>
			</motion.div>
		</div>
	);
}

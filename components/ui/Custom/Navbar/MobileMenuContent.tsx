import { Button } from "@/components/retroui/Button";

export const MobileMenuContent = (props: {}) => {
	return (
		<div className="ml-4">
			<ul className="flex h-full w-full flex-col gap-3 text-lg">
				<li className="cursor-pointer transition-colors hover:text-gray-600">
					Home
				</li>
				<li className="cursor-pointer transition-colors hover:text-gray-600">
					Gallary
				</li>
			</ul>
		</div>
	);
};

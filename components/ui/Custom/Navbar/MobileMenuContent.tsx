export const MobileMenuContent = (props: {}) => {
	return (
		<div className="border-t-2">
			<ul className="mt-8 ml-2 flex h-full w-full flex-col gap-3 text-xl">
				<li className="cursor-pointer transition-colors hover:text-primary">
					Home
				</li>
				<li className="cursor-pointer transition-colors hover:text-primary">
					Gallary
				</li>
			</ul>
		</div>
	);
};

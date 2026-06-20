"use client";

import { useState } from "react";
import { Button } from "@/components/retroui/Button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose,
} from "@/components/ui/dialog";
import { Phone, Send } from "lucide-react";

export const Info = () => {
	return (
		<div className="flex flex-col gap-10 items-center justify-center h-full w-full">
			<h1 className="text-3xl">
				I Am{" "}
				<span className="text-primary font-extrabold text-4xl border-b-2 border-primary">
					Tech Company Name
				</span>
			</h1>

			<p className="text-gray-700 text-md font-text">Create Your Dreams</p>

			<div className="flex gap-10">
				<Dialog>
					<DialogTrigger asChild>
						<Button className=" bg-blue-400">
							Telegram <Send className="mx-2" />
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle className="text-xl">
								Are you absolutely sure?
							</DialogTitle>
							<DialogDescription className="font-text">
								@CompanyOwner_TELEGRAM
							</DialogDescription>
						</DialogHeader>
						<DialogFooter className="sm:justify-start">
							<Button type="button" className="w-full bg-blue-400">
								Message ME{" "}
							</Button>
							<DialogClose asChild>
								<Button type="button" className="w-full ">
									Close
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
				<Dialog>
					<DialogTrigger asChild>
						<Button className="bg-green-400">
							Call Me <Phone className="mx-2" />
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle className="text-xl">Call Me</DialogTitle>
							<DialogDescription className="font-text">
								{" "}
								from 9 to 10
							</DialogDescription>
						</DialogHeader>
						<DialogFooter className="sm:justify-start flex flex-col">
							<Button type="button" className="w-full bg-green-400">
								Call Me
							</Button>

							<DialogClose asChild>
								<Button type="button" className="w-full">
									Close
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};

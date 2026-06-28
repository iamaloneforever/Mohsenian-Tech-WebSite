"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
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
import { Button } from "@/components/retroui/Button";
import { Menu, Phone } from "lucide-react";
import { MobileMenuContent } from "./MobileMenuContent";
export default function MobileMenu() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button>
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-2xl">Menu</DrawerTitle>
        </DrawerHeader>
        <MobileMenuContent />
        <DrawerFooter className="border-t-2">
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
                  from 9 to 10
                </DialogDescription>
              </DialogHeader>

              <DialogFooter className="flex flex-col sm:justify-start">
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
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

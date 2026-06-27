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
import { Button } from "@/components/retroui/Button";
import { Menu } from "lucide-react";
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
          <Button>See Demos</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

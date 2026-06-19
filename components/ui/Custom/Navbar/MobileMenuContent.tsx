import { Button } from "@/components/retroui/Button";

export const MobileMenuContent = (props: {}) => {
  return (
    <div className=" ml-4">
      <ul className="flex flex-col h-full w-full gap-3 text-lg ">
        <li className="hover:text-gray-600 cursor-pointer transition-colors">
          Home
        </li>
        <li className="hover:text-gray-600 cursor-pointer transition-colors">
          Gallary
        </li>
      </ul>
    </div>
  );
};

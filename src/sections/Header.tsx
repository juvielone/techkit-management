"use client";
import { Bell, BellDot, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
export const Header = () => {
  const [hasNotification, setHasNotification] = useState(false);
  return (
    <header className="w-[80vw]">
      <nav className="flex items-end">
        <ul className="flex ml-auto  space-x-8">
          <li className="list-none">
            {hasNotification ? (
              <BellDot color="#4FE0B5" className="w-12 h-12" />
            ) : (
              <Bell className="w-8 h-8" />
            )}
          </li>
          <li className="list-none">
            <Settings className="w-8 h-8" />
          </li>
          <li className="list-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" className="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </li>
          <li className="list-none">
            <span className="text-2xl">Juvielone Lagos</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

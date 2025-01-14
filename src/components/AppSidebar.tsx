import {
  Sidebar,
  SidebarContent,
  SidebarGroupLabel,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
import logo from "../../public/images/logo.png";
const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroupLabel className="py-10 text-slate-900">
          <Image src={logo} alt="Logo" width={80} height={80} />
          <span className="font-bold text-4xl mx-auto">
            <span className="text-[#3F54D1]">Tech</span>Kit
          </span>
        </SidebarGroupLabel>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title} className="pt-4 ml-4">
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <div>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <span className="text-xl px-8">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;

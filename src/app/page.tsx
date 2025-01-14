"use client";
import { Bell, BellDot, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Header } from "@/sections/Header";
import { CardContent } from "@/sections/CardContent";
import DataCharts from "@/sections/DataCharts";
import DataTable from "@/sections/DataTable";
export default function Home() {
  return (
    <>
      <Header />
      <CardContent />
      <DataCharts />
      <DataTable />
    </>
  );
}

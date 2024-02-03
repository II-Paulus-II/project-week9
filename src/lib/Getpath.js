"use client"

/* ----- Global Imports ----- */
import { usePathname } from "next/navigation";

export default function GetPath() {
  //disgusting
  const pathname = usePathname();
  return pathname;
}
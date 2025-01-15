"use client";

import { Raleway } from "next/font/google";
import Header from "@/components/Header/index";
import SideBar from "@/components/SideBar";
import { MenuButton } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

const raleway = Raleway({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "300",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <SideBar open={open} setClose={() => setOpen(false)} />
        <Header>
          <MenuButton onClick={() => setOpen(true)}>
            <Bars3Icon className="size-8" />
          </MenuButton>
        </Header>
        {children}
      </body>
    </html>
  );
}

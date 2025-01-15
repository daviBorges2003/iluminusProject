"use client";

import { Menu, MenuButton } from "@headlessui/react";
import {
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Menu
      as="nav"
      className="bg-white w-screen h-24 flex lg:p-10 md:p-5 sm:p-3 shadow-lg  justify-between items-center"
    >
      {children}
      <div className="w-fit-content gap-10 flex justify-between items-center">
        <div className="flex gap-3">
          <img
            src="/ImageText.jpg"
            alt="User Image"
            className="size-12 rounded-full"
          />
          <div>
            <p className="font-bold">Davi Borges</p>
            <p className="font-thin">Adm</p>
          </div>
        </div>
        <MenuButton>
          <Cog6ToothIcon className="size-8" />
        </MenuButton>
        <MenuButton>
          <ArrowRightStartOnRectangleIcon className="size-8" />
        </MenuButton>
      </div>
    </Menu>
  );
}

export default Header;

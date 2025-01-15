import { Disclosure ,Menu,MenuButton } from "@headlessui/react";
import Image from "next/image";
import {Bars3Icon } from "@heroicons/react/24/solid"; 
import {Cog6ToothIcon , ArrowRightStartOnRectangleIcon} from "@heroicons/react/24/outline";

function Header() {
  return (
    <Menu as="nav" className="bg-white lg:p-10 shadow-lg h-24 flex justify-between items-center">
        <MenuButton>
          <Bars3Icon className="size-8"/> 
        </MenuButton>
        <Menu as="div" className="w-1/4 flex justify-between items-center">
          <div className="flex">
            <Image className="rounded-full" src="/ImageText.jpg" alt="Image" width={40} height={40}/>
            <h1>NickName</h1>
          </div>
          <MenuButton>
            <Cog6ToothIcon className="size-6"/>
          </MenuButton>
          <MenuButton>
            <ArrowRightStartOnRectangleIcon className="size-6"/>
          </MenuButton>
        </Menu>
    </Menu>
  )
} 

export default Header

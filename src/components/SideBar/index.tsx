"use client";

import React, { MouseEventHandler } from "react";
import { Dialog } from "@headlessui/react";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface PropsTypes {
  open: boolean;
  setClose: MouseEventHandler<HTMLButtonElement>;
}

function SideBar({ open, setClose }: PropsTypes) {
  return (
    <Dialog
      open={open}
      onClose={() => setClose}
      className={`absolute flex-column bg-white top-0 w-96 h-screen overflow-y-auto shadow-lg lg:p-5`}
    >
      <button onClick={setClose}>
        <XMarkIcon className="size-8" />
      </button>
      <ul className="flex flex-col divide-y divide-gray-200 gap-6">
        <li>
          <div>
            <p className="font-thin text-gray-500">Adm</p>
            <p className="font-bold text-lg">Cadastros e Informações</p>
          </div>
        </li>
        <li className="flex flex-col gap-3 py-5">
          <Link
            href="/Alunos"
            className="flex flex-row align-center rounded-3xl gap-4 p-2 hover:bg-gray-100"
          >
            <StarIcon className="size-6" />
            <div>
              <p className="font-normal">Alunos</p>
              <p className="text-gray-600">Cadastro</p>
            </div>
          </Link>
          <Link
            href="/Funcionarios"
            className="flex flex-row align-center rounded-3xl gap-4 p-2 hover:bg-gray-100"
          >
            <StarIcon className="size-6" />
            <div>
              <p className="font-normal">Funcionarios</p>
              <p className="text-gray-600">Cadastro</p>
            </div>
          </Link>
          <Link
            href="/Alunos"
            className="flex flex-row align-center rounded-3xl gap-4 p-2 hover:bg-gray-100 "
          >
            <StarIcon className="size-6" />
            <div>
              <p className="font-normal">Disciplinas</p>
              <p className="text-gray-600">Informações de Classes</p>
            </div>
          </Link>
        </li>
      </ul>
    </Dialog>
  );
}

export default SideBar;

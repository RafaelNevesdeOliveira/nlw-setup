import { useState } from "react";
import logo from "../assets/logo.svg";
import { Plus, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { NewHabitForm } from "./NewHabitForm";

export function Header() {
  return (
    <div className="w-full max-w-3x1 mx-auto flex items-center justify-between">
      <img src={logo} alt="Habits" />

      <Dialog.Root>
        <Dialog.Trigger>
          <button
            type="button"
            className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
          >
            <Plus size={20} className="text-violet-500" />
            Novo hábito
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          {/* Overlay --> aquele overlay que fica no fundo do modal */}
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
              <X size={24} aria-label="Fechar"></X>
            </Dialog.Close>
            <Dialog.Title className="text-3x1 leading-tight font-extrabold">
              <NewHabitForm></NewHabitForm>
            </Dialog.Title>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

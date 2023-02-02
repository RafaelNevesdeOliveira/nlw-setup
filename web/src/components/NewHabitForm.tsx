import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form className="w-fyll flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">Qual seu comprometimento</label>
      <input
        type="text"
        id="title"
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        placeholder="ex..: Exercitar 3x por semana, etc..."
        autoFocus
      />
      <label htmlFor="" className="mt-4 font-semibold leading-tight">Qual a frequência?</label>
      <button type="submit" className="mt-6 rounded-lg p-4 flex justify-center items-center gap-3 font-semibold bg-green-600 hover:bg-green-500">
        <Check size={20} weight="bold">
          Confirmar
        </Check>
      </button>
    </form>
  );
}

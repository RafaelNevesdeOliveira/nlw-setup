import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from './ProgressBar';

export function HabitDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className="w-10 h-10 bg-zinc-900 bottom-2 border-zinc-800 rounded-lg">
        <Popover.Content className="bg-zinc-900 border-zinc-800 rounded-2xl min-w-[320px] p-6 flex flex-col items-start">
          <span className="font-semibold text-zinc-400">terça-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            02/01
          </span>
          <ProgressBar progress={50}/>
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Trigger>
    </Popover.Root>
  );
}

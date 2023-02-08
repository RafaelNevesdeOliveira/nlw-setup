import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";
import clsx from "clsx";

interface HabitDayProps {
  completed: number;
  amount: number;
}

export function HabitDay(props: HabitDayProps) {
  const amountCompletedPercentage = Math.round(
    (props.completed / props.amount) * 100
  );

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "w-10 h-10 border-2 rounded-lg",
          {
            'bg-violet-500 border-violet-200': amountCompletedPercentage >= 80,
            'bg-violet-600 border-violet-300':
              amountCompletedPercentage >= 60 && amountCompletedPercentage < 80,
            'bg-violet-700 border-violet-400':
              amountCompletedPercentage >= 40 && amountCompletedPercentage < 60,
            'bg-violet-800 border-violet-500':
              amountCompletedPercentage >= 20 && amountCompletedPercentage < 40,
            'bg-violet-900 border-violet-600':
              amountCompletedPercentage > 0 && amountCompletedPercentage < 20,
            'bg-zinc-900 border-zinc-800': amountCompletedPercentage === 0,
          }
        )}
      >
        <Popover.Content className="bg-zinc-900 border-zinc-800 rounded-2xl min-w-[320px] p-6 flex flex-col items-start">
          <span className="font-semibold text-zinc-400">terça-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            02/01
          </span>
          <ProgressBar progress={50} />
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Trigger>
    </Popover.Root>
  );
}

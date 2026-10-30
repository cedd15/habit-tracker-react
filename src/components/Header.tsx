import { format, isToday } from "date-fns";
import { useHabits } from "../context/useHabits";
import { Button } from "./Button";

type HeaderProps = {
  visibleDates: Date[];
  onPrevWeek: () => void;
  onNextWeek: () => void;
};

export function Header({ visibleDates, onPrevWeek, onNextWeek }: HeaderProps) {
  const { habits } = useHabits();

  const doneHabits = habits.filter((habit) => habit.completionDates?.some(completedDay => isToday(completedDay))).length;
  const totalHabits = habits.length;

  const dateRange =`${format(visibleDates[0], "MMM d")} - ${format(visibleDates[visibleDates.length - 1], "MMM d")}`;

  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Habit Tracker</h1>
        <span className="text-zinc-400 text-sm">{doneHabits} / {totalHabits} done today</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-zinc-400 text-sm">{dateRange}</span>
        <div className="flex items-center gap-3">
          <Button variant="primary" onClick={onPrevWeek}>
            Prev
          </Button>
          <Button variant="primary" onClick={onNextWeek} disabled={visibleDates.some(date => isToday(date))}>
            Next
          </Button>
        </div>
      </div>
    </header>
  )
}
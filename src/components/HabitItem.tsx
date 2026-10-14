import { eachDayOfInterval, endOfWeek, format, isFuture, startOfWeek } from "date-fns";
import type { Habit } from "../types/Habit";
import { Button } from "./Button";

type HabitItemProps = {
    habit: Habit;
}

export function HabitItem({ habit }: HabitItemProps) {
    const visibleDates = eachDayOfInterval({
        start: startOfWeek(new Date(), { weekStartsOn: 1 }),
        end: endOfWeek(new Date(), { weekStartsOn: 1 })
    });

    return (
        <div className="bg-zinc-800 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="font-medium">{habit.name}</span>
                    <span className="text-sm text-amber-400">Last done: 2 days ago</span>
                </div>
                <Button variant="danger">Delete</Button>
            </div>
            <div className="grid grid-cols-7 gap-1.5">
                {visibleDates.map((date) => (
                    <Button key={date.toISOString()} disabled={isFuture(date)} variant="primary" className="min-w-0 !px-1 flex flex-col">
                        <span className="font-medium">{format(date, "EEE")}</span>
                        <span className="text-sm">{format(date, "d")}</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}
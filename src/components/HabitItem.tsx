import { eachDayOfInterval, endOfWeek, format, isFuture, isSameDay, startOfDay, startOfWeek, subDays } from "date-fns";
import type { Habit } from "../types/Habit";
import { Button } from "./Button";

type HabitItemProps = {
    habit: Habit;
    onDeleteHabit: (id: string) => void;
    onToggleHabitCompletion: (id: string, date: Date) => void;
}

export function HabitItem({ habit, onDeleteHabit, onToggleHabitCompletion }: HabitItemProps) {
    const visibleDates = eachDayOfInterval({
        start: startOfWeek(new Date(), { weekStartsOn: 1 }),
        end: endOfWeek(new Date(), { weekStartsOn: 1 })
    });

    const streak = calculateStreaks(habit.completionDates ?? []);

    return (
        <div className="bg-zinc-800 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="font-medium">{habit.name}</span>
                    <span className="text-sm text-amber-400">
                        Streak: {streak} {streak === 1 ? "day" : "days"}
                    </span>
                </div>
                <Button variant="danger" className="text-sm" onClick={() => onDeleteHabit(habit.id)}>
                    Delete
                </Button>
            </div>
            <div className="grid grid-cols-7 gap-1.5">
                {visibleDates.map((date) => (
                    <Button 
                        onClick={() => onToggleHabitCompletion(habit.id, date)}
                        key={date.toISOString()} 
                        disabled={isFuture(date)} 
                        variant={habit.completionDates?.some((d) => isSameDay(d, date)) ? "primary" : "secondary"}
                        className="min-w-0 !px-1 flex flex-col">
                        <span className="font-medium">{format(date, "EEE")}</span>
                        <span className="text-sm">{format(date, "d")}</span>
                    </Button>
                ))}
            </div>
        </div>
    )
}

function calculateStreaks(completionDates: Date[]): number {
    let streak = 0;
    let currentDate = new Date();

    while (completionDates.some((date) => isSameDay(date, currentDate))) {
        streak++;
        currentDate = subDays(currentDate, 1);
    }

    return streak;
}
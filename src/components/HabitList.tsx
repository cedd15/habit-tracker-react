import type { Habit } from "../types/Habit";
import { HabitItem } from "./HabitItem";

type HabitListProps = {
    habits: Habit[];
    onDeleteHabit: (id: string) => void;
    onToggleHabitCompletion: (id: string, date: Date) => void;
}

export function HabitList({ habits, onDeleteHabit, onToggleHabitCompletion }: HabitListProps) {
    if (habits.length === 0) {
        return <h1 className="text-zinc-400 text-center py-12">No habits yet.</h1>;
    }

    return <div className="flex flex-col gap-3">
        {habits.map((habit) => (
            <HabitItem 
                key={habit.id} 
                habit={habit} 
                onDeleteHabit={onDeleteHabit} 
                onToggleHabitCompletion={onToggleHabitCompletion} 
            />
        ))}
    </div>
}
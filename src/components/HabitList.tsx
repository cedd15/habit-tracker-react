import type { Habit } from "../types/Habit";
import { HabitItem } from "./HabitItem";

export function HabitList() {
    const habits : Habit[] = [
        {
            id: 1,
            name: "Drink Water",
        },
        {
            id: 2,
            name: "Exercise",
        },
        {
            id: 3,
            name: "Read a Book",
        }
    ];

    if (habits.length === 0) {
        return <h1 className="text-zinc-400 text-center py-12">No habits yet.</h1>;
    }

    return <div className="flex flex-col gap-3">
        {habits.map((habit) => (
            <HabitItem key={habit.id} habit={habit} />
        ))}
    </div>
}
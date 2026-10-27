import { useHabits } from "../context/useHabits";
import { HabitItem } from "./HabitItem";

export function HabitList() {
    const { habits } = useHabits();

    if (habits.length === 0) {
        return <h1 className="text-zinc-400 text-center py-12">No habits yet.</h1>;
    }

    return <div className="flex flex-col gap-3">
        {habits.map((habit) => (
            <HabitItem 
                key={habit.id} 
                habit={habit} 
            />
        ))}
    </div>
}
import { useState } from "react";
import type { Habit } from "../types/Habit";
import { HabitContext } from "./useHabits";



export function HabitProvider({ children }: { children: React.ReactNode }) {
    const [habits, setHabits] = useState<Habit[]>([]);

    function handleAddHabit(name: string) {
        const newHabit: Habit = {
        id: crypto.randomUUID(),
        name,
        }

        setHabits((prev) => [...prev, newHabit]);
    }

    function handleDeleteHabit(id: string) {
        setHabits((prev) => prev.filter((habit) => habit.id !== id));
    }

    function handleToggleHabitCompletion(id: string, date: Date) {
        setHabits((prev) => 
        prev.map((habit) => {
            if (habit.id !== id) 
            return habit;

            const hasMatch = habit.completionDates?.some((completion) => completion.toDateString() === date.toDateString());

            if (hasMatch) {
            return {
                ...habit,
                completionDates: habit.completionDates?.filter((completion) => completion.toDateString() !== date.toDateString()),
            }
            }

            return {
            ...habit,
            completionDates: [...(habit.completionDates || []), date],
            }
        })
        );
    }
    
    return <HabitContext value={{ habits, addHabit: handleAddHabit, deleteHabit: handleDeleteHabit, toggleHabitCompletion: handleToggleHabitCompletion }}>
        {children}
    </HabitContext>
}


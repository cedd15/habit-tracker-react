import { createContext, useContext } from "react";
import type { Habit } from "../types/Habit";

type Context = {
    habits: Habit[];
    addHabit: (name: string) => void;
    deleteHabit: (id: string) => void;
    toggleHabitCompletion: (id: string, date: Date) => void;
}

export const HabitContext = createContext<Context | null>(null);

export function useHabits() {
    const habitContext = useContext(HabitContext)

    if (!habitContext) {
        throw new Error("useHabits must be used within a HabitProvider");
    }

    return habitContext;
}
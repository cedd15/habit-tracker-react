import { useState } from "react";
import { HabitForm } from "./components/HabitForm"
import { HabitList } from "./components/HabitList"
import { Header } from "./components/Header"
import type { Habit } from "./types/Habit";

export default function App() {
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

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm onAddHabit={handleAddHabit} />
      <HabitList habits={habits} onDeleteHabit={handleDeleteHabit} onToggleHabitCompletion={handleToggleHabitCompletion} />
    </div>
  )
}
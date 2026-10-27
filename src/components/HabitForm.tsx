import { useState } from "react";
import { Button } from "./Button";

type HabitFormProps = {
    onAddHabit?: (name: string) => void;
}

export function HabitForm({ onAddHabit }: HabitFormProps) {
  const [name, setName] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name) 
      return;

    onAddHabit?.(name);
    setName("");
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500" placeholder="New habit..." />
        <Button 
        disabled={!name}
        variant="primary" className="rounded-lg px-4 py-2 font-medium">Add Habit</Button>    
    </form>
  )
}
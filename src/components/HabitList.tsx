export function HabitList() {
    const habits = [
        {
            id: 1,
            title: "Drink Water",
            done: true
        },
        {
            id: 2,
            title: "Exercise",
            done: false
        },
        {
            id: 3,
            title: "Read a Book",
            done: true
        }
    ];

    if (habits.length === 0) {
        return <h1 className="text-zinc-400 text-center py-12">No habits yet.</h1>;
    }

    return <div className="flex flex-col gap-3">
        {habits.map((habit) => (
            <div key={habit.id} className="flex items-center gap-3 bg-zinc-800 rounded-lg px-4 py-3">
                <input type="checkbox" checked={habit.done} />
                <span className="text-zinc-300">{habit.title}</span>
            </div>
        ))}
    </div>
}
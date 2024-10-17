import { useTitle } from "@/App";
import { useEffect, useState } from "react";

export const HabitTracking = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Habit Tracking");
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchedHabits = [
      { id: 1, name: "Exercise", completed: false, streak: 3 },
      { id: 2, name: "Read", completed: true, streak: 1 },
      { id: 3, name: "Meditate", completed: false, streak: 7 },
    ];
    setHabits(fetchedHabits);
  }, []);

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {habits.map((habit) => (
          <li key={habit.id}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id={`habit-${habit.id}`}
                    name={`habit-${habit.id}`}
                    type="checkbox"
                    checked={habit.completed}
                    onChange={() => toggleHabit(habit.id)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`habit-${habit.id}`}
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {habit.name}
                  </label>
                </div>
                <div className="ml-2 flex-shrink-0 flex">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Streak: {habit.streak}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { useTitle } from "@/App";
import { useEffect, useState } from "react";

export const Home = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Dashboard");
  const [habits, setHabits] = useState([]);
  const [motivationalMessage, setMotivationalMessage] = useState("");

  useEffect(() => {
    const fetchedHabits = [
      { id: 1, name: "Exercise", progress: 5, streak: 3 },
      { id: 2, name: "Read", progress: 2, streak: 1 },
      { id: 3, name: "Meditate", progress: 7, streak: 7 },
    ];
    setHabits(fetchedHabits);

    const messages = [
      "You're doing great!",
      "Keep up the good work!",
      "Every day is a new opportunity!",
    ];
    setMotivationalMessage(
      messages[Math.floor(Math.random() * messages.length)]
    );
  }, []);

  return (
    <div className="overflow-hidden sm:rounded-lg">
      <h2 className="text-lg leading-6 font-medium text-gray-900 mb-5">
        {motivationalMessage}
      </h2>
      <div className="border shadow-sm rounded-md border-red-600">
        <dl>
          {habits.map((habit) => (
            <div
              key={habit.id}
              className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt className="text-sm font-medium text-gray-500">
                {habit.name}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Progress: {habit.progress} days | Streak: {habit.streak} days
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

import { useState } from "react";
import { useTitle } from "@/App";

export const HabitManagement = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Habit Management");
  const [newHabit, setNewHabit] = useState({
    name: "",
    goal: "",
    startDate: "",
    frequency: "daily",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHabit((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New habit:", newHabit);
    setNewHabit({ name: "", goal: "", startDate: "", frequency: "daily" });
  };

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add New Habit
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Create a new habit to track your progress.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Habit name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={newHabit.name}
                      onChange={handleInputChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="goal"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Goal
                    </label>
                    <input
                      type="number"
                      name="goal"
                      id="goal"
                      value={newHabit.goal}
                      onChange={handleInputChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="startDate"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Start date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      value={newHabit.startDate}
                      onChange={handleInputChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="frequency"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Frequency
                    </label>
                    <select
                      id="frequency"
                      name="frequency"
                      value={newHabit.frequency}
                      onChange={handleInputChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Habit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HabitManagement;

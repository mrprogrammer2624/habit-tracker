import { useTitle } from "@/App";
import { useState, useEffect } from "react";

export const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const { setHeaderText } = useTitle();
  setHeaderText("Notification");

  useEffect(() => {
    const fetchedNotifications = [
      { id: 1, message: "Don't forget to exercise today!", time: "10:00 AM" },
      {
        id: 2,
        message: "Great job completing your reading habit!",
        time: "2:00 PM",
      },
      { id: 3, message: "Meditation time in 30 minutes", time: "5:30 PM" },
    ];
    setNotifications(fetchedNotifications);
  }, []);

  return (
    <div className="">
      <ul className="divide-y divide-gray-200 overflow-y-auto">
        {notifications.map((notification) => (
          <li key={notification.id} className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-indigo-600 truncate">
                {notification.message}
              </p>
              <div className="ml-2 flex-shrink-0 flex">
                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {notification.time}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

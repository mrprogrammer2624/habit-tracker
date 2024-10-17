import { createContext, useContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import HabitManagementRoutes from "./Routes";

export const HeaderTextContext = createContext();

function App() {
  const [headerText, setHeaderText] = useState("");
  return (
    <HeaderTextContext.Provider value={{ headerText, setHeaderText }}>
      <RouterProvider router={HabitManagementRoutes} />
    </HeaderTextContext.Provider>
  );
}

export const useTitle = () => {
  return useContext(HeaderTextContext);
};

export default App;

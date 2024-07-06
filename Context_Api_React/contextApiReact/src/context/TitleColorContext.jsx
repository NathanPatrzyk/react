import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  switch (action.type) {
    case "PURPLE":
      return { ...state, color: "text-purple-500" };
    case "RED":
      return { ...state, color: "text-red-500" };
    case "BLUE":
      return { ...state, color: "text-blue-500" };
    default:
      return state;
  }
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, {
    color: "text-orange-500",
  });

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};

import React, { useReducer, createContext } from "react";
export const LayoutContext = createContext();

const initialState = {
  open: false,
  anchor: "left",
  variant: "temporary",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "openDrawer":
      return { ...state, open: true };
    case "closeDrawer":
      return { ...state, open: false };
    default:
      return { initialState };
  }
};

const LayoutContextProvider = (props) => {
  const [layoutState, dispatch] = useReducer(reducer, initialState);
  const value = { layoutState, dispatch };
  return (
    <LayoutContext.Provider value={value}>
      {props.children}
    </LayoutContext.Provider>
  );
};
export default LayoutContextProvider;

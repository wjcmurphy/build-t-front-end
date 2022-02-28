import React, { createContext, useState } from "react";

export const DataContext = createContext();

const initialState = {
  auth_token: '',
  user: {}
};

export const DataProvider = ({ children }) => {

  const [data, setData] = useState(initialState);

  return(
    <DataContext.Provider value={{
      data,
      setData
    }}>
      { children }
    </DataContext.Provider>
  );
}
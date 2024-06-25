import React, { createContext, useState } from "react";
import { useGetMoviesQuery } from "../common/apis/Features/movies/movieApiSlice";

const ContextApi = createContext({
  searchValue: "",
  setSearchValue: () => {}
});

const ContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const { data, error, isLoading } = useGetMoviesQuery(searchValue, {
    skip: !searchValue
  });

  return (
    <ContextApi.Provider
      value={{
        data,
        isLoading,
        error,
        searchValue,
        setSearchValue
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export { ContextApi, ContextProvider };

import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dataLoader = {
    isLoading,
    setIsLoading,
  };

  return (
    <LoaderContext.Provider value={dataLoader}>
      {children}
    </LoaderContext.Provider>
  );
};

const useLoader = () => useContext(LoaderContext);

export { LoaderProvider, useLoader };

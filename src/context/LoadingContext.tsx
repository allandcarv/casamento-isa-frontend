import React, { createContext, useState } from 'react';

interface LoadingContextData {
  loading: boolean;
  setLoading(value: boolean): void;
}

export const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData,
);

export const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

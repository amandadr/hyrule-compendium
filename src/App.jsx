import logo from "./logo.svg";
import "./App.css";
import React, { createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ListCategory from "./components/ListCategory";
import SearchBar from "./components/SearchBar";

import useCategoryData from "./hooks/useCategoryData";

export const ListContext = createContext();

export const ModalContext = createContext();

function App() {
  const { loading } = useCategoryData();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        scaleTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {loading && <div>Loading...</div>}
        </header>
        <div className="App-body">
          <SearchBar />
          {!loading && <ListCategory />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;

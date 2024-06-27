import React, { createContext, useState } from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Here we use context API

export const Context = createContext({
  isAuthenticated: false,
});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [mode, setMode] = useState("dark");

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        blogs,
        setBlogs,
        mode,
        setMode,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      <App />
    </Context.Provider>
  );
};

// we do not do work in APP here because we can not create a use state here
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <App /> */}
      <AppWrapper />
  </React.StrictMode>,
)
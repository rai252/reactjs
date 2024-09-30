import React from "react";
import Profile from "./components/Profile";
import Login from "./components/login";
import UserContextProvider from "./context/UserConterProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>React with chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;


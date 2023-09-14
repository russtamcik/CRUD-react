import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage ";
import LoginPage from "./pages/LoginPage";

function App() {
  const isAuthLocal = Boolean(localStorage.getItem("isAuth"));
  const [isAuth, setIsAuth] = useState(isAuthLocal);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

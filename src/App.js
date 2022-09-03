import "./App.css";
import Home from "./page/Home";
import Login from "./page/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const authStatus = useSelector((state) => state.user.authStatus);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={
            <ProtectedRoute authStatus={authStatus}  >
              <Home />
            </ProtectedRoute>
          }
          />
          <Route exact path="/login" element={<Login />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

const ProtectedRoute = ({ authStatus, children }) => {
  console.log("AUTH_STATUS =>", authStatus);

  if (!authStatus) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};
export default App;

import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { RouteNotFound } from "./utils/RouteNotFound";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Votacion } from "./pages/votacion/Votacion";
import { ProtectedRoute } from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <RouteNotFound>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/votacion"
            element={
              <ProtectedRoute allowedRoles={["votante"]}>
                <Votacion />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resultado"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Votacion />
              </ProtectedRoute>
            }
          />
        </RouteNotFound>
      </BrowserRouter>
    </>
  );
}

export default App;

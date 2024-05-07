import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { AuthProvider} from "./Auth";
import ValidateAuth from "./components/ValidateAuth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<ValidateAuth><Home /></ValidateAuth>} />
          <Route path="*" element={<NotFound title="404 Not Found" message="The page you are looking for does not exist."/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

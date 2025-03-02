import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./auth/signup";
import Login from "./auth/login";
import Profile from "./profile/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
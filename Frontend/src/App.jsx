import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./home/courses/Courses";
import Signup from "./Components/Signup";
import Contacts from "./home/contact/Contacts";
import { useAuth } from "./context/AuthProvider";
function App() {
  const [authUSer, setAuthUser] = useAuth();
  console.log(authUSer);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/course"
            element={authUSer ? <Courses /> : <Navigate to="/signup" />}
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/contact" element={<Contacts />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

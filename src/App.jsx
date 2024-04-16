import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./home/courses/Courses";
function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/course" element={<Courses />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import "./index.css";
import Home from "./Components/Home";
import Contacts from "./Components/Contacts";
import Blog from "./Components/Blog";
import Nav_bar from "./Components/Nav_bar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#fff5b4] w-screen h-screen  flex flex-col main_screen">
      <Nav_bar />
      <div className="w-full   grow  flex items-center justify-center z-50">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/contacts"
            element={
              <>
                <Contacts />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Blog />
              </>
            }
          />
        </Routes>
        <div
          className="absolute  links bg-[#ffc9fd] border-2 border-black top-[80px] right-[20px] p-4 flex items-center justify-center hidden"
          id="seccess_modal"
        >
          has been added successfully
        </div>
      </div>
    </div>
  );
}

export default App;

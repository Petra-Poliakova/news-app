import React from "react";
import { Routes, Route } from "react-router-dom";

//images

//styles
import "./styles/App.scss";

//components
import TheNavigation from "./components/TheNavigation";

//pages
import News from "./pages/News";

export const App = () => {
  return (
    <div className="App">
      <header>
        <TheNavigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route index element={<News />}></Route>
          {/* <Route path="/news" element={<News />}></Route> */}
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
};

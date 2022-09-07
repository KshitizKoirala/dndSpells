import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import SpellDetail from "./pages/SpellDetail/SpellDetail";
import NavBar from "./component/Navbar/NavBar";

import { SpellsContextProvider } from "./context/spells/spellsContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SpellsContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="spells/:index" element={<SpellDetail />} />
            <Route path="*" element={<div>Sorry Page Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </SpellsContextProvider>
    </div>
  );
}

export default App;

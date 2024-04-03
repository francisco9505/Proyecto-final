import "./App.css";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="header" element={<Header />} />
          <Route index element={<Main />} />
          <Route path="nav" element={<Nav />} />

          <Route path="footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

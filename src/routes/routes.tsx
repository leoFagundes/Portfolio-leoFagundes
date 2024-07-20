import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "src/pages/home";

const RoutesApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;

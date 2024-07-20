import { BrowserRouter, Route, Routes } from "react-router-dom";

const RoutesApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<>Testando</>} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;

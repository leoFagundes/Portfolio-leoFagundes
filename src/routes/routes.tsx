import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "src/pages/home";

// carregada só quando alguém acessa a rota, não pesa no site principal
const EasterEgg = lazy(() =>
  import("src/pages/easterEgg").then((module) => ({
    default: module.EasterEgg,
  }))
);

// iniciais das palavras em verde do "Sobre mim": Caixa Econômica Federal,
// Angular, freelancer e easter eggs = "cafe".
// Se mudar os destaques do texto, atualize aqui também.
const EASTER_EGG_PATH = "/cafe";

const RoutesApp = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={EASTER_EGG_PATH} element={<EasterEgg />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default RoutesApp;

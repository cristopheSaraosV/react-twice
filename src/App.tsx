import "bootstrap/dist/css/bootstrap.min.css";
import { LikesProvider } from "./context/likeContext";
import AppNavBar from "./core/navbar/navbar";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import MemberPage from "./pages/member";
import NoticiasPage from "./pages/noticias";

function App() {
  return (
    <LikesProvider>
      <AppContent />
    </LikesProvider>
  );
}

function AppContent() {

  return (
    <>
      <AppNavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Miembros" element={<MemberPage />} />
        <Route path="/Noticias" element={<NoticiasPage />} />
      </Routes>
    </>
  );
}

export default App;

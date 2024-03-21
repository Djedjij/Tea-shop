import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import "./App.scss";
import BlackHeader from "./components/layout/BlackHeader/BlackHeader";
import PanelButtons from "./components/UI/Buttons/PanelButtons/PanelButtons";
import DropHeader from "./components/UI/DropHeader/DropHeader";
import ButtonUp from "./components/UI/Buttons/ButtonUp/ButtonUp";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./utils/routes";
import ModalError from "./components/Error/ModalError";
import TeaPage from "./components/pages/TeaPage/TeaPage";
import DialogWindow from "./components/UI/DialogWindow/DialogWindow";
import Post from "./components/pages/Post/Post";
import { useEffect } from "react";

function App() {
  const pathName = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathName]);
  return (
    <div className="App">
      <BlackHeader />
      <DropHeader />
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Component />}
          />
        ))}
        <Route path="/shop/:teaId" element={<TeaPage />} />
        <Route path="/blog/:postId" element={<Post />} />
      </Routes>
      <PanelButtons />
      <ModalError />
      <Footer />
      <ButtonUp />
      <DialogWindow />
    </div>
  );
}

export default App;

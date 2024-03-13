import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import "./App.scss";
import BlackHeader from "./components/layout/BlackHeader/BlackHeader";
import PanelButtons from "./components/UI/Buttons/PanelButtons/PanelButtons";
import DropHeader from "./components/UI/DropHeader/DropHeader";
import ButtonUp from "./components/UI/Buttons/ButtonUp/ButtonUp";
import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import ModalError from "./components/Error/ModalError";
import TeaPage from "./components/pages/TeaPage/TeaPage";
import DialogWindow from "./components/UI/DialogWindow/DialogWindow";
import Post from "./components/Post/Post";
import HorizontalSlider from "./components/UI/Slider/HorizontalSlider/HorizontalSlider";
import { images } from "./utils/consts";

function App() {
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
      <HorizontalSlider images={images} />
    </div>
  );
}

export default App;

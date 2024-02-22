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
import AuthInput from "./components/UI/Inputs/AuthInput/AuthInput";
import LoginInput from "./components/UI/Inputs/AuthInput/LoginInput";

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
      </Routes>
      <PanelButtons />
      <ModalError />
      <Footer />
      <ButtonUp />
      <AuthInput />
      <LoginInput />
    </div>
  );
}

export default App;

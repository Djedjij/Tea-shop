import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Main from "./components/pages/Main/Main";
import "./App.scss";
import BlackHeader from "./components/layout/BlackHeader/BlackHeader";
import PanelButtons from "./components/UI/PanelButtons/PanelButtons";
import DropHeader from "./components/UI/DropHeader/DropHeader";
import ButtonUp from "./components/UI/ButtonUp/ButtonUp";
function App() {
  return (
    <div className="App">
      <BlackHeader />
      <DropHeader />
      <Header />
      <Main />
      <PanelButtons />
      <Footer />
      <ButtonUp />
    </div>
  );
}

export default App;

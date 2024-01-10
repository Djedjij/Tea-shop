import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Main from "./components/pages/Main/Main";
import "./App.scss";
import BlackHeader from "./components/layout/BlackHeader/BlackHeader";
import PanelButtons from "./components/UI/PanelButtons/PanelButtons";
function App() {
  return (
    <div className="App">
      <BlackHeader />
      <Header />
      <Main />
      <PanelButtons />
      <Footer />
    </div>
  );
}

export default App;

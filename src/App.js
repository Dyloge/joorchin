import "./App.css";
import { Header } from "./components/header/Header";
import Main from "./components/main/Main";
import OurServices from "./components/ourServices/OurServices";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <OurServices />
    </div>
  );
}

export default App;

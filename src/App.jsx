import "./App.css";
import { Cards } from "./Cards";
import { FooterSection } from "./FooterSection";
import { HeaderSection } from "./HeaderSection";

function App() {
  return (
    <div className="main">
      <HeaderSection />
      <h1>Hello</h1>
      <div className="row">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;

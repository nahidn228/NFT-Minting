import "./App.css";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NftForm from "./components/NftForm";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NftForm />
      <Gallery />
    </>
  );
}

export default App;

import Header from "./components/Header/index";
import Inrto from "./components/Intro/index";
import About from "./components/About/index";
import Works from "./components/Works/index";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer/index";
import "./app.scss";
function App() {
  return (
    <div className="App">  
      <Header/>
      <div className="sections">
        <Inrto/>
        <About/>
        <Works/> 
        <Contact/>
        <Footer/>
      </div>
     </div>
  );
}

export default App;

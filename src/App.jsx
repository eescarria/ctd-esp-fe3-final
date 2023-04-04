
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import { useContextGlobal } from "./Components/utils/global.context";



function App() {

  const {themeState} = useContextGlobal()

  return (
      <div className={themeState === "dark" ? "dark" : "App"}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/favs" element={<Favs/>}/>
          </Routes>
          <Footer/>
            
      </div>
  );
}

export default App;

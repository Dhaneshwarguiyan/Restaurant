import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from "./lib/components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallary from "./pages/Gallary";
import Menu from "./pages/Menu";
import Booking from "./pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element= {<Home/>}/>
          <Route path="menu" element= {<Menu/>}/>
          <Route path="gallery" element= {<Gallary/>}/>
          <Route path="about" element= {<About/>}/>
          <Route path="booking" element= {<Booking/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

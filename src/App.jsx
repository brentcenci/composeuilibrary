import './App.css'
import TopNavBar from "./components/TopNavBar.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import FooterSection from "./components/FooterSection.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ComponentsScreen from "./screens/ComponentsScreen.jsx";
import ScreensScreen from "./screens/ScreensScreen.jsx";
import Home from "./screens/Home.jsx";
import Components from "./screens/Components.jsx";
import Screens from "./screens/Screens.jsx";
import TestingLinesDesignFile from "./components/TestingLinesDesignFile.jsx";

function App() {

  return (
    <>
        <Router>
            <TopNavBar/>
            {/*<TestingLinesDesignFile/>*/}
            <Routes>
                <Route path="/oldhome" element={<HomeScreen/>}/>
                <Route path="/" element={<Home />}/>
                <Route path="/components" element={<Components />}/>
                <Route path="/screens" element={<Screens />}/>

                <Route path="/component/:category" element={<ComponentsScreen />}/>
                <Route path="/screen/:screen" element={<ScreensScreen />}/>

            </Routes>
            <FooterSection/>
        </Router>
    </>
  );
};

export default App

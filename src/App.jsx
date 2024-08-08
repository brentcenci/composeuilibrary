import './App.css'
import TopNavBar from "./components/TopNavBar.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import FooterSection from "./components/FooterSection.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ComponentsScreen from "./screens/ComponentsScreen.jsx";

function App() {

  return (
    <>
        <Router>
            <TopNavBar/>
            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/component/:category:id" element={<ComponentsScreen />}/>
            </Routes>
            <FooterSection/>
        </Router>
    </>
  );
};

export default App

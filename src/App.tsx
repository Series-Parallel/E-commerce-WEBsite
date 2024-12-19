import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import MainHomePage from "./components/MainHomePage";
import Product from "./components/Product";
import HeaderAd from "./components/HeaderAd";
import NavBar from "./components/NavBar";
import FooterAd from "./components/FooterAd";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Provider store={store}>
      <div className="overflow-x-hidden">
        <Router>
          <HeaderAd />
          <NavBar />

          <Routes>
            <Route path="/" element={<MainHomePage />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
          </Routes>

          <FooterAd />
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

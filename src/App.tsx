import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

const App = () =>  {

  return (
    <div className="container">
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<CheckoutPage />} />
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default App;

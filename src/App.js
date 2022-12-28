import Products from "./Components/ProductComponent/Products";
import Header from "./Components/Constants/Header";
import Checkout from "./Components/CheckOut/CheckOut";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Products />
              </>
            }
          ></Route>
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

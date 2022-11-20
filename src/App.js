import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/order" element={<OrderReview />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;

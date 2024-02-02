import Navbar from "./components/Navbar";
import { useState } from "react";
import "./App.css";
import CustomerData from "./components/CustomerData/CustomerData";
import AddCustomer from "./components/AddCustomer/AddCustomer";
import TiffinService from "./components/TiffinService/TiffinService";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerProfile from "./components/CustomerProfile/CustomerProfile";
import ItemsContainer from "./components/ItemsContainer";



function App() {
  const [Admin, setAdmin] = useState(false);

  return (
    <BrowserRouter>
      <Navbar setAdmin={setAdmin} Admin={Admin} />

      <Routes>
        <Route
          path="/"
          index
          element={Admin ? <ItemsContainer /> : null}
        ></Route>
        <Route path="/customerData" element={<CustomerData />}></Route>
        <Route path="/addCustomer" element={<AddCustomer />}></Route>
        <Route path="/CustomerProfile" element={<CustomerProfile />}></Route>
        <Route path="/tiffinService" element={<TiffinService />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

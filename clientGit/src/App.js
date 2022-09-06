import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { StoreHome } from "./components/StoreHome/StoreHome";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { AllShips } from "./components/AllShips/AllShips";
import { Cart } from "./components/Cart Modal/Cart";
import { ShipView } from "./components/ShipView/ShipView";
import { Login } from "./components/Login/Login";
import { useState } from "react";
import { EditProducts } from "./components/EditProducts/EditProducts";

function App() {
  const [ShowLogin, setShowLogin] = useState(false);
  const [UserDetails, setUserDetails] = useState();

  const showLoginHandler = () => {
    if (!UserDetails) {
      setShowLogin((prevState) => !prevState);
    } else {
      setUserDetails();
    }
  };

  let adminLinks = (
    <>
    </>
  );

  if(UserDetails){
    adminLinks = (
      <>
        <Route path="edit-products" element={<EditProducts />} />
      </>
    );
  }

  console.log(UserDetails);
  return (
    <BrowserRouter>
      <div className="App">
        <Header UserDetails={UserDetails} showLoginHandler={showLoginHandler} />
        <Routes>
          <Route path="/" element={<StoreHome UserDetails={UserDetails} />} />
          <Route path="all-ships" element={<AllShips />} />

          {adminLinks}
          <Route path="ship-view" element={<ShipView />}>
            <Route path=":invoiceId" element={<ShipView />} />
          </Route>
        </Routes>
        <Cart />
        <Login
          UserDetails={UserDetails}
          setUserDetails={setUserDetails}
          showLoginHandler={showLoginHandler}
          ShowLogin={ShowLogin}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

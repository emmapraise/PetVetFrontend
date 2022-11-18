import React from "react";
import Theme from "./Theme";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/homePage";
import Electronics from "./pages/products/Electronics";
import Computers from "./pages/products/Computers";
import Cars from "./pages/products/Cars";
import Furnitures from "./pages/products/Furnitures";
import ProductDescription from "./pages/products/ProductDescription";
import Phones_Accessories from "./pages/products/Phones_Accessories";
import Others from "./pages/products/Others";
import TopDeals from "./pages/products/TopDeals";
import Appointments from "./pages/dashboard/Appointments";
import emptyPurchases from "./pages/dashboard/emptyPurchase";
import Cart from "./pages/Cart";
import FilledCart from "./pages/FilledCart";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import RegisterClinic from "./pages/authentication/RegisterClinic";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import Checkout from "./pages/payments/Checkout";
import DirectDeposit from "./pages/payments/DirectDeposit";
import Dashboard from "./pages/dashboard";
import Diagnoses from "./pages/dashboard/Diagnoses";
import Profile from "./pages/dashboard/Profile";
import APIContextProvider from "./context/apiContext";

function App() {
  return (
    <APIContextProvider>
      <Theme>
        <>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/products/electronics"
                component={Electronics}
              />
              <Route exact path="/products/computers" component={Computers} />
              <Route exact path="/products/cars" component={Cars} />
              <Route exact path="/products/furnitures" component={Furnitures} />
              <Route exact path="/products/other_products" component={Others} />
              <Route
                exact
                path="/products/phones_accessories"
                component={Phones_Accessories}
              />
              <Route exact path="/products/topdeals" component={TopDeals} />
              <Route path="/products/:id" component={ProductDescription} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/registerClinic" component={RegisterClinic} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/cart" component={Cart} />
              <Route path="/filledCart" component={FilledCart} />
              <Route path="/appointments" component={Appointments} />
              <Route path="/emptyPurchases" component={emptyPurchases} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/direct-deposit" component={DirectDeposit} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/diagnoses" component={Diagnoses} />
              <Route path="/profile" component={Profile} />

              {/* <Route
            exact
            path="/user/:id"
            render={({ match }) => (
              <ProductDescription user={clients.find((p) => p.id === match.params.id)} />
            )}
          /> */}
              {/* <Route exact path="/comparables" component={Comparables} />
          <Route exact path="/companyPage" component={CompanyPage} />
          <Route exact path="/searchResult" component={SearchResult} /> */}
            </Switch>
          </Router>
        </>
      </Theme>
    </APIContextProvider>
  );
}

export default App;

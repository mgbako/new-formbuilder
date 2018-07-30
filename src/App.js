import { Notification } from "./containers/Notification";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./Router";
import Aux from "./hoc/Aux";
import React from "react";
import Classes from "./App.css";

export default () => (
  <div className={Classes.Pr}>
    <Aux>
      <Header />
      <ScrollToTop>
        <Router />
      </ScrollToTop>
      <Notification />
      <Footer />
    </Aux>
  </div>
);

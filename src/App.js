import { Notification } from "./containers/Notification";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Aux } from "./hoc/Auxilary";
import Router from "./Router";
import React from "react";
import Classes from "./App.css";

export default () => (
  <Aux>
    <div className={Classes.Pr}>
      <Header />
      <ScrollToTop>
        <Router />
      </ScrollToTop>
      <Notification />
      <Footer />
    </div>
  </Aux>
);

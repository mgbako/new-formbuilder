import { Notification } from "./containers/Notification";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Aux } from "./hoc/Auxilary";
import Router from "./Router";
import React from "react";
import "./App.css";

export default () => (
  <Aux>
    <Header />
    <ScrollToTop>
      <Router />
    </ScrollToTop>
    <Notification />
    <Footer />
  </Aux>
);

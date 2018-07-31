import { Notification } from "./containers/Notification";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Aux } from "./hoc/Auxilary";
import Router from "./Router";
import React from "react";
import Classes from "./App.css";

export default () => (
  <Aux className={Classes.Pr}>
    <div>
      <Header />
      <ScrollToTop>
        <Router />
      </ScrollToTop>
      <Notification />
      <Footer />
    </div>
  </Aux>
);

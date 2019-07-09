import React from "react";
import "../styles/Header.css";
import { Route, Switch, withRouter } from "react-router-dom";
import x1 from "../images/x1.jpg";
import x2 from "../images/x2.jpg";
import x3 from "../images/x3.jpg";

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={x1} alt="1234" />} />
        <Route path="/contact" render={() => <img src={x2} alt="1" />} />
        <Route path="/products" render={() => <img src={x3} alt="1" />} />
        <Route path="/admin" render={() => <img src={x3} alt="1" />} />
        <Route render={() => <img src={x2} alt="1xxx" />} />
      </Switch>
      {/* tworzymy bezpośrednio w Route element do wyświetlenia (render z funkcją) */}
    </>
  );
};

export default withRouter(Header);

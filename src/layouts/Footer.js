import React from "react";
import { Route } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      Stopka
      <Route
        path="/:page"
        exact
        render={props => {
          return (
            <>
              <p>Jesteś na stronie {props.match.params.page}</p>
            </>
          );
        }}
      />
      <Route
        path="/:page/:idProduct"
        exact
        render={props => {
          return (
            <>
              <p>
                Jesteś na stronie <span>{props.match.params.idProduct}</span>
              </p>
            </>
          );
        }}
      />
    </div>
  );
};

export default Footer;

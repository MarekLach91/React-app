import React from "react";
import "../styles/Login.css";

const LoginPage = () => {
  return (
    <div>
      <label htmlFor="">
        Podaj
        <input type="text" />
      </label>
      <label htmlFor="">
        Hasło
        <input type="password" />
      </label>
      <button>Zaloguj</button>
    </div>
  );
};

export default LoginPage;
 
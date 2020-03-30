import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./style.css";
import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

export default function logon() {
  return (
    <div className="div logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID" type="text" />
          <Link className="button" type="submit">
            Entrar
          </Link>

          <a href="/register">
            <FiLogIn size={16} color="e02141" />
            Não tenho cadastro
          </a>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}

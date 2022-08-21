// dependencies
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

// components
import Dropdown from "./dropdown/dropdown";
import ModalAuth from "../modal/ModalAuth";

// files
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/Vector.svg";
import { useEffect } from "react";
import { API } from "../../config/api";
import { useState } from "react";
import { useQuery } from "react-query";

export default function Navbar({ counter, setShow, show }) {
  const [state] = useContext(UserContext);
  const isLogin = state.isLogin;

  let { data: cart } = useQuery("cartsCache", async () => {
    const response = await API.get("/carts-id");
    return response.data.data;
  });

  return (
    <nav>
      <div>
        <Link to={state.user.status === "customer" ? "/" : "/transaction"}>
          <img src={Logo} alt="Logo" className="navbarLogo" />
        </Link>
      </div>
      {isLogin ? (
        <div className="navbarRight">
          <div
            className={
              cart === undefined
                ? "d-none"
                : cart?.length === 0
                ? "d-none"
                : "circle"
            }
          >
            {cart?.length}
          </div>
          <Link to={"/cart"}>
            <img
              src={Cart}
              alt="cart"
              className={
                state.user.status === "customer" ? "navbarCart" : "d-none"
              }
            />
          </Link>
          <Dropdown />
        </div>
      ) : (
        <div className="navbarLeft">
          <ModalAuth show={show} setShow={setShow} />
        </div>
      )}
    </nav>
  );
}

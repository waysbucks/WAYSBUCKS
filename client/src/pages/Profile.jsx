// dependencies
import React from "react";
import { Container } from "react-bootstrap";
import QRCode from "react-qr-code";
// import { useQuery } from "react-query";
// import { API } from "../config/api";

// file
import PhotoProfile from "../assets/Rectangle 12.png";
import Coffee from "../assets/coffee.jpg";
import Logo from "../assets/Logo.svg";

// component
import Navbar from "../components/navbar/navbar";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
//

export default function Profile() {
  const [state]= useContext(UserContext)
  console.log("check",state)
  return (
    <>
      <Navbar />
      <Container className="profileContainer">
        <div className="profileLeft">
          <h1>My Profil</h1>
          <div className="biodata">
            <img src={PhotoProfile} alt="Profile" />
            <ul>
              <li className="biodataTitle">FULL NAME</li>
              <li className="biodataContent">{state.user.name}</li>
              <li className="biodataTitle">Email</li>
              <li className="biodataContent">{state.user.email}</li>
            </ul>
          </div>
        </div>
        <div className="profileRight">
          <h1>My Transaction</h1>
          <div className="profileCard">
            <div className="contentCardLeft">
              <div className="mapContent">
                <img src={Coffee} alt="coffee" />
                <ul>
                  <li className="profileCardTitle">Capuchino</li>
                  <li className="profileCardDate">
                    <strong>Saturday</strong>,20 Oktober 2022
                  </li>
                  <li className="profileCardToping">
                    <strong>Toping</strong> : Bobba
                  </li>
                  <li className="profileCardPrice">Price: Rp.20.000</li>
                </ul>
              </div>
              <div className="mapContent">
                <img src={Coffee} alt="coffee" />
                <ul>
                  <li className="profileCardTitle">Ice Coffe Palm Sugar</li>
                  <li className="profileCardDate">
                    <strong>Saturday</strong>,20 Oktober 2022
                  </li>
                  <li className="profileCardToping">
                    <strong>Toping</strong> : Bobba,Jelly,Coklat
                  </li>
                  <li className="profileCardPrice">Price: Rp.20.000</li>
                </ul>
              </div>
            </div>
            <div className="contentCardRight">
              <img src={Logo} alt="logo" />

              <QRCode value="git re" bgColor="transparent" size={80} />
              <span>
                <p>On The Way</p>
              </span>
              <p className="profileSubTotal">Sub Total : Rp.69.000</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

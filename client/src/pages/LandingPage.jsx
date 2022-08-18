// dependencies
import { useContext, useState } from "react";
import Rupiah from "rupiah-format";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

// style
import cssModules from "../styles/home.module.css";

// file
import landing_2 from "../assets/land.2.png";

//fakedata
import dummyLandingPage from "../DataDummy/dummyLandingPage";

// component
import Navbar from "../components/navbar/navbar";

export default function LandingPage() {
  // user data
  const [state] = useContext(UserContext);
  // modal login
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(true);

  return (
    <>
      <Navbar setShow={setShow} show={show} />
      <div>
        <section>
          <div className={cssModules.landing_page}>
            <div className={cssModules.reactangle}>
              <span className={cssModules.text_inside}>
                <h3>WAYSBUCKS</h3>
                <span>
                  <p className={cssModules.p1}>
                    Things are changing, but we're still here for you <br />
                  </p>
                  <br />
                  <p>
                    We have temporarily closed our in-store cafes, but select{" "}
                    <br />
                    grocery and drive-thru location remaining open.
                    <br />
                    <strong className="cssModules.>">Waysbucks</strong> Driver
                    is also available <br />
                    <br />
                    let's Orderr...
                  </p>
                </span>
              </span>
              <div>
                <img className={cssModules.pitc} src={landing_2} alt="ok" />
              </div>
            </div>
          </div>
        </section>
        {/* <hr /> */}
        <section>
          <span className={cssModules.textofdown}>
            <p>Let's Order</p>
          </span>
          <div className={cssModules.landofdown}>
            {dummyLandingPage?.map((item, index) => (
              <div className={cssModules.card} key={index}>
                <div className={cssModules.card1}>
                  <Link
                    to={
                      state.isLogin === true ? `/detail-product/${item.id}` : ""
                    }
                    onClick={state.isLogin === false ? handleClick : ""}
                  >
                    <Card.Img variant="top" src={item.productImage} />
                  </Link>
                  <div className={cssModules.card2}>
                    <p className={cssModules.text1}>
                      {item.productName.substring(0, 20)}
                    </p>
                    <p className={cssModules.text2}>
                      {Rupiah.convert(item.price)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

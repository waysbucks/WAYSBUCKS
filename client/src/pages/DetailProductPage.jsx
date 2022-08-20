// dependencies
import { useParams } from "react-router-dom";
import Rupiah from "rupiah-format";
import { useState } from "react";

import productModules from "../styles/product.module.css"; // style
import checkToping from "../assets/checkToping.svg"; // file
import Navbar from "../components/navbar/navbar"; // component navbar

import dummyLandingPage from "../DataDummy/dummyLandingPage"; // dummyData
import dataTopping from "../DataDummy/dummyTopping";

import {useQuery} from "react-query";
import { API } from "../config/api";

export default function DetailProductPage() {
  // filter
  const params = useParams();
  const data = dummyLandingPage[parseInt(params.id - 1)];

  // check
  const [show, setShow] = useState(false);

  const handleCheck = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  // topping
  const [topping, setTopping] = useState([]);
  const handleChange = (e) => {
    let updateTopping = [...topping];
    if (e.target.checked) {
      updateTopping = [...topping, e.target.value];
    } else {
      updateTopping.splice(topping.indexOf(e.target.value));
    }
    setTopping(updateTopping);
  };

  // submit
  const [counter, setCounter] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  // tambah price
  let resultTotal = topping.reduce((a, b) => {
    return a + parseInt(b);
  }, 0);

  //take id
const{id} =useParams()
  // Fetching product data from database(product)
let { data: product } = useQuery('productCache', async () => {
  const response = await API.get('/product/'+ id);
  return response.data.data;
});
console.log(product)

let { data: toppings } = useQuery('toppingsCache', async () => {
  const response = await API.get('/toppings');
  return response.data.data;
});
console.log(toppings)

  return (
    <>
      <Navbar counter={counter} />
      <div>
        <section>
          <div className={productModules.wrap}>
            <div className={productModules.left}>
              <img src={product?.image} alt="oke" />
            </div>
            <div className={productModules.right}>
              <span className={productModules.name}>
                <p className={productModules.titleProduct}>
                  {data.productName}
                </p>
                <p className={productModules.priceBrown}>
                  {Rupiah.convert(data.price)}
                </p>
                <div className={productModules.toppings}>
                  {toppings?.map((item, index) => (
                    <div className={productModules.topping} key={index}>
                      <label
                        htmlFor={item.id}
                        className={productModules.checkContainer}
                      >
                        <input
                          type="checkbox"
                          id={item.id}
                          onChange={handleChange}
                          value={item.price}
                          name="toping"
                          className={productModules.testCheck}
                        />
                        <span></span>
                        <img
                          src={checkToping}
                          alt="check"
                          className={productModules.checkmark}
                        />
                        <img
                          src={item.image}
                          alt="1"
                          onClick={handleCheck}
                          className={productModules.imageTopping}
                        />
                      </label>
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </span>
              <div className={productModules.price}>
                <p>Total</p>
                <p>{Rupiah.convert(data.price + resultTotal)}</p>
              </div>
              <div className={productModules.btn_grp}>
                <button className={productModules.btn} onClick={handleSubmit}>
                  {" "}
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
import React, { useState } from "react";
import "./index.css";
import Swal from "sweetalert2";
import Box from "./components/Box";

export default function App() {
  // const [test, setTest] = useState(true);
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      count: 5,
      sarlavha: "lorem ipsum",
      like: false,
    },
    {
      id: 2,
      count: 9,
      sarlavha: "lorem ipsum",
      like: false,
    },
    {
      id: 3,
      count: 77,
      sarlavha: "lorem ipsum",
      like: false,
    },
    {
      id: 4,
      count: 81,
      sarlavha: "lorem ipsum",
      like: false,
    },
  ]);

  const increFunc = (ID) => {
    setData(data.map((c) => (c.id === ID ? { ...c, count: c.count + 1 } : c)));
  };

  function decreFunc(ID) {
    setData(data.map((p) => (p.id === ID ? { ...p, count: p.count - 1 } : p)));
  }

  const add_to_cart = (elem) => {
    if (!cart.find((p) => p.id === elem.id)) {
      setCart([...cart, elem]);
    }
    Swal.fire({
      position: "top-end",
      icon: cart.find((p) => p.id === elem.id) ? "warning" : "success",
      title: cart.find((p) => p.id === elem.id)
        ? "mahsulot savatda saqlangan"
        : "Mahsulot savatda saqlandi ",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const handleLike = (lfr) => {
    let obj = data.find((kfr) => kfr.id === lfr);
    Swal.fire({
      position: "top-end",
      icon: obj.like ? "warning" : "success",
      title: obj.like ? "afsusdamiz" : "Mahsulot yoqganidan hursandmiz",
      showConfirmButton: false,
      timer: 2000,
    });
    setData(data.map((y) => (y.id === lfr ? { ...y, like: !y.like } : y)));
    setCart(cart.map((y) => (y.id === lfr ? { ...y, like: !y.like } : y)));
  };

  return (
    <div>
      {/* <h1>test</h1>
      <button className="btn btn-primary" onClick={() => setTest(!test)}>
        change btn
      </button>
      <h2>{test ? "bor" : "yo'q"} </h2>
      <h1>test</h1> */}
      <div>
        <i className="fa-solid fa-cart-shopping"></i>
        {cart.length}
      </div>
      {data.map((item, index) => (
        <div key={item.id}>
          <button
            className="btn btn-success"
            onClick={() => increFunc(item.id)}
          >
            increment
          </button>
          <h2>sarlavha: {item.sarlavha} </h2>
          <div onClick={() => handleLike(item.id)}>
            {item.like ? (
              <i className="fa-solid fa-heart text-danger fs-5 "></i>
            ) : (
              <i className="fa-regular fa-heart fs-5"></i>
            )}
          </div>
          <h1>count: {item.count}</h1>
          <button className="btn btn-danger" onClick={() => decreFunc(item.id)}>
            decrement
          </button>
          <button
            onClick={() => add_to_cart(item)}
            className="btn btn-warning ms-3"
          >
            <i className="fa-solid fa-cart-plus"></i>
          </button>
          <hr />
        </div>
      ))}
      <Box cart={cart} />
    </div>
  );
}

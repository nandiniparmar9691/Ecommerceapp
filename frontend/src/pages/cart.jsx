import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:5000/api/cart/${userId}`)
      .then((res) => res.json())
      .then((data) => setCart(data))
      .catch((err) => console.error(err));
  }, [userId]);

  return (
    <>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item._id}>
            {item.title} - ₹{item.price}
          </div>
        ))
      )}
    </>
  );
}

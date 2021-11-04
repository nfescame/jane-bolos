import { createContext, useState } from "react";

export const ContextCart = createContext({});

export const AuthCartProviders = (props) => {
  const [cart, setCart] = useState({
    value: 0,
    products: [],
  });
  console.log(cart);

  return (
    <ContextCart.Provider value={{ cart, setCart }}>
      {props.children}
    </ContextCart.Provider>
  );
};

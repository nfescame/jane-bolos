import { createContext, useState } from "react";

export const ContextCart = createContext({});

export const AuthCartProviders = (props) => {
  const [cart, setCart] = useState({
    products: [],
  });

  return (
    <ContextCart.Provider value={{ cart, setCart }}>
      {props.children}
    </ContextCart.Provider>
  );
};

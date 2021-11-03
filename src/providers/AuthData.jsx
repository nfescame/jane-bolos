import React, { useEffect, useState } from "react";
import api from "../apis/api";
export const AuthContextData = React.createContext({});

export const AuthDataProviders = (props) => {
  const [provider, setProviders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await api.get("products");
        setProviders(result.data);
      } catch (err) {}
    })();

    return () => {};
  }, []);

  return (
    <AuthContextData.Provider value={{ provider }}>
      {props.children}
    </AuthContextData.Provider>
  );
};

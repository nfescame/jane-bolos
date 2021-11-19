import React, { useEffect, useState } from "react";
import api from "../apis/api";

export const AuthContextRequest = React.createContext({});

export const AuthRequestProviders = (props) => {
  const [provider, setProviders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await api.get("request/all");
        setProviders(result.data);
      } catch (err) {}
    })();

    return () => {};
  }, []);

  return (
    <AuthContextRequest.Provider value={{ provider }}>
      {props.children}
    </AuthContextRequest.Provider>
  );
};

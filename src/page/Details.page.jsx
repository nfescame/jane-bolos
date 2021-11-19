import React from "react";

export default function Details(props) {
  console.log(props.match.params);
  return (
    <div style={{ paddingTop: "3rem" }}>
      <h1 style={{ color: "#000" }}>details</h1>
    </div>
  );
}

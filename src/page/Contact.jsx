import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  function gotowhatsapp() {
    const url = "https://wa.me/5511991833956";

    window.open(url, "_blank").focus();
  }
  return (
    <>
      <div
        className='pt-5'
        style={{
          backgroundColor: "#FAEBD7",
          display: "flex",
          height: "100vh",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h5 className=' w-100 ' style={{ color: "#bd377a" }}>
          Nome: Janneide
        </h5>
        <Link to='#' style={{ textDecoration: "none" }}>
          <h5
            onClick={gotowhatsapp}
            className=' w-100 '
            style={{
              color: "#bd377a",
            }}
          >
            <span>
              Whatsapp: 11-99183-3956 <i class='fab fa-whatsapp-square'></i>
            </span>
          </h5>
        </Link>
        <h5 className=' w-100 ' style={{ color: "#bd377a" }}>
          Email: jane33080@gmail.com
        </h5>
      </div>
    </>
  );
}

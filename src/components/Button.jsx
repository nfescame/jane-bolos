import React from "react";

export default function ButtonComponent(props) {
  return (
    <button onClick={props.handleSubmit} type='submit'>
      {props.text}
    </button>
  );
}

import React from "react";

export default function InputForm(props) {
  const { name, value, onChange, label, type } = props;
  return (
    <>
      <div className='col-md-4'>
        <label htmlFor='validationCustom01' className='form-label'>
          {label}
        </label>
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          className='form-control'
          required
        />
      </div>
    </>
  );
}

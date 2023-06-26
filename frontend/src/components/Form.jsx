/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from "react";
import axios from "axios";

function Form() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.error(inputRef.current.files[0]);
    const avatar = new FormData();
    avatar.append("avatar", inputRef.current.files[0]);
    axios.post(`${backendUrl}/api/avatar`, avatar);
  };
  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <input type="file" ref={inputRef} />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default Form;

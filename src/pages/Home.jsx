import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let nav = useNavigate();
  let admin = {
    ism: "farrux",
    parol: "789456",
  };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSend = (e) => {
    e.preventDefault();
    if (userName === admin.ism && password === admin.parol) {
      // console.log("success");
      nav("/about");
    } else {
      console.log("siz admin emassiz");
    }
  };

  return (
    <>
      <div>Home</div>
      <form onSubmit={handleSend}>
        <input
          type="text"
          placeholder="user name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit"> send </button>
      </form>
    </>
  );
}

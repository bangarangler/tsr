import React, { useState } from "react";

const Input = () => {
  // const [name, setName] = useState<string | null>(null)
  // const [name, setName] = useState<string>("")
  const [name, setName] = useState("");
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};

export default Input;

import React, { useState, useRef } from "react";

const Input = () => {
  // const [name, setName] = useState<string | null>(null)
  // const [name, setName] = useState<string>("")
  const [name, setName] = useState("");
  // !null Read Only
  const ref = useRef<HTMLInputElement>(null!);
  // not common
  // const ref = useRef<HTMLInputElement | null>(null);
  // if (ref && ref.current) {
  console.log("ref.current :>> ", ref?.current?.value);
  // }
  return (
    <input
      type="text"
      ref={ref}
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default Input;

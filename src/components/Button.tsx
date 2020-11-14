import React from "react";

type Props = {
  // onClick(): string; // method returns string
  // onClick(): void; // method returns nothing
  // onClick(text: string): void; // method with params
  // onClick: () => void; // func that returns nothing
  onClick: (text: string) => void; // func with params
};

const Button = ({ onClick }: Props) => {
  return <button onClick={() => onClick("hi")}>Click Me</button>;
};

export default Button;

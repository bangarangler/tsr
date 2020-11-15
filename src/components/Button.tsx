import React from "react";

type Props = {
  // onClick: (e: React.MouseEvent) => void; // Basic mouse event
  // onChange?: (e: React.FormEvent<HTMLInputElement>) => void; // Basic input event
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Basic mouse event
};

const Button = ({ onClick }: Props) => {
  return <button onClick={onClick}>Click Me</button>;
};

export default Button;
// onClick(): string; // method returns string
// onClick(): void; // method returns nothing
// onClick(text: string): void; // method with params
// onClick: () => void; // func that returns nothing

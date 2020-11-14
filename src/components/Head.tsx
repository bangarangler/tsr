import React from "react";

// title
// isActive
// type User = {
//   name: string;
// };

type Props = {
  title: string;
  isActive?: boolean; // Optional prop
  // thing?: number; // number
  // thing2?: string[]; // arr of strings
  // status?: "loading" | "loaded"; // only loading or loaded
  // thing3?: {};
  // thing4?: {
  //   name: string;
  // };
  // func?: () => void;
  // user?: User;
};

const Head = ({ title, isActive = true }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  );
};

export default Head;

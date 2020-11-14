import React from "react";

// title
// isActive

type Props = {
  title: string;
  isActive?: boolean; // Optional prop
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

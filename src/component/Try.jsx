import React from "react";

export default function Try({ tryInfo }) {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
}

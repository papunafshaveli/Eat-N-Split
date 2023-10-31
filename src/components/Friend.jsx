/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";

export default function Friend({ friend, onSelection, selectedFriend }) {
  console.log(selectedFriend);
  return (
    <li className="selected">
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} ows you {Math.abs(friend.balance)}$
        </p>
      )}

      {friend.balance === 0 && <p>You and your {friend.name} are even</p>}

      <Button onClick={() => onSelection(friend)}>select</Button>
    </li>
  );
}

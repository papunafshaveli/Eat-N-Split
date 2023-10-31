/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";

export default function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>👫Friend name</label>
      <input type="text" />

      <label>Image Url</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

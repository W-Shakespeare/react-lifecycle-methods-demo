import React from "react";
function User({ key, isAdmin, name }) {
  return (
    <p key={key}>
      {name}
      {isAdmin && " 👑"}
    </p>
  );
}
export default User;

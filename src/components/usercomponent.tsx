import React from "react";

function UserComponent(props:any) {
  console.log(props);
  return (
    <div>
      <ul>
        {props.users.map((user: any, index: number) => (
          <li key={index}> {user.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default UserComponent;

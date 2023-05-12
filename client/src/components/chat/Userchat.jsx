/* eslint-disable react/prop-types */
//import React from "react";
import useFetchRecepientUser from "../../hooks/useFetchRecepient";
import { Stack } from "react-bootstrap";
import avatar from "../../assets/avatar.svg";

function Userchat({ chat, user }) {
  const recepientUser = useFetchRecepientUser(chat, user);
  console.log("Recepient", recepientUser);
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="user-card align-items-center p-2 justify-content-between"
      role="button"
    >
      <div className="d-flex">
        <div className="me-2">
          <img src={avatar} height="35px"></img>
        </div>

        <div className="text-content">
          <div className="name" style={{color: 'white'}}>{recepientUser?.recepientUser?.name}</div>

          <div className="text">Text Message</div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-end">
        <div className="date">12/12/2002</div>

        <div className="this-user-notifications">2</div>
        <span className="user-online"></span>
      </div>
    </Stack>
  );
}

export default Userchat;

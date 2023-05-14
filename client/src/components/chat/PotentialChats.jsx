/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ChatContext } from "../../context/chatContext";
import { AuthContext } from "../../context/AuthContext";

function PotentialChats() {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat, onlineUsers } = useContext(ChatContext);

  //console.log("PotentialChats", potentialChats);

  return (
    <div>
      <div className="all-users">
        {potentialChats &&
          potentialChats.map((u, index) => {
            return (
              <div
                className="single-user"
                key={index}
                onClick={() => createChat(user._id, u._id)}
              >
                {u.name}
                <span className={onlineUsers?.some((user) => user?.userId === u?._id) ? "user-online" : ""}></span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PotentialChats;

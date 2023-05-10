import React, { useContext } from "react";
import { ChatContext } from "../../context/chatContext";
import { AuthContext } from "../../context/AuthContext";

function PotentialChats() {
  const { user } = useContext(AuthContext);
  const { PotentialChats, createChat } = useContext(ChatContext);

  console.log("PotentialChats", PotentialChats);

  return (
    <div>
      <div className="all-users">
        {PotentialChats &&
          PotentialChats.map((u, index) => {
            return (
              <div
                className="single-user"
                key={index}
                onClick={() => createChat(user._id, u._id)}
              >
                {u.name}
                <span className="user-online"></span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PotentialChats;

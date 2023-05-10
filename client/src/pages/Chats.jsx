import React, { useContext } from "react";
import { ChatContext } from "../context/chatContext";
import { Container, Stack } from "react-bootstrap";
import Userchat from "../components/chat/Userchat";
import { AuthContext } from "../context/AuthContext";
import PotentialChats from "../components/chat/PotentialChats";

function Chats() {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, UserChatError } =
    useContext(ChatContext);

  // console.log("UserChats:",userChats)
  return (
    <Container>
      <PotentialChats />
      {userChats?.length < 1 ? null : (
        <Stack direction="horizontal" gap={4} className="align-items-start">
          <Stack className="message-box flex-grow-0 pe-3" gap={3}>
            {isUserChatsLoading && <p>Loading Chats...</p>}
            {userChats?.map((chat, index) => {
              return (
                <div key={index}>
                  <Userchat chat={chat} user={user} />
                </div>
              );
            })}
          </Stack>
          <p>Chat Box</p>
        </Stack>
      )}
    </Container>
  );
}

export default Chats;

import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/services";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(null);
  const [isUserChatsLoading, setUserChatsLoading] = useState(false);
  const [UserChatError, setUserChatsError] = useState(null);
  const [potentialChats, setPotentialChats] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await getRequest(`${baseUrl}/users`);
      if (response.error) {
        console.log("Error fetching users", response);
      }
      const pChats = response.filter((u) => {
        let isChatCreated = false;
        if (user?._id === u._id) return false;

        if (userChats) {
          isChatCreated = userChats?.some((chat) => {
            return chat.members[0] === u._id || chat.members[1] === u._id;
          });
        }

        return !isChatCreated;
      });
      setPotentialChats(pChats);
    };
    getUsers();
  }, [userChats]);

  useEffect(() => {
    const getUSerChats = async () => {
      if (user?._id) {
        setUserChatsLoading(true);
        setUserChatsError(null);
        const response = await getRequest(`${baseUrl}/chats/${user?._id}`);
        setUserChatsLoading(false);
        if (response.error) {
          return setUserChatsError(response);
        }
        setUserChats(response);
      }
    };

    getUSerChats();
  }, [user]);

  const createChat = useCallback(async (firstId, secondId) => {
    const response = await postRequest(
      `${baseUrl}/chats`,
      JSON.stringify({
        firstId,
        secondId,
      })
    );

    if (response.error) {
      console.log("Error creating a chat", response);
    }

    setUserChats((prev) => [...prev, response]);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        userChats,
        isUserChatsLoading,
        UserChatError,
        potentialChats,
        createChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

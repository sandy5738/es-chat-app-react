import io from "socket.io-client";

import { useEffect, useState, useContext } from "react";
import MessagesContext from "../../contexts/MessagesContext";
import Message from "../Message/Message";
import "./Messages.css";

const socket = io.connect("http://localhost:3001");

const Messages = () => {
  const [messages, setMessages] = useContext(MessagesContext);
  const [newMessage, setNewMessage] = useState(messages);
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

  useEffect(() => {
    socket.on("receive_message", (data) => {
      const obj = {
        id: messages.length + 1,
        user: data.user,
        message: data.text ?? "",
        likes: 0,
      };
      setMessages((prevState) => [...prevState, obj]);
    });
    socket.on("receive_updated_likes", (data) => {
      setMessages(data.messages);
    });
  }, [socket, messages]);
  return (
    <div className="messages">
      Messages
      {messages.map((message, index) => (
        <Message
          key={index}
          user={message.user}
          message={message.message}
          likes={message.likes}
          id={message.id}
        />
      ))}
    </div>
  );
};

export default Messages;

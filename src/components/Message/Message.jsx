import "./Message.css";
import { FcLike } from "react-icons/fc";
import { useContext, useEffect } from "react";
import MessagesContext from "../../contexts/MessagesContext";

import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const Message = ({ user, message, likes, id }) => {
  const [messages, setMessages] = useContext(MessagesContext);
  const handleLikes = () => {
    const objIndex = messages.findIndex((message) => message.id === id);
    setMessages((prevState) => {
      const updatedMessage = prevState;
      updatedMessage[objIndex].likes = updatedMessage[objIndex].likes + 1;
      return [...updatedMessage];
    });
    socket.emit("update_likes", {
      messages,
    });
    console.log(objIndex, messages[objIndex]);
  };

  // useEffect(() => {
  //   socket.on("receive_updated_likes", (data) => {
  //     console.log(data.messages);
  //   });
  // }, [socket, messages]);

  return (
    <div className="message">
      <img
        src={`https://avatars.dicebear.com/api/initials/${user}.svg`}
        alt="username"
      />
      <div className="message-container">
        <h4>{user}</h4>
        <div className="message-el">
          <p>{message}</p>
          <FcLike size={22} onClick={handleLikes} />
          <span>{likes > 0 ? likes : ""}</span>
        </div>
      </div>
    </div>
  );
};

export default Message;

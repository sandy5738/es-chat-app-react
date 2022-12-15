import { useContext } from "react";
import MessagesContext from "../../contexts/MessagesContext";
import Message from "../Message/Message";
import "./Messages.css";

const Messages = ({ users }) => {
  const [messages] = useContext(MessagesContext);
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

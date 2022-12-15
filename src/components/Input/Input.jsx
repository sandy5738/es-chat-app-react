import { useState, useContext } from "react";
import InputEmoji from "react-input-emoji";
import MessagesContext from "../../contexts/MessagesContext";
import { TbSend } from "react-icons/tb";
import "./Input.css";

const Input = () => {
  const [text, setText] = useState("");

  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  const [messages, setMessages] = useContext(MessagesContext);

  function handleOnEnter(text) {
    const obj = {
      id: messages.length + 1,
      user: user_list[Math.floor(Math.random() * user_list.length)],
      message: text ?? "",
      likes: 0,
    };
    setMessages((prevState) => [...prevState, obj]);
  }

  return (
    <div className="input">
      <InputEmoji
        value={text}
        onChange={setText}
        cleanOnEnter
        onEnter={handleOnEnter}
        fontFamily="Poppins"
        placeholder="Type a message..."
      />
    </div>
  );
};

export default Input;

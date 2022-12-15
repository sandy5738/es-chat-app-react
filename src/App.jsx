import { useState } from "react";
import "./App.css";
import socketIO from "socket.io-client";
import Input from "./components/Input/Input";
import InputSocket from "./components/Input/InputSocket";

import Messages from "./components/Messages/Messages";
import MessagesSocket from "./components/Messages/MessagesSocket";

import MessagesContext from "./contexts/MessagesContext";
import EmojiInput from "./components/EmojiInput/EmojiInput";

function App() {
  const messages = useState([
    { id: 1, user: "Sandy H M", message: "heyya", likes: 0 },
    { id: 2, user: "Prajwal", message: "Hola", likes: 0 },
  ]);
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  return (
    <div className="app">
      <MessagesContext.Provider value={messages}>
        <Messages users={user_list} />
        <Input />
        {/* <MessagesSocket />
        <InputSocket /> */}
      </MessagesContext.Provider>
    </div>
  );
}

export default App;

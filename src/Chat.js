import React, { useEffect, useState } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { selectChannel } from "./features/appSlice";
import db from "./firebase";
import firebase from "firebase";

function Chat() {
  const user = useSelector(selectUser);
  const [messages, setMessages] = useState([]);
  // const channelId = useSelector(selectChannelId);
  // const channelName = useSelector(selectChannelName);
  const channel = useSelector(selectChannel);
  const [input, setInput] = useState("");
  console.log(user, channel);

  useEffect(() => {
    if (channel.channelId) {
      db.collection("channels")
        .doc(channel.channelId)
        .collection("messaages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [channel.channelId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels")
      .doc(channel.channelId)
      .collection("messaages")
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user: user,
      });

    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channel={channel} />

      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form action="">
          <input
            value={input}
            disabled={!channel.channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channel.channelName}`}
            type="text"
          />
          <button
            onClick={sendMessage}
            className="chat__inputButton"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;

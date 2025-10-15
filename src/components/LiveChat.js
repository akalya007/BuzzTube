import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatmessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

 return (
    <div className="w-full h-[600px] ml-2 border border-black bg-slate-100 rounded-lg flex flex-col">
      
      {/* Scrollable Messages */}
      <div className="flex-1 p-2 overflow-y-auto">
        {chatmessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      {/* Fixed Input at Bottom */}
      <form
        className="flex p-2 border-t border-black bg-white"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Akalya",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="flex-1 border rounded px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Chat..."
        />
        <button className="ml-2 px-4 bg-green-500 text-white rounded">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
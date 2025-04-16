import React, { useEffect, useState } from "react";
import { rtdb } from "../Firebase.config";
import { onValue, ref, push } from "firebase/database";

const Conversations = () => {
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]);
  const [sender, setSender] = useState("A");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = {
      message,
      sender,
    };

    push(ref(rtdb, "Messages/"), userMessage)
      .then(() => setMessage(""))
      .catch((err) => console.error("Error sending message:", err));
  };

  useEffect(() => {
    const messagesRef = ref(rtdb, "Messages/");
    const unsubscribe = onValue(messagesRef, (snap) => {
      if (snap.exists()) {
        const data = snap.val();
        const messages = Object.values(data);
        setMessagesList(messages);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="py-7 px-5 bg-[#F4F5FA] min-h-screen flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[#45464E] text-[16px] ff-Inter font-medium">
            Conversations with Customers
          </h1>

          {/* Sender Switch */}
          <select
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            className="border border-gray-300 rounded p-2 text-sm"
          >
            <option value="A">Send as A (Left)</option>
            <option value="B">Send as B (Right)</option>
          </select>
        </div>

        {/*  Chat Display */}
        <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
          {messagesList.map((msg, index) => (
            <div
              key={index}
              className={`w-full flex ${
                msg.sender === "A" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`p-3 rounded-xl text-sm max-w-[60%] ${
                  msg.sender === "A"
                    ? "bg-white text-gray-800"
                    : "bg-[#5570F1] text-white"
                }`}
              >
                {msg.message}
              </div>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2 items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-lg p-2"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button
          type="submit"
          className="bg-[#5570F1] text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Conversations;

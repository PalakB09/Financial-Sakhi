import MeChat from "./MeChat";
import TheyChat from "./TheyChat";
import { GoPaperclip } from "react-icons/go";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { FaTelegramPlane } from "react-icons/fa";
import { useState, useRef } from "react";

const ChatInterface = () => {
  const [myMessages, setMyMessages] = useState<string[]>([]);
  const [theirMessages, setTheirMessages] = useState<string[]>(["Hi, how can I help you?"]);

  const messageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const message = messageRef.current?.value;
    if (!message) return;

    setMyMessages((prevMessages) => [...prevMessages, message]);
    messageRef.current.value = "";

    let botResponse = "";
    if (message.toLowerCase().includes("startup")) {
      botResponse = "What kind of startup are you planning to build?";
    } else if (message.toLowerCase().includes("clothes")) {
      botResponse =
        "That's a fantastic idea! In the clothing business, focus on identifying your niche—like sustainable fashion, athleisure, or cultural designs. Build a strong brand identity and start small by showcasing your designs on social media or marketplaces. Quality and storytelling will set you apart. How can I assist you further with this?";
    } else {
      botResponse = "I'm here to help. Could you tell me more?";
    }

    
    setTimeout(() => {
      setTheirMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 800); 
  };

  return (
    <>
      <div className="flex h-[20rem] antialiased text-gray-800">
        <div className="flex flex-row h-96 w-full overflow-x-hidden">
          <div className="flex flex-col flex-auto h-full py-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100/10 h-full p-4">
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                  {theirMessages.map((botMessage, index) => (
                    <div key={index} className="grid grid-cols-12 gap-y-2">
                      <TheyChat message={botMessage} />
                      {myMessages[index] && <MeChat message={myMessages[index]} />}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-row items-center h-16 rounded-xl bg-white/10 w-full px-4">
                <div>
                  <button className="flex items-center justify-center text-gray-400 hover:text-gray-100">
                    <GoPaperclip size={25} />
                  </button>
                </div>
                <div className="flex-grow ml-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      ref={messageRef}
                      className="flex w-full border rounded-xl focus:outline-none text-white bg-white/10 focus:border-indigo-300 pl-4 h-10"
                      placeholder="Type your message here..."
                    />
                    <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                      <HiOutlineFaceSmile size={30} />
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <button
                    onClick={handleSubmit}
                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  >
                    <span>Send</span>
                    <span className="ml-2">
                      <FaTelegramPlane size={25} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInterface;

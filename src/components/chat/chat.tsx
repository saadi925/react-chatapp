import { useState } from "react";
import { Message } from "..";
import {
  AttachmentIcon,
  CallIcon,
  Dots,
  SearchIcon,
  SendIcon,
} from "../../assets/icons";

const Chat = () => {
  // Dummy messages for demonstration
  const dummyMessage = [
    { id: 1, own: false, message: "Hello there!" },
    { id: 2, own: true, message: "Hi! How can I help you?" },
    { id: 3, own: false, message: "I have a question about my order." },
    {
      id: 4,
      own: true,
      message:
        "I have a question about my order.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt tempora libero, eaque assumenda eum et, iste praesentium ea, repellat minima suscipit doloribus unde a nam tempore incidunt reprehenderit neque.",
    },
    {
      id: 5878,
      own: false,
      message: "us unde a nam tempore incidunt reprehenderit neque.",
    },
    {
      id: 785,
      own: false,
      message: "doloribus unde a nam tempore incidunt reprehenderit neque.",
    },

    // Add more messages here if needed
  ];

  const [messages, setMessages] = useState(dummyMessage);

  return (
    <div className="min-h-[calc(100vh-64px)] flex-grow relative bg-shade ">
      <div className="py-2 px-5">
        <div className="flex justify-between">
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl">Office Chat</h2>
            <span className="text-white opacity-80">45 Members</span>
            <span className="text-green-600 opacity-90 ml-3">18 Active</span>
          </div>
          <div className="flex items-center   gap-3 md:gap-8">
            <img
              src={SearchIcon}
              alt="search"
              className="cursor-pointer w-12 hover:bg-back transition-all rounded-md p-3"
            />
            <img
              src={CallIcon}
              alt="search"
              className="cursor-pointer w-12 hover:bg-back transition-all rounded-md p-3"
            />
            <img
              src={Dots}
              alt="search"
              className="cursor-pointer w-12 hover:bg-back transition-all rounded-md p-3"
            />
          </div>
        </div>
        {/* Chat Messages */}
        <div
          className={"max-h-[calc(100vh-200px)] overflow-y-auto no-scrollbar"}
        >
          {messages.map((message) => (
            <Message
              key={message.id}
              own={message.own}
              message={message.message}
            />
          ))}
        </div>
        {/* ChatInput */}
        <div className="w-full flex">
          <div className="absolute -left-1 bottom-5 w-full flex px-3 gap-2">
            <div className="bg-slate-800  py-2 px-5 rounded-md w-full border border-transparent focus-within:border-back">
              <input
                type="text"
                placeholder="Write message here.."
                className="focus:outline-none py-2 px-5 w-full  bg-slate-800  text-white text-xl"
              />
            </div>
            <div className="cursor-pointer py-2">
              <img
                className=""
                src={AttachmentIcon}
                width={40}
                alt="attachment"
              />
            </div>
            <div className="cursor-pointer py-2">
              <img
                className=""
                src="/icons/light/mic.png"
                width={40}
                alt="microphone"
              />
            </div>
            <div className="cursor-pointer py-2">
              <img className="" src={SendIcon} width={40} alt="send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

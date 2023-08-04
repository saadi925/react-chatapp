import { useState, useEffect } from "react";
import MediaItem from "../mediaItem/MediaItem";
import { DummyMedia } from "./dummyMedia";

const ChatDetails = () => {
  const [ChatMedia, setChatMedia] = useState(DummyMedia);
  const [showChatDetails, setShowChatDetails] = useState(false);

  // This function will toggle the visibility of the ChatDetails component
  const handleChatDetailsToggle = () => {
    setShowChatDetails((prev) => !prev);
  };

  // This useEffect hook will add an event listener to the document to detect clicks outside the ChatDetails
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const chatDetailsContainer = document.querySelector(
        ".chat-details-container"
      );
      if (
        chatDetailsContainer &&
        !chatDetailsContainer.contains(event.target)
      ) {
        setShowChatDetails(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`xl:w-1/4 xl:min-h-[calc(100vh-64px)] text-white ${
        showChatDetails ? "visible" : "invisible"
      } fixed right-0 top-0 bottom-0 bg-black bg-opacity-50`}
    >
      <div className="p-2">
        <h2 className="text-4xl font-semibold">Chat Details</h2>
        <h3 className="pt-3 font-semibold">Chat Media</h3>
      </div>
      <div className="h-0.5 w-full bg-shade"></div>
      <div className="flex overflow-x-auto scroll-visibility-off">
        <div className="flex flex-nowrap">
          {ChatMedia ? (
            ChatMedia.map((mediaItem) => (
              <div key={mediaItem.id} className="w-80 px-5 py-2 flex-none">
                <MediaItem imgUrl={mediaItem.img} />
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatDetails;

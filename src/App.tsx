import { AppHeader, ChatDetails, SidePannel, Users } from "./components";
import Chat from "./components/chat/chat";

const App = () => {
  return (
    <div className="font-roboto">
      <AppHeader />
      <div className="xl:flex bg-back">
        <SidePannel />
        <Users />
        <Chat />
        <ChatDetails />
      </div>
    </div>
  );
};

export default App;

import { UserIcon } from "../../assets/icons";

interface messageProps {
  own?: boolean;
  message: string;
}

const Message = ({ own, message }: messageProps) => {
  const messageContainerClass = own ? "justify-end" : "justify-start";

  return (
    <div className={`py-2 px-4 flex ${messageContainerClass}`}>
      {!own && (
        <div className=" mr-4">
          <img src={UserIcon} alt="user" width={40} height={40} />
        </div>
      )}
      <div
        className={`my-2 px-5 py-2 mt-5 rounded-3xl text-xl max-w-md ${
          own
            ? "bg-blue-500 text-white rounded-tr-sm mr-2 "
            : "bg-white rounded-tl-sm  "
        }`}
      >
        {!own && (
          <h3
            className={`${
              own ? "" : "text-blue-600"
            } text-2xl font-semibold mb-1`}
          >
            Burak Allias
          </h3>
        )}
        {message}
      </div>
    </div>
  );
};

export default Message;

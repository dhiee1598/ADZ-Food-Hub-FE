import { AiOutlineClose } from "react-icons/ai";

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="bg-red-500 text-white w-fit text-center text-sm m-auto p-2 mb-2 rounded-md">
      <p>
        <AiOutlineClose className="inline-block w-5" /> {message}
      </p>
    </div>
  );
};

export default ErrorMessage;
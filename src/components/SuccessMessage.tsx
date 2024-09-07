import { AiOutlineCheck } from "react-icons/ai";

const SuccessMessage = ({ message }: { message: string }) => {
  return (
    <div className="bg-green-500 text-white w-fit text-center text-sm m-auto p-2 mb-2 rounded-md">
      <p>
        <AiOutlineCheck className="inline-block w-5" /> {message}
      </p>
    </div>
  );
};

export default SuccessMessage;

interface Props {
  msg: string;
  style: string;
}

const Message = ({ msg, style }: Props) => {
  return (
    <p
      className={`text-xl text-center py-2 px-7 text-white font-bold rounded-md ${style}`}
    >
      {msg}
    </p>
  );
};

export default Message;

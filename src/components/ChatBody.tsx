
type ChatBodyProps = {
    name: string;
    message: string;
}

function ChatBody(props: ChatBodyProps) {
    return (
        <div className="bg-blue-500 text-white">
            {props.name}: {props.message}

        </div>
    );
  }
  
export default ChatBody;
  
  
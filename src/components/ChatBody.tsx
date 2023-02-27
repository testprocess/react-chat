
type ChatBodyProps = {
    data: {
        name: string;
        message: string;
    }
}

function ChatBody(props: ChatBodyProps) {
    return (
        <div className="bg-blue-500 text-white">
            {props.data.name}: {props.data.message}

        </div>
    );
  }
  
export default ChatBody;
  
  
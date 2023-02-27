
type ChatBodyProps = {
    data: {
        name: string;
        message: string;
    }
}

function ChatBody(props: ChatBodyProps) {
    if (props.data.name == 'Me') {
        return (
            <div className="flex justify-end">
                <div className="mb-4">
                    <span className="flex-auto bg-blue-500 text-white text-right p-2 rounded-lg">{props.data.message}</span>
                </div>
            </div>
    
        );
    } else {
        return (
            <div className="flex justify-start">
                <div className="mb-4">
                    <span className="flex-auto bg-slate-200 text-slate-700 text-right p-2 rounded-lg">{props.data.name}: {props.data.message}</span>
                </div>
            </div>
        )
    }

  }
  
export default ChatBody;
  
  
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

function ChatBox(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
    return (
        <div className="container mx-auto px-20">
            {props.children}
        </div>
    );
  }
  
export default ChatBox;
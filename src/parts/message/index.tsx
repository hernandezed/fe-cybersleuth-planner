import {Alert} from "react-bootstrap";

export default function Message(props: MessageProps) {
    return (<Alert variant={"danger"}>{props.message}</Alert>)
}

interface MessageProps {
    message: String
}
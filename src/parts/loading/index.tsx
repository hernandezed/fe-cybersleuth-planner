import {Spinner} from "react-bootstrap";

export default function Loading() {
    return (
        <div style={{width: '100%', height: '100%', position: "absolute", alignItems: "center", verticalAlign:"middle", transform: "translateY(40%)" }}>
            <Spinner style={{marginRight: 5}} animation="grow" variant="primary"/>
            <Spinner style={{marginRight: 5}} animation="grow" variant="primary"/>
            <Spinner animation="grow" variant="primary"/>
        </div>
    );
}
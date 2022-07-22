import {Spinner} from "react-bootstrap";

export default function Loading() {
    return (
        <div style={{width: '100%'}}>
            <Spinner animation="grow" variant="primary"/>
            Loading...
        </div>
    );
}
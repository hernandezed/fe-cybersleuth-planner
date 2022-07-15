import {Button, Col, Row} from "react-bootstrap";
import DigimonImage from "../digimonImage/DigimonImage";
import Team from "../../services/dto/Team";

export default function TeamButton(props: Team) {
    return (
        <Button style={{width: '100%'}}>
            <Row>
                <Col>
                    <strong>
                        {props.name}
                    </strong>
                </Col>
            </Row>
            {
                props.digimonIds.map(id => <DigimonImage id={id} variant={'mini'}/>)
            }
        </Button>
    )
}



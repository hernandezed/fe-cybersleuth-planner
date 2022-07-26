import {Button, Col, Row} from "react-bootstrap";
import DigimonImage from "../digimonImage";
import TeamDto from "../../services/dto/TeamDto";

export default function TeamButton(props: TeamDto) {
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



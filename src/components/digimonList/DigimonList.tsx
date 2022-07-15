import {Anchor, Button, Col, Container, Form, ListGroup, Row, Table} from "react-bootstrap";
import DigimonImage from "../../parts/digimonImage/DigimonImage";
import Digimon from "../../services/dto/Digimon";
import TypeIcon from "../../parts/typeIcon/TypeIcon";
import {useState} from "react";

export default function DigimonList(props: DigimonListProps) {
    const [search, setSearch] = useState("")


    return (
        <Container>
            <Row>
                <Col>
                    <Form.Control placeholder={"Search by name"}
                                  onChange={(event) => setSearch(event.target.value)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table borderless hover size="sm">
                        <thead>
                        <tr>
                            <th style={{width: '10%'}}>Type</th>
                            <th style={{width: '10%'}}>Icon</th>
                            <th style={{width: '40%'}}>Name</th>
                            <th style={{width: '20%'}}>Stage</th>
                            <th style={{width: '10%'}}>Memory</th>
                            <th style={{width: '10%'}}>Slots</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            props.data.map(d =>
                                <tr hidden={search !== "" && !d.name.toLowerCase().includes(search.toLowerCase())}>
                                    <td valign={"middle"} align={"center"}><TypeIcon styles={{width: 20}} type={d.type}
                                                                                     attribute={d.attribute}/></td>
                                    <td valign={"middle"} align={"center"}><DigimonImage id={d.id} variant={"mini"}/>
                                    </td>
                                    <td valign={"middle"} align={"center"}>{d.name}</td>
                                    <td valign={"middle"} align={"center"}>{d.stage == 'None' ? '-' : d.stage}</td>
                                    <td valign={"middle"} align={"center"}>{d.memory.toString()}</td>
                                    <td valign={"middle"} align={"center"}>{d.slots.toString()}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

interface DigimonListProps {
    data: Digimon[];
}

import {Col, Form, Row, Table} from "react-bootstrap";
import AttackDto from "../../services/dto/AttackDto";
import AttackIcon from "../../parts/attackIcon";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function AttackList(props: AttackListProps) {
    let [search, setSearch] = useState("");
    let navigate = useNavigate();


    return <span>
        <Row>
            <Col>
            <Form.Control placeholder={"Search by name"}
                          onChange={(event) => setSearch(event.target.value)}/>
                </Col>
        </Row>
    <Row>
        <Col>
        <Table borderless hover size="sm" style={{textAlign: "center"}}>
            <thead>
            <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Attribute</th>
                <th>Power</th>
                <th>Cost</th>
                <th>Inheritable</th>
            </tr>
            </thead>
            <tbody>
            {
                //@ts-ignore
                props.data!.sort((a, b) => a.name.localeCompare(b.name)).map(att =>
                    <tr id={att.id.toString()}
                        hidden={search !== "" && !att.name.toLowerCase().includes(search.toLowerCase())}
                    onClick={() => navigate("/attacks/" + att.id.toString())}>
                        <td>
                            <AttackIcon attribute={att.attribute} type={att.type} style={{height: 25}}/>
                        </td>
                        <td>{att.name}</td>
                        <td>{att.type}</td>

                        <td>{att.power === 0? "-": att.power.toString()}</td>
                        <td>{att.cost.toString()}</td>
                        <td>{att.inheritable ? 'Yes' : 'No'}</td>

                    </tr>
                )
            }
            </tbody>
        </Table>
            </Col>
    </Row>
</span>
}

interface AttackListProps {
    data: AttackDto[]
}
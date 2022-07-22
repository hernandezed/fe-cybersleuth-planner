import {Col, Container, Form, Row, Table} from "react-bootstrap";
import DigimonImage from "../../parts/digimonImage/DigimonImage";
import AttributeTypeIcon from "../../parts/typeIcon/AttributeTypeIcon";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import DigimonService from "../../services/DigimonService";
import {useQuery} from "@tanstack/react-query";
import Loading from "../../parts/loading/Loading";

export default function DigimonList() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const service = new DigimonService();
    const {data, error, isError, isLoading} = useQuery(['digimons'], () => service.fetchDigimons())

    if (isLoading) {
        return <Loading/>
    } else {
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
                                data!.map(d =>
                                    <tr key={d.id.toString()} onClick={() => navigate("/digimons/" + d.id)}
                                        hidden={search !== "" && !d.name.toLowerCase().includes(search.toLowerCase())}>
                                        <td valign={"middle"} align={"center"}><AttributeTypeIcon styles={{width: 20}}
                                                                                                  type={d.type}
                                                                                                  attribute={d.attribute}/>
                                        </td>
                                        <td valign={"middle"} align={"center"}><DigimonImage id={d.id}
                                                                                             variant={"mini"}/>
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


}
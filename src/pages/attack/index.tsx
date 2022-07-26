import {Col, Row, Table} from "react-bootstrap";
import React from "react";
import AttackService from "../../services/AttackService";
import {useQuery} from "@tanstack/react-query";
import {useNavigate, useParams} from "react-router-dom";
import AttackIcon from "../../parts/attackIcon";
import DigimonImage from "../../parts/digimonImage";

export default function Attack() {

    const {idParam} = useParams()
    const service = new AttackService();
    const {data, isLoading} = useQuery(['attack'], () => service.fetchAttack(idParam!));
    const navigate = useNavigate();


    return isLoading ? <div/> : <div>
        <h1><AttackIcon attribute={data?.attribute!} type={data?.type!} style={{height: '100%'}}/> {data?.name}</h1>
        <Row>
            <Col xs={12} md={12}>
                <Row style={{paddingLeft: "10px"}}>
                    <Col xs={12} sm={6}><strong>Attribute: </strong>{data?.attribute}</Col>
                    <Col xs={12} sm={6}><strong>Type: </strong>{data?.type}</Col>
                    <Col xs={12} sm={6}><strong>Cost: </strong>{data?.cost.toString()}</Col>
                    <Col xs={12} sm={6}><strong>Power: </strong>{data?.power === 0 ? "-" : data?.power.toString()}
                    </Col>
                    <Col xs={12} sm={6}><strong>Inheritable: </strong>{data?.inheritable ? "Yes" : "No"}</Col>
                </Row>
            </Col>
            <Col xs={12}>
                <Col xs={12} style={{paddingLeft: "10px"}}><strong>Learned by</strong></Col>
                <Row style={{paddingLeft: "10px"}}>
                    <Col>
                        {
                            data?.digimons.map(mini => {
                                return (
                                    <DigimonImage style={{width: 32, margin: 10}}
                                                  onClick={() => navigate("/digimons/" + mini.id)} id={mini.id}
                                                  variant={"mini"}>
                                        {mini?.name}
                                    </DigimonImage>

                                )
                            })
                        }
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
}
//
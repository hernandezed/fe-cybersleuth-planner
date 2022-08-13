import AttackIcon from "../../parts/attackIcon";
import {Col, Row} from "react-bootstrap";
import DigimonImage from "../../parts/digimonImage";
import React from "react";
import AttackDetailDto from "../../services/dto/AttackDetailDto";
import {useNavigate} from "react-router-dom";

export default function AttackDetail(props: AttackDetailProp) {

    const navigate = useNavigate();

    return <div>
        <h1><AttackIcon attribute={props.data.attribute!} type={props.data.type!} style={{height: '100%'}}/> {props.data.name}</h1>
        <Row>
            <Col xs={12} md={12}>
                <Row style={{paddingLeft: "10px"}}>
                    <Col xs={12} sm={6}><strong>Attribute: </strong>{props.data.attribute}</Col>
                    <Col xs={12} sm={6}><strong>Type: </strong>{props.data.type}</Col>
                    <Col xs={12} sm={6}><strong>Cost: </strong>{props.data.cost.toString()}</Col>
                    <Col xs={12} sm={6}><strong>Power: </strong>{props.data.power === 0 ? "-" : props.data.power.toString()}
                    </Col>
                    <Col xs={12} sm={6}><strong>Inheritable: </strong>{props.data.inheritable ? "Yes" : "No"}</Col>
                </Row>
            </Col>
            <Col xs={12}>
                <Col xs={12} style={{paddingLeft: "10px"}}><strong>Learned by</strong></Col>
                <Row style={{paddingLeft: "10px"}}>
                    <Col>
                        {
                            props.data.digimons.map(mini => {
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

interface AttackDetailProp {
    data: AttackDetailDto
}
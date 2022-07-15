import {Col, Container, ProgressBar, Row, Table} from "react-bootstrap";
import React from "react";
import DigimonDetail from "../../services/dto/DigimonDetail";
import DigimonImage from "../../parts/digimonImage/DigimonImage";
import TypeIcon from "../../parts/typeIcon/TypeIcon";
import './DigimonDetails.css'

export default function DigimonDetails(detail: DigimonDetailProps) {
    // @ts-ignore
    let stats = detail.digimon.stats["1"]!
    // @ts-ignore
    let statsLevel50 = detail.digimon.stats["50"]!
    // @ts-ignore
    let statsLevel99 = detail.digimon.stats["99"]!
    return (
        <Row>
            <Col style={{textAlign: "start", paddingTop: 5, paddingBottom: 5}} xs={12} sm={4}>
                <Table hover size={"sm"}>
                    <tbody>
                    <tr>
                        <td colSpan={2} align={"center"}>
                            <DigimonImage bordered={true} id={detail.digimon.id} variant={'portrait'}
                                          attribute={detail.digimon.attribute} type={detail.digimon.type}/>

                        </td>
                    </tr>
                    <tr>
                        <td align={"right"} style={{width: '50%'}}>Name</td>
                        <td align={"left"} style={{width: '50%'}}> {detail.digimon.name}</td>
                    </tr>
                    <tr>
                        <td align={"right"} style={{width: '50%'}}>Stage</td>
                        <td align={"left"} style={{width: '50%'}}> {detail.digimon.stage}</td>
                    </tr>
                    <tr>
                        <td align={"right"} style={{width: '50%'}}>Type</td>
                        <td align={"left"} style={{width: '50%'}}> {detail.digimon.type}</td>
                    </tr>
                    <tr>
                        <td align={"right"} style={{width: '50%'}}>Attribute</td>
                        <td align={"left"} style={{width: '50%'}}> {detail.digimon.attribute}</td>
                    </tr>
                    <tr>
                        <td align={"right"} style={{width: '50%'}}>Memory</td>
                        <td align={"left"} style={{width: '50%'}}> {detail.digimon.memory.toString()}</td>
                    </tr>
                    <tr>
                        <td align={"right"} style={{width: '50%'}}>Slots</td>
                        <td align={"left"} style={{width: '50%'}}> {detail.digimon.slots.toString()}</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
            <Col style={{textAlign: 'left', margin: "auto"}} xs={12} sm={8}>
                <h3>Stats</h3>

                Hp
                <ProgressBar style={{height: 25}}>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}} now={stats.hp}
                                 label={stats.hp} key={1} max={2670}/>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}}
                                 now={statsLevel50.hp - stats.hp}
                                 label={statsLevel50.hp} key={2} variant={"success"} max={2670}/>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}}
                                 now={statsLevel99.hp - statsLevel50.hp}
                                 label={statsLevel99.hp} key={3} variant={"danger"} max={2670}/>
                </ProgressBar>

                Sp
                <ProgressBar style={{height: 25}}>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}} now={stats.sp}
                                 label={stats.sp} key={1} max={267}/>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}}
                                 now={statsLevel50.sp - stats.sp}
                                 label={statsLevel50.sp} key={2} variant={"success"} max={267}/>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}}
                                 now={statsLevel99.sp - statsLevel50.sp}
                                 label={statsLevel99.sp} key={3} variant={"danger"} max={267}/>
                </ProgressBar>

                Attack
                <ProgressBar style={{height: 25}}>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}} now={stats.attack}
                                 label={stats.attack} key={1} max={382}/>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}}
                                 now={statsLevel50.attack - stats.attack}
                                 label={statsLevel50.attack} key={2} variant={"success"} max={382}/>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}}
                                 now={statsLevel99.attack - statsLevel50.attack}
                                 label={statsLevel99.attack} key={3} variant={"danger"} max={382}/>
                </ProgressBar>

                Defense
                <ProgressBar style={{height: 25}}>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}} now={stats.defense}
                                 label={stats.defense} key={1} max={297}/>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}}
                                 now={statsLevel50.defense - stats.defense}
                                 label={statsLevel50.defense} key={2} variant={"success"} max={297}/>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}}
                                 now={statsLevel99.defense - statsLevel50.defense}
                                 label={statsLevel99.defense} key={3} variant={"danger"} max={297}/>
                </ProgressBar>

                Intellect
                <ProgressBar style={{height: 25}}>
                    <ProgressBar now={stats.intellect} style={{height: 25, alignItems: 'end', paddingRight: 2}}
                                 label={stats.intellect} key={1} max={277}/>
                    <ProgressBar now={statsLevel50.intellect - stats.intellect}
                                 style={{height: 25, alignItems: 'end', paddingRight: 2}}
                                 label={statsLevel50.intellect} key={2} variant={"success"} max={277}/>
                    <ProgressBar now={statsLevel99.intellect - statsLevel50.intellect}
                                 style={{height: 25, alignItems: 'end', paddingRight: 2}}
                                 label={statsLevel99.intellect} key={3} variant={"danger"} max={277}/>
                </ProgressBar>

                Speed
                <ProgressBar style={{height: 25}}>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}} now={stats.speed}
                                 label={stats.speed} key={1} max={282}/>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}}
                                 now={statsLevel50.speed - stats.speed}
                                 label={statsLevel50.speed} key={2} variant={"success"} max={282}/>
                    <ProgressBar style={{height: 25, alignItems: 'end', paddingRight: 2}}
                                 now={statsLevel99.speed - statsLevel50.speed}
                                 label={statsLevel99.speed} key={3} variant={"danger"} max={282}/>
                </ProgressBar>

            </Col>
            <Col xs={12} style={{textAlign: "left"}}>
                <h3>Attacks</h3>
                <Table>
                    <thead>
                        <tr>
                            <td>Icon</td>
                            <td>Name</td>
                            <td>Attribute</td>
                            <td>Type</td>
                            <td>Cost</td>
                            <td>Power</td>
                            <td>Inheritable</td>
                        </tr>
                    </thead>
                    <tbody>
                    {

                    }
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

/*
<Col style={{display: 'inline-flex', maxWidth: '128px', paddingRight: '0px'}}>

            </Col>
 */

interface DigimonDetailProps {
    digimon: DigimonDetail
}
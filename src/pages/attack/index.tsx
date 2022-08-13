import React from "react";
import AttackService from "../../services/AttackService";
import {useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";
import AttackDetail from "../../components/attackDetail";
import Loading from "../../parts/loading";
import Message from "../../parts/message";
import {Container} from "react-bootstrap";

export default function Attack() {

    const {idParam} = useParams()
    const service = new AttackService();
    const {data, isLoading} = useQuery(['attack'+ idParam], () => service.fetchAttack(idParam!));

    return <Container fluid style={{textAlign: "center"}}>
        {
            (function () {
                if (isLoading) {
                    return <Loading/>
                } else if (data) {
                    return <AttackDetail data={data}/>
                } else {
                    return <Message message={"Cannot load DigimonDto List"}/>
                }
            })()
        }
    </Container>
}
//
import {Container} from "react-bootstrap";
import AttackList from "../../components/attackList";
import {useQuery} from "@tanstack/react-query";
import AttackService from "../../services/AttackService";
import Loading from "../../parts/loading";
import DigimonList from "../../components/digimonList";
import Message from "../../parts/message";

export default function Attacks() {

    const service = new AttackService();
    const {data, isLoading} = useQuery(['attacks'], () => service.fetchAttacks())


    return (
        <Container style={{textAlign: "center"}}>
            {
                (function () {
                    if (isLoading) {
                        return <Loading/>
                    } else if (data) {
                        return <AttackList data={data}/>
                    } else {
                        return <Message message={"Cannot load DigimonDto List"}/>
                    }
                })()
            }
        </Container>
    )
}
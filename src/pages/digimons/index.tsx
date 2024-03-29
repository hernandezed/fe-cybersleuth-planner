import DigimonList from "../../components/digimonList";
import DigimonService from "../../services/DigimonService";
import {useQuery} from "@tanstack/react-query";
import Loading from "../../parts/loading";
import Message from "../../parts/message";
import {Container} from "react-bootstrap";

export default function Digimons() {
    const service = new DigimonService();
    const {data, isLoading} = useQuery(['digimons'], () => service.fetchDigimons())

    return (
        <Container style={{textAlign: "center"}}>
            {
                (function () {
                    if (isLoading) {
                        return <Loading/>
                    } else if (data) {
                        return <DigimonList data={data}/>
                    } else {
                        return <Message message={"Cannot load DigimonDto List"}/>
                    }
                })()
            }
        </Container>
    )
}
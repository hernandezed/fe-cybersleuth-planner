import {useQuery} from "@tanstack/react-query";
import DigimonService from "../../services/DigimonService";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import Loading from "../../parts/loading";
import DigimonList from "../../components/digimonList";
import Message from "../../parts/message";
import DigimonDetail from "../../components/digimonDetail";

export default function Digimon() {
    let {idParam} = useParams();
    let id: Number = Number(idParam!);
    const service = new DigimonService();
    const {data, isError, isLoading} = useQuery(['digimon' + id], () => service.fetchDigimon(id))

    return (
        <Container fluid style={{textAlign: "center"}}>
            {
                (function () {
                    if (isLoading) {
                        return <Loading/>
                    } else if (data) {
                        return <DigimonDetail data={data}/>
                    } else {
                        return <Message message={"Cannot load DigimonDto List"}/>
                    }
                })()
            }
        </Container>
    )
}
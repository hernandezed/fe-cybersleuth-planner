import Digimon from "../../services/dto/Digimon";
import {Button} from "react-bootstrap";
import DigimonImage from "../digimonImage/DigimonImage";

export default function DigimonBuild(props: DigimonBuildProps) {
    return (
        <Button style={{width: '100%', height: '100%'}}>
            <div><DigimonImage id={props.digimon.id} variant={"mini"}/></div>
            <div>{props.buildName}</div>
        </Button>);
}


interface DigimonBuildProps {
    digimon: Digimon
    buildName: String
}

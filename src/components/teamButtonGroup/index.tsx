import Team from "../../services/dto/Team";
import TeamButton from "../../parts/teamButton";
import {Button} from "react-bootstrap";

export default function TeamButtonGroup(props: TeamButtonGroupProps) {
    return (
        <div>
            {props.teams.map(t => <div style={{marginBottom: '3px'}}><TeamButton id={t.id} name={t.name}
                                                                                 digimonIds={t.digimonIds}/></div>)}
            <Button style={{width: '100%'}}>+</Button>
        </div>
    );

}

interface TeamButtonGroupProps {
    teams: Team[]
}
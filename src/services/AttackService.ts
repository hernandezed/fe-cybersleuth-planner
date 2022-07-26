import AttackDto from "./dto/AttackDto";
import AttackDetailDto from "./dto/AttackDetailDto";
import DigimonMini from "./dto/DigimonMini";

export default class AttackService {

    private baseUrl: String = process.env.REACT_APP_SERVICE_URL!;

    async fetchAttacks(): Promise<AttackDto[]> {
        let res = await fetch(this.baseUrl + "/attacks");
        return await res.json() as AttackDto[];
    }

    async fetchAttack(id: String): Promise<AttackDetailDto> {
        let res = await fetch(this.baseUrl + "/attacks/" + id);
        let json = await res.json();
        let attackDto = json as AttackDetailDto;
        attackDto.digimons = await (await fetch(json["_links"]["learnedBy"]["href"])).json() as DigimonMini[];
        return attackDto;
    }

}
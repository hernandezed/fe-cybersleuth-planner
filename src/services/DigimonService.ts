import DigimonDto from "./dto/DigimonDto";
import DigimonDetailDto from "./dto/DigimonDetailDto";

export default class DigimonService {

    private baseUrl: String = process.env.REACT_APP_SERVICE_URL!;

    async fetchDigimons(): Promise<DigimonDto[]> {
        let res = await fetch(this.baseUrl + "/digimons");
        return await res.json() as DigimonDto[];
    }

    async fetchDigimon(id: Number): Promise<DigimonDetailDto> {
        let res = await fetch(this.baseUrl + "/digimons/" + id);
        return await res.json() as DigimonDetailDto;
    }

}

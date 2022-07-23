import Digimon from "./dto/Digimon";
import {QueryClient} from '@tanstack/react-query';
import DigimonDetail from "./dto/DigimonDetail";

export default class DigimonService {

    private baseUrl: String = process.env.REACT_APP_SERVICE_URL!;

    async fetchDigimons(): Promise<Digimon[]> {
        let res = await fetch(this.baseUrl + "/digimons");
        return await res.json() as Digimon[];
    }

    async fetchDigimon(id: Number): Promise<DigimonDetail> {
        let res = await fetch(this.baseUrl + "/digimons/" + id);
        return await res.json() as DigimonDetail;
    }

}

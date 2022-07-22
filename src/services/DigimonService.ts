import Digimon from "./dto/Digimon";
import {QueryClient} from '@tanstack/react-query';

export default class DigimonService {

    async fetchDigimons(): Promise<Digimon[]> {
        let res = await fetch("http://localhost:8080/digimons");
        return await res.json() as Digimon[];
    }

}

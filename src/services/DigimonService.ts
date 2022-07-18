import Digimon from "./dto/Digimon";

export default class DigimonService {

    async getAll(): Promise<Digimon[]> {
        return fetch("http://localhost:8080/digimons")
            .then(async res => await (res.json()) as Digimon[]);
    }
}

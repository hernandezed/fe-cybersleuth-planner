import React, {useEffect, useState} from 'react';
import './App.css';
import Digimon from "../../services/dto/Digimon";
import DigimonDetails from "../detail/DigimonDetails";
import DigimonDetail from "../../services/dto/DigimonDetail";
import DigimonList from "../../components/digimonList/DigimonList";

function App() {
    const [data, setData] = useState([] as Digimon[]);

    useEffect(() => {
        fetch("http://localhost:8080/digimons").then(async res => {
            let a = await (res.json()) as Digimon[];
            setData(a);
        }).catch(err => console.log(err))
    }, [])

    let detail2= {"id":200,"name":"MegaSeadramon","stage":"Ultimate","type":"Data","attribute":"Water","memory":12,"slots":3,"evolveFrom":[{"id":75,"name":"Airdramon"},{"id":104,"name":"Coelamon"},{"id":329,"name":"Ginryumon"},{"id":94,"name":"Gekomon"},{"id":103,"name":"Seadramon"},{"id":83,"name":"ShellNumemon"}],"evolutions":[{"id":279,"name":"Plesiomon","requirement":{"level":50,"hp":null,"sp":null,"atk":null,"def":null,"int":null,"spd":null,"cam":null,"abi":null,"dna":null}},{"id":299,"name":"MetalSeadramon","requirement":{"level":50,"hp":null,"sp":null,"atk":null,"def":null,"int":null,"spd":null,"cam":null,"abi":null,"dna":null}},{"id":302,"name":"Leviamon","requirement":{"level":60,"hp":null,"sp":null,"atk":null,"def":null,"int":null,"spd":null,"cam":null,"abi":null,"dna":null}},{"id":268,"name":"Neptunemon","requirement":{"level":55,"hp":null,"sp":null,"atk":null,"def":null,"int":null,"spd":null,"cam":null,"abi":null,"dna":null}}],"learnAttacks":[{"attack":{"id":56,"name":"Mental Break","attribute":"Neutral","type":"Support Enhancement","cost":6,"power":0,"inheritable":true},"at":25},{"attack":{"id":62,"name":"Hydro Water III","attribute":"Water","type":"Magic","cost":9,"power":95,"inheritable":true},"at":35},{"attack":{"id":76,"name":"Lightning Javelin","attribute":"Electric","type":"Magic","cost":15,"power":105,"inheritable":false},"at":1},{"attack":{"id":77,"name":"Idle Bubble","attribute":"Water","type":"Magic","cost":10,"power":30,"inheritable":true},"at":15},{"attack":{"id":78,"name":"Heaven's Thunder III","attribute":"Electric","type":"Magic","cost":9,"power":95,"inheritable":true},"at":45}],"stats":{"1":{"hp":800,"sp":80,"attack":47,"defense":65,"intellect":95,"speed":58},"99":{"hp":1870,"sp":197,"attack":125,"defense":163,"intellect":222,"speed":146},"50":{"hp":1330,"sp":138,"attack":86,"defense":114,"intellect":158,"speed":102}}} as unknown as DigimonDetail
    return (
        <div className="App">
            <DigimonDetails digimon={detail2}/>
        </div>
    );
}

//<DigimonList data={data}/>
export default App;

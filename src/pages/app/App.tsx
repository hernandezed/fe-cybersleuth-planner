import React, {useEffect, useState} from 'react';
import './App.css';
import Digimon from "../../services/dto/Digimon";
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

    return (
        <div className="App">
            <DigimonList data={data}/>
        </div>
    );
}

//<DigimonList data={data}/>
export default App;

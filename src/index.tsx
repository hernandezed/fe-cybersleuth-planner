import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './pages/app';
import reportWebVitals from './reportWebVitals';
import Header from "./parts/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Digimons from "./pages/digimons";
import Digimon from "./pages/digimon";
import Attacks from "./pages/attacks";
import Attack from "./pages/attack";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Router>
        <Header/>
        <QueryClientProvider client={new QueryClient()}>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/digimons" element={<Digimons/>}/>
                <Route path="/digimons/:idParam" element={<Digimon/>}/>
                <Route path="/attacks" element={<Attacks/>}/>
                <Route path="/attacks/:idParam" element={<Attack/>}/>
            </Routes>
        </QueryClientProvider>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

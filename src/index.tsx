import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from './pages/app/App';
import reportWebVitals from './reportWebVitals';
import Header from "./parts/header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import DigimonDetails from "./pages/detail/DigimonDetails";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/digimons/:id" element={<DigimonDetails/>}/>
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

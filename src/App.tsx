import React from 'react';
import './App.css';
import MainLayout from "./MainLayout/MainLayout";
import {Card} from "./types/Card.types";

const App = () => {

    const generatePriority = (i: number) => {
        return (i % 3 === 0 && "URGENT") || (i % 3 === 1 && "MID") || "LOW";
    }
    const cardList = (): Card[]  => {
        const a = [];

        for (let i = 0; i < 14; i++) {
            a.push({
                id: i,
                createDate: new Date(),
                doneDate: undefined,
                label: "Card: " + i,
                priority: generatePriority(i),
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit nisl sed nulla ullamcorper, id tincidunt lectus tincidunt. Aenean varius."
            })
        }
        return a;
    };
    return (
        <div className="App">
            <MainLayout cardList={cardList()}></MainLayout>
        </div>
    );
}

export default App;

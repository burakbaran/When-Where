import React from 'react';
import './App.css';
import MainLayout from "./MainLayout/MainLayout";

const App = () => {
    return (
        <div className="App">
            <MainLayout cardList={[]}></MainLayout>
        </div>
    );
}

export default App;

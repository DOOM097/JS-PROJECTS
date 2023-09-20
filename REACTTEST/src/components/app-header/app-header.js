import React from "react";

import './app-header.css'

const AppHeader = ({loked, allPosts})=>{
    return(
        <div className="app-header d-flex">
            <h1>Вставьте здесь ваше имя</h1>
            <h2>{allPosts}записей, из них понравилось{liked}</h2>
        </div>
    )
}

export default AppHeader;
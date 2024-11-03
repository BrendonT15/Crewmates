import { useEffect, useState } from "react";

import amogus from "../assets/amogus.png";

const Home = () => {
    return (
        <div className="Home">
            <h1>Welcome to the Crewmate Creator!</h1>
            <h2>Here is where you can create your very own set of crewmates before sending them off into space!</h2>
            <img className="amogus" src={amogus} alt="amogus name" />
        </div>
    );
}

export default Home;
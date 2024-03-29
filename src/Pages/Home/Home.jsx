import styled from "styled-components";
import Inset from "@/Common/PagesLayout/Inset.jsx";

import Slideshow from "./Slideshow/Slideshow";

import Tabbed from "./Tabbed/Tabbed";
import React from "react";
import ReactPlayer from "react-player";
const Home = () => {
    return (
        <HomeStyled>
            <h1>Home</h1>

            <Slideshow />
            <Inset>


                
                <h1>The Stock Market</h1>
                <ReactPlayer url="https://www.youtube.com/watch?v=ZCFkWDdmXG8" />
                <br></br>
                <ReactPlayer url="https://www.youtube.com/watch?v=A7fZp9dwELo&ab_channel=ConcerningReality" /><br></br>
                <ReactPlayer url="https://www.youtube.com/watch?v=T37YvxMTofc&ab_channel=ThePaintExplainer" /><br></br>

                <Tabbed />
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }
    ReactPlayer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

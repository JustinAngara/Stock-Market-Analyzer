import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import ReactPlayer from "react-player";
import Grid from "./Grid"

const Graphs = () => {
    return (
        <GraphsStyled>
            <h1>Stock Market Explained</h1>
            <ReactPlayer url="https://www.youtube.com/watch?v=ZCFkWDdmXG8" />

            <br></br>

            <h1>Ultimate Guide to Investing</h1>
            <ReactPlayer url="https://www.youtube.com/watch?v=_MeZt4LBnCE&ab_channel=JamesJani" />
            <Grid />
        </GraphsStyled>
    );
};

export default Graphs;

// prop-types
Graphs.propTypes = {
    prop: PropTypes.array,
};

const GraphsStyled = styled.div``;

import styled from "styled-components";

let getData = () =>{
    return fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(json => console.log(json))
}

const GrabData = () => {

    return (
        <GrabDataStyled>
            {getData()}
            test {Math.random()}
        </GrabDataStyled>
    );
};

const GrabDataStyled = styled.div`
    outline: solid 1px #999;
    padding: 10px;
    margin: 10px 0px;
`;


export default GrabData;





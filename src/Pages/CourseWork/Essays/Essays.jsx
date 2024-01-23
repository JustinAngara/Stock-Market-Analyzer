import styled from 'styled-components';
import SingleEssay from "./SingleEssay.jsx"

const Essays = () => {
    return(
    <EssaysStyled>
        <h2>Essays</h2>

        <SingleEssay question={`Q1: Sample Question`}>
            Answer 1 goes here.
        </SingleEssay>
        <SingleEssay question={`Q2: Sample Question`}>
            Answer 2 goes here.
        </SingleEssay>
        <SingleEssay question={`Q3: Sample Question`}>
            Answer 3 goes here.
        </SingleEssay>
    </EssaysStyled>
    );
}

export default Essays;


const EssaysStyled = styled.div`

`;


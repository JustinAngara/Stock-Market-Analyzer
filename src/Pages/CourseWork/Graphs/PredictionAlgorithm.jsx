import styled from 'styled-components';
import getTestData from './getTestData';
const PredictionAlgorithm = () => {
    let data = getTestData(true);

    return <PredictionAlgorithmStyled>
        <h1>Predicted Best Algorithm Stock</h1>
        <div>
            n-stocks: {data.length} <br></br>
            Most riskiest (outliers)  <br></br>
            Most Stable (low SD) <br></br>
            <div className = "displayStocks">
                now in display stocks
            </div>
        </div>
    </PredictionAlgorithmStyled>;
}

export default PredictionAlgorithm;


const PredictionAlgorithmStyled = styled.div`
    .displayStocks{
        border: 1px;
    }
`;
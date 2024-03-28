import styled from "styled-components";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
const LineGraph = ({ data, keys }) => {
    // console.log(data);
    let openArr = data["1. open"];
    let closeArr = [];
    console.log(keys);

    const open = data.map((e) => e["1. open"]);
    const close = data.map((e) => e["4. close"]);
    console.log(open);
    return (
        <LineGraphStyled>
            <Line
                datasetIdKey="id"
                data={{
                    labels: keys,
                    datasets: [
                        {
                            id: 1,
                            label: "open",
                            data: open,
                        },
                        {
                            id: 2,
                            label: "close",
                            data: close,
                        },
                    ],
                }}
            />
        </LineGraphStyled>
    );
};

export default LineGraph;

// prop-types
LineGraph.propTypes = {
    data: PropTypes.array,
    keys: PropTypes.array,
};

const LineGraphStyled = styled.div`
    background-color: white;
`;

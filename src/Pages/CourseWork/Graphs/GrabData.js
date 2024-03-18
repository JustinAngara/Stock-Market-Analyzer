

// use some apis
// API: 84LJOAJ15Y72QTB8
// full urL: https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=
const apiKey = "84LJOAJ15Y72QTB8";
let getDataCall = async () =>{
    let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apiKey}`
    let response = fetch(url).then((res) => res.json());
    console.log(response);

    return response;
}
export default getDataCall;
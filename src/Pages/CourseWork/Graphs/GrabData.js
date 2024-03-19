

// use some apis

// full urL: https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=
const apiKey = "";
let getDataCall = async () =>{
    let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apiKey}`
    let response = fetch(url).then((res) => res.json());
    console.log(response);

    return response;
}
export default getDataCall;

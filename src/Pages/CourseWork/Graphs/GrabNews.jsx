// news api a57bbac925b34dfe9fab71e17d542065
let API_KEY = "a57bbac925b34dfe9fab71e17d542065";

// sentiment api key
let SENTIMENT_API_KEY = "";
let GrabNews = (stringStock) => {
    getData("tesla");
    return <div>hello</div>;
};

let getData = async (stringStock) => {
    const response = await fetch(
        `https://newsapi.org/v2/everything?q=${stringStock}&from=2024-05-12&sortBy=publishedAt&apiKey=${API_KEY}`
    );
    const movies = await response.json();
    console.log(movies);

    for (let i = 0; i < movies.articles.length; i++) {
        console.log(""+movies.articles[i].description);
    }


};
export default GrabNews;

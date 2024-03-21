import styled from 'styled-components';


const AKEY = `84LJOAJ15Y72QTB8`;
const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=`;

const Component = () => {
    const [repos, setRepos] = useState([])

    const fetchData = async ()=>{

        let res = await fetch(URL + AKEY)
        let data = await res.json()
        setRepos(data)

    }


    useEffect(() => {
        // fetch call used to be here
        fetchData()
    }, [])


    return (
        <div>
        {
            repos.map(items => console.log(items))
        }
        </div>
    )
}

export default Component;

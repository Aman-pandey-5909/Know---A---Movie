import axios from "axios";
import { useState } from "react"
import SearchCards from "./SearchCards";
import RecommendationCard from "./RecommendationCard";
import { useNavigate } from "react-router-dom";
import { token } from "../constant/token"

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchError, setSearchError] = useState("")
    const [fetching, setFetching] = useState(false)
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const toTitleCase = (str) => {
        return str
            .toLowerCase() // Convert everything to lowercase first
            .split(" ") // Split words by space
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
            .join(" "); // Join words back together
    };
    const onSearch = async () => {
        try {
            if (!searchTerm.trim()) {
                setSearchError("Empty Search Detected !")
                return
            }
            setFetching(true)
            if (searchTerm.toLowerCase() === "advanced search") {
                navigate("/advSearch")
            } else {
                const response = await axios.get(`http://www.omdbapi.com/?t=${toTitleCase(searchTerm)}&plot=full&apikey=${token}`)
                setData(response.data)
                setFetching(false)
                console.log(data);
            }
        } catch (error) {
            console.error("Error Occured when fetching data from api, If you are a admin please see the terminal");
        } finally {
            setFetching(false)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onSearch()
        }
    }

    return (
        <main className="h-full  w-full">
            {fetching && <div className="p-1  w-full bg-red-500 absolute left-0 top-0"></div>}
            <div className="border mx-auto mainSection relative overflow-auto sm:w-[70%] h-full">
                {searchError && <div className="text-red-500 absolute top-0 text-center w-full ">{searchError}</div>}
                <div className="flex border-b-2 justify-between items-center px-3 py-1">
                    <img onClick={() => { if (Object.keys(data).length > 0) { setData({}); setSearchTerm(""); setSearchError("") } }} src="/KnowAMovie.png" alt="kaw" className="darkModeIcon" />
                    <img onClick={() => { if (Object.keys(data).length > 0) { setData({}); setSearchTerm(""); setSearchError("") } }} src="/kawLight.png" alt="kaw" className="lightModeIcon" />
                    <div className="h-[fit-content] flex items-center border rounded-sm border-yellow">
                        <input className="px-3 outline-none py-2 text-xl" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setSearchError(""); }} onKeyDown={handleKeyDown} placeholder="Search By Title" type="search" name="searchMovie" id="searchMovie" />
                        <button onClick={onSearch} className="text-2xl px-2">🔎</button>
                    </div>
                </div>
                <div className="px-3 py-1">
                    {!data || Object.keys(data).length === 0 ? (<RecommendationCard />) : (data.Response === 'True' ? <SearchCards
                        Title={data.Title}
                        Released={data.Released}
                        Rated={data.Rated}
                        Runtime={data.Runtime}
                        Country={data.Country}
                        Poster={data.Poster}
                        Actors={data.Actors}
                        Plot={data.Plot}
                        BoxOffice={data.BoxOffice}
                        Genre={data.Genre}
                        Language={data.Language}
                        Type={data.Type}
                        Writer={data.Writer}
                        imdbRating={data.imdbRating}
                        imdbVotes={data.imdbVotes}
                        totalSeasons={data.totalSeasons}
                    /> : <p className="text-2xl font-semibold text-center">{data.Error}</p>)}
                </div>
            </div>
        </main>
    )
}
export default Home
import axios from "axios";
import { useEffect, useState } from "react"
import RecommendationCard, { CardContainer } from "./RecommendationCard";
import { useNavigate } from "react-router-dom";
import { token } from "../constant/token"

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchError, setSearchError] = useState("")
    const [fetching, setFetching] = useState(false)
    const [respData, setRespData] = useState({})
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
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
                const response = await axios.get(`http://www.omdbapi.com/?s=${toTitleCase(searchTerm)}&page=${page}&plot=full&apikey=${token}`)
                setRespData(response.data)
                setData(response.data.Search)
                setFetching(false)
                console.log("data:", data);
            }
        } catch (error) {
            console.error("Error Occured when fetching data from api, If you are a admin please see the terminal");
        } finally {
            setFetching(false)
        }
    }


    const onClickCard = async (imdbId) => {
        try {
            setFetching(true)
            const response = await axios.get(`http://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=${token}`)
            sessionStorage.setItem("clickedCardDetails", JSON.stringify(response.data))
            navigate('/result')
        } catch (error) {
            console.error("Error Occured When Clicking on za card: ", error);
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
        <main className="h-full w-full">
            {fetching && <div className="p-1  w-full bg-red-500 absolute left-0 top-0"></div>}
            <div className="border mx-auto mainSection relative overflow-auto md:w-[70%] w-full h-full">
                {searchError && <div className="text-red-500 absolute top-0 text-center w-full ">{searchError}</div>}
                <div className="flex border-b-2 justify-between items-center px-3 py-1">
                    <img onClick={() => { if (data.length > 0 || respData.Response === "False") { setData([]); setSearchTerm(""); setSearchError(""); setRespData({}) } }} src="/KnowAMovie.png" alt="kaw" className="darkModeIcon" />
                    <img onClick={() => { if (data.length > 0 || respData.Response === "False") { setData([]); setSearchTerm(""); setSearchError(""); setRespData({}) } }} src="/kawLight.png" alt="kaw" className="lightModeIcon" />
                    <div className="h-[fit-content] flex items-center border rounded-sm border-yellow">
                        <input className="px-3 outline-none py-2 text-xl" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setSearchError(""); }} onKeyDown={handleKeyDown} placeholder="Search By Title" type="search" name="searchMovie" id="searchMovie" />
                        <button onClick={onSearch} className="text-2xl px-2">🔎</button>
                    </div>
                </div>
                <div className={`px-3 py-1 ${Object.keys(respData).length !== 0 && "grid md:grid-cols-3 grid-cols-1 gap-x-3 gap-y-6"}`}>
                    {
                        /**
                         * data -> array he 
                         * response.data -> totalResults and Response 
                         */
                        Object.keys(respData).length === 0 ? <RecommendationCard /> : (
                            respData.Response === "False" ? <div>{respData.Error}</div> :
                                data.map((value, index) => {
                                    return <div onClick={() => { onClickCard(value.imdbID) }} key={index} className=" hover:scale-105 transition-all duration-200 backdrop-blur-2xl">
                                        <CardContainer key={value.Title}
                                            Title={value.Title}
                                            Poster={value.Poster}
                                            Year={value.Year}
                                            Type={value.Type}
                                        />
                                    </div>
                                }))
                    }
                </div>
                {
                    respData?.Response === "True" &&
                    <span className="px-3 py-3 text-2xl font-semibold">Total Pages: {Math.ceil(parseInt(respData.totalResults)/10)}</span>
                }
            </div>
        </main>
    )
}
export default Home
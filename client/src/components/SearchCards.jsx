import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const SearchCards = () => {

    const navigate = useNavigate()
    const [seshData, setSeshData] = useState({})
    useEffect(() => {
        const data = sessionStorage.getItem("clickedCardDetails")
        setSeshData(JSON.parse(data))
    }, [])

    const details = [
        { label: "Type", key: "Type" },
        { label: "Language", key: "Language" },
        { label: "Seasons", key: "totalSeasons" },
        { label: "Released", key: "Released" },
        { label: "Runtime", key: "Runtime" },
        { label: "Genre", key: "Genre" },
        { label: "Rated", key: "Rated" },
        { label: "Writer", key: "Writer" },
        { label: "Actors", key: "Actors" },
        { label: "Box Office", key: "BoxOffice" },
        { label: "IMDB Rating", key: "imdbRating" },
        { label: "IMDB Votes", key: "imdbVotes" },
    ]


    return (
        <div className="w-[90%] mx-auto">
            {seshData && <div className="flex my-2 justify-between items-center">
                <h2 className="text-3xl font-semibold text-green-400">{seshData.Title}</h2>
                <h2 className="text-2xl font-semibold">Country: {seshData.Country}</h2>
            </div>
            }
            {seshData &&
                <div className="xl:flex gap-5">
                    <img className="rounded-sm mx-auto xl:mx-0 border-amber-900 border aspect-auto object-cover h-[60vh] object-center" src={seshData.Poster} alt="poster" />
                    <div>
                        <p className="text-xl text-blue-400">
                            <span className="font-semibold text-2xl text-cyan-600">Summary: </span>
                            {seshData?.Plot || "Summary Not Available"}

                        </p>

                        <div className="grid grid-cols-2 my-3 gap-4">
                            {details.map(({ label, key }) => {
                                return seshData?.[key] && (
                                    <div key={key} className="text-xl text-purple-400">
                                        <span className="font-semibold text-2xl text-cyan-600">{label}: </span>
                                        {seshData[key]}
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            }
            {!seshData &&
                <div>
                    No Data Available, Click <a href="/" onClick={() => { sessionStorage.removeItem("clickedCardDetails") }}>Here</a> To Go Back
                </div>
            }
            <button onClick={() => { navigate("/") }} className="px-4 py-2 border m-3 rounded-lg">Home</button>
        </div>
    )
}
export default SearchCards
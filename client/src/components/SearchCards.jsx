import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const SearchCards = () => {

    const navigate = useNavigate()
    const [seshData, setSeshData] = useState({})
    useEffect(() => {
      const data = sessionStorage.getItem("clickedCardDetails")
      setSeshData(JSON.parse(data))
    }, [])
    
    return (
        <div className="w-[90%] mx-auto">
            <div className="flex my-2 justify-between items-center">
                <h2 className="text-3xl font-semibold text-green-400">{seshData.Title}</h2>
                <h2 className="text-2xl font-semibold">Country: {seshData.Country}</h2>
            </div>
            <div className="xl:flex gap-5">
                <img className="rounded-sm mx-auto xl:mx-0 border-amber-900 border aspect-auto object-cover h-[60vh] object-center" src={seshData.Poster} alt="poster" />
                <div>
                    <p className="text-xl text-blue-400"><span className="font-semibold text-2xl text-cyan-600">Summary: </span>{seshData.Plot}</p>
                    <div className="grid grid-cols-2 my-3 gap-4">
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Type: </span>
                            {seshData.Type}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Language: </span>
                            {seshData.Language}
                        </div>
                        {seshData.totalSeasons &&
                            <div className="text-xl text-purple-400">
                                <span className="font-semibold text-2xl text-cyan-600">Seasons: </span>
                                {seshData.totalSeasons}
                            </div>
                        }
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Released: </span>
                            {seshData.Released}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Runtime: </span>
                            {seshData.Runtime}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Genre: </span>
                            {seshData.Genre}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Rated: </span>
                            {seshData.Rated}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Writer: </span>
                            {seshData.Writer}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Actors: </span>
                            {seshData.Actors}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Box Office: </span>
                            {seshData.BoxOffice}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">IMDB Rating: </span>
                            {seshData.imdbRating}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">IMDB votes: </span>
                            {seshData.imdbVotes}
                        </div>

                    </div>
                </div>
            </div>
            <button onClick={()=>{navigate("/")}} className="px-4 py-2 border m-3 rounded-lg">Home</button>
        </div>
    )
}
export default SearchCards
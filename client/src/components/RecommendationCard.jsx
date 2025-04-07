import axios from "axios"
import { useEffect, useState } from "react"
import { token } from "../constant/token"
import { useNavigate } from "react-router-dom"
export const CardContainer = ({ Poster="/default_tnail.png", Title, Type, Year }) => {
    return (
        <div className="border p-3 h-full rounded-md">
            <div className="h-[80%] flex justify-center">
                <img src={Poster === "N/A"?"/default_tnail.png":Poster} className="rounded-md w-full h-full" alt={Title} />
            </div>
            <h2 className="text-2xl text-lime-400">{Title}</h2>
            <div className="flex w-full items-center justify-between">
                <h3 className="text-xl text-green-500">{Type}</h3>
                <h3 className="text-xl text-green-500">{Year}</h3>
            </div>
        </div>
    )
}

const RecommendationCard = () => {

    const navigate = useNavigate()
    const [recoData, setRecoData] = useState([])
    const onClickCard = async(imdbId) => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=${token}`)
            sessionStorage.setItem("clickedCardDetails", JSON.stringify(response.data))
            navigate(`/result`)
        } catch (error) {
            console.error("Error Occured When Clicking on za card: ", error);
        }
    }

   useEffect(() => {
     const fetchRecommendations = async() => {
        try {
            const randomAssLetter = ["Dark", "Fast", "glass", "Write", "Someday", "There", "Where", "Somewhere", "From"]  //camel case cuz why not
            const page = Math.floor(Math.random()*5)+1;
            const randomLetter = randomAssLetter[Math.floor(Math.random()*randomAssLetter.length)]
            const response = await axios.get(`https://www.omdbapi.com/?s=${randomLetter}&page=${page}&apikey=${token}`)
            setRecoData(response.data.Search)
            // console.log(response.data);
        } catch (error) {
            console.error("Encountered an error", error);
        }
     }
     fetchRecommendations()
   }, [])
   

    return (
        <div>
            <div className="px-3 py-1 grid md:grid-cols-3 grid-cols-1 gap-x-3 gap-y-6">
                {recoData.map((value,index)=>(
                    <div key={index} onClick={()=>{onClickCard(value.imdbID)}} className=" hover:scale-105 transition-all duration-200 backdrop-blur-2xl">
                        <CardContainer
                            Poster={value.Poster}
                            Title={value.Title}
                            Year={value.Year}
                            Type={value.Type}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default RecommendationCard
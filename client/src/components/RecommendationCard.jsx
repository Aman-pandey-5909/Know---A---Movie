
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



    return (
        <div>
            <div className="text-2xl font-semibold text-center">
                <CardContainer text={"Search For Your Movie By Title, Work In Progress Recommendation section and Advanced Search Feature"} />
            </div>
        </div>
    )
}


export default RecommendationCard
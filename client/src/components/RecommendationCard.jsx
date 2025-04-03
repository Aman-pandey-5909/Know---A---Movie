
export const CardContainer = ({text}) => {
    return (
        <div>
            {text}
        </div>
    )
}

const RecommendationCard = () => {
    return (
        <div>
            <p className="text-2xl font-semibold text-center">
                <CardContainer text={"Search For Your Movie By Title, Work In Progress Recommendation section and Advanced Search Feature"} />
            </p>
        </div>
    )
}


export default RecommendationCard
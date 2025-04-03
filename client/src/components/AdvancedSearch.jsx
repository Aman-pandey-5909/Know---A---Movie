import { CardContainer } from "./RecommendationCard";
import { useNavigate } from "react-router-dom";
const AdvancedSearch = () => {
  const navigate = useNavigate()
  return (
    <div className="border w-[80%] h-[95%] mx-auto">
      <div className="border-b-2 flex justify-center">
        <img onClick={navigate("/")} src="/KnowAMovie.png" alt="kaw" className="darkModeIcon" />
        <img onClick={navigate("/")} src="/kawLight.png" alt="kaw" className="lightModeIcon" />
      </div>
      <div>
        <div className="p-3">
          <div className="h-[fit-content] flex items-center px-4 border rounded-sm border-yellow">
            <input className="px-3 outline-none py-2 w-full text-xl" placeholder="Search By Title" type="search" name="advsearchMovie" id="advsearchMovie" />
            <button className="text-2xl px-2">🔎</button>
          </div>
          <div className="flex justify-between my-3 gap-3">
            <div className="border h-fit rounded-md">
              <label htmlFor="yearSearch" className="px-2 border-r-2 text-xl">Year</label>
              <input type="number" name="year" id="yearSearch" className="px-3 outline-none py-2 text-xl" />
            </div>
            <div className="border h-fit rounded-md">
              <label htmlFor="typeSearch" className="px-2 border-r-2 text-xl">Type</label>
              <select name="typeOfData" id="typeSearch" className="px-3 outline-none py-2 text-xl">
                <option value="Movie">Movie</option>
                <option value="Series">Series</option>
              </select>
            </div>
            
          </div>
        </div>
        <CardContainer text={"hello"} />
      </div>
    </div>
  )
}
export default AdvancedSearch
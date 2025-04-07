import { useState } from "react";
import { CardContainer } from "./RecommendationCard";
import { useNavigate } from "react-router-dom";
const AdvancedSearch = () => {
  const navigate = useNavigate()
  const [userChoice, setUserChoice] = useState({
    title: "",
    year: "",
    type: "",
    genre: []
  })

  return (
    <div className="border w-[80%] h-[95%] mx-auto">
      <div className="border-b-2 flex justify-center">
        <img onClick={() => navigate("/")} src="/KnowAMovie.png" alt="kaw" className="darkModeIcon" />
        <img onClick={() => navigate("/")} src="/kawLight.png" alt="kaw" className="lightModeIcon" />
      </div>
      <div>
        <div className="p-3">
          <div className="h-[fit-content] flex items-center px-4 border rounded-sm border-yellow">
            <input className="px-3 outline-none py-2 w-full text-xl" placeholder="Search By Title" type="search" name="advsearchMovie" id="advsearchMovie" />
            <button className="text-2xl px-2">🔎</button>
          </div>
          {
            /*
            <div className="flex justify-between my-3 gap-3">
            <div className="border h-fit rounded-md">
              <label htmlFor="yearSearch" className="px-2 border-r-2 text-xl">Year</label>
              <input type="number" name="year" id="yearSearch" className="px-3 outline-none py-2 text-xl" />
            </div>
            <div className="border h-fit rounded-md">
              <label htmlFor="typeSearch" className="px-2 border-r-2 text-xl">Type</label>
              <select name="typeOfData" id="typeSearch" className="px-3 outline-none py-2 text-xl">
                <option className="bg-gray-500" value="Movie">Movie</option>
                <option className="bg-gray-500" value="Series">Series</option>
              </select>
            </div>
            <div className="grid grid-cols-3 justify-items-end px-2 select-none gap-y-2 gap-x-8">
              <div className="flex gap-2 items-center">
                <label htmlFor="Action">Action</label>
                <input type="checkbox" name="Action" id="Action" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="Adventure">Adventure</label>
                <input type="checkbox" name="Adventure" id="Adventure" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="Animation">Animation</label>
                <input type="checkbox" name="Animation" id="Animation" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="Biography">Biography</label>
                <input type="checkbox" name="Biography" id="Biography" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="Sci-Fi">Sci-Fi</label>
                <input type="checkbox" name="Sci-Fi" id="Sci-Fi" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="Documentary">Documentary</label>
                <input type="checkbox" name="Documentary" id="Documentary" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="Comedy">Comedy</label>
                <input type="checkbox" name="Comedy" id="Comedy" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="Crime">Crime</label>
                <input type="checkbox" name="Crime" id="Crime" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="Drama">Drama</label>
                <input type="checkbox" name="Drama" id="Drama" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="Fantasy">Fantasy</label>
                <input type="checkbox" name="Fantasy" id="Fantasy" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="History">History</label>
                <input type="checkbox" name="History" id="History" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="Mystery">Mystery</label>
                <input type="checkbox" name="Mystery" id="Mystery" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="Romance">Romance</label>
                <input type="checkbox" name="Romance" id="Romance" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="Horror">Horror</label>
                <input type="checkbox" name="Horror" id="Horror" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="Sport">Sport</label>
                <input type="checkbox" name="Sport" id="Sport" />
              </div>
              <div className="flex gap-2 items-center">
                <label htmlFor="Thriller">Thriller</label>
                <input type="checkbox" name="Thriller" id="Thriller" />
              </div>
              <div className="flex gap-2 items-center">
                <button className="border px-4 rounded-md hover:scale-105 transition-all duration-200 py-1">Reset</button>
              </div>
            </div>
            */
          }
        </div>
      </div>
      {/* <CardContainer text={"hello"} /> */}
      <p className="text-2xl text-center leading-10"> <b className="text-red-400">Unable To Implement Advanced Search Feature</b> Due to OMDB API's Limitations, For More info Please Visit :
        <a href="https://github.com/Aman-pandey-5909/KnowAMovie/blob/main/README.md" target="_blank"> read me</a><br></br>
        &nbsp;Click <a href="/">Here</a> To Navigate Back to Home Page
      </p>
    </div>
    
  )
}
export default AdvancedSearch
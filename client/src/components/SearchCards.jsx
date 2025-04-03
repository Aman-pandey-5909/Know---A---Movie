const SearchCards = ({ Title, Released, Rated, Runtime, Country, Poster, Actors, Plot, BoxOffice, Genre, Language, Type, Writer, imdbRating, imdbVotes, totalSeasons }) => {

    return (
        <div className="w-[90%] mx-auto">
            <div className="flex my-2 justify-between items-center">
                <h2 className="text-3xl font-semibold text-green-400">{Title}</h2>
                <h2 className="text-2xl font-semibold">Country: {Country}</h2>
            </div>
            <div className="sm:flex gap-5">
                <img className="rounded-sm border-amber-900 border aspect-auto w-[40%] object-cover object-center" src={Poster} alt="poster" />
                <div>
                    <p className="text-xl text-blue-400"><span className="font-semibold text-2xl text-cyan-600">Summary: </span>{Plot}</p>
                    <div className="grid grid-cols-2 my-3 gap-4">
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Type: </span>
                            {Type}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Language: </span>
                            {Language}
                        </div>
                        {totalSeasons &&
                            <div className="text-xl text-purple-400">
                                <span className="font-semibold text-2xl text-cyan-600">Seasons: </span>
                                {totalSeasons}
                            </div>
                        }
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Released: </span>
                            {Released}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Runtime: </span>
                            {Runtime}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Genre: </span>
                            {Genre}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Rated: </span>
                            {Rated}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Writer: </span>
                            {Writer}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Actors: </span>
                            {Actors}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">Box Office: </span>
                            {BoxOffice}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">IMDB Rating: </span>
                            {imdbRating}
                        </div>
                        <div className="text-xl text-purple-400">
                            <span className="font-semibold text-2xl text-cyan-600">IMDB votes: </span>
                            {imdbVotes}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchCards
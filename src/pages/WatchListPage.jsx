
import React, { useState } from "react"

function WatchListPage() {

    const [watchlist, setWatchlist] = useState([
        { id: 1, title: "The Matrix", year: 1999 }
    ]);
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")

    const handleAddMovie = (e) => {
        e.preventDefault()
        if (!title.trim() || !year.trim()) return

        const newMovie = {
            id: Date.now(),
            title: title.trim(),
            year: parseInt(year)
        }

        setWatchlist([...watchlist, newMovie])
        setTitle("")
        setYear("")
    }

    return (
        <div>
            <h1>Your Movie choices</h1>

            <form onSubmit={handleAddMovie}>
                <input
                    type="text"
                    placeholder="Movie title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <button type="submit">Add Movie</button>
            </form>

            {watchlist.length === 0 ? (
                <p>No movies yet!</p>
            ) : (
                <ul>
                    {watchlist.map(movie => (
                        <li key={movie.id}>
                            {movie.title} ({movie.year})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default WatchListPage

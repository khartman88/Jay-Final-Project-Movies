
import React from "react"
import movieImage from "../assets/movie-time.jpg"

function HomePage() {
    return (
        <div>
            <h1>Movie Watchlist App</h1>
            <img
                src={movieImage}
                alt="Movie Time sign with film and popcorn"
                style={{ maxWidth: "100%", height: "auto", marginTop: "1rem" }}
            />
        </div>
    )
}

export default HomePage


import React, { useState, useEffect, useCallback } from "react"
import Card from "../shared/Card"
import WatchList from "../features/watchlist/watchlist"

function WatchListPage() {

    const [watchlist, setWatchlist] = useState(() => {
        const  saved = localStorage.getItem("watchlist")
        return saved ?  JSON.parse(saved) : []
    })
    
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")

    const [editingId, setEditingId] = useState(null)
    const [editTitle, setEditTitle] = useState("")
    const [editYear, setEditYear] = useState("")

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watchlist))
    }, [watchlist])

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

    const handleDelete = useCallback((id) => {
        setWatchlist(prev => prev.filter(movie => movie.id !== id))
    }, [])

    const handleEditClick = (id, currentTitle, currentYear) => {
        setEditingId(id)
        setEditTitle(currentTitle)
        setEditYear(currentYear.toString())
    }

    const handleSaveClick = (id) => {
        if (!editTitle.trim() || !editYear.trim()) return

        setWatchlist(prev =>
            prev.map(movie =>
                movie.id === id
                    ? { ...movie, title: editTitle.trim(), year: parseInt(editYear) }
                    : movie
            )
        )
        setEditingId(null)
    }

    const handleCancelClick = () => {
        setEditingId(null)
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

            <WatchList
                movies={watchlist}
                onEdit={handleEditClick}
                onDelete={handleDelete}
                editingId={editingId}
                editTitle={editTitle}
                setEditTitle={setEditTitle}
                editYear={editYear}
                setEditYear={setEditYear}
                onSave={handleSaveClick}
                onCancel={handleCancelClick}
            />
        </div>
    )
}

export default WatchListPage

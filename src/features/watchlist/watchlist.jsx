
import React from "react"
import Card from "../../shared/Card"

function WatchList({ movies, onEdit, onDelete, editingId, editTitle, setEditTitle, editYear, setEditYear, onSave, onCancel }) {
    if (movies.length === 0) {
        return <p>No movies yet!</p>
    }
    
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Card>
                        {editingId === movie.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                />
                                <input
                                    type="number"
                                    value={editYear}
                                    onChange={(e) => setEditYear(e.target.value)}
                                />
                                <button onClick={() => onSave(movie.id)}>Save</button>
                                <button onClick={onCancel}>Cancel</button>
                            </>
                    ) : (
                            <>
                                {movie.title} ({movie.year})
                                <button onClick={() => onEdit(movie.id, movie.title, movie.year)}>Edit</button>
                                <button onClick={() => onDelete(movie.id)}>Delete</button>
                            </>
                        )}
                    </Card>
                </li>
            ))}
        </ul>
    )
}

export default WatchList

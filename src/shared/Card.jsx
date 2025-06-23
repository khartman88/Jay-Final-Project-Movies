
import React from "react"

function Card({children}) {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "1rem",
            borderRadius: "8px",
            marginBottom: "1rem",
            background: "f9f9f9"
        }}>
            {children}
        </div>
    )
}

export default Card

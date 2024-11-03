import React from "react";
import { Link } from "react-router-dom";

const AmogusCard = ({ id, name, image, speed, color, onDelete }) => {
    return (
        <div className="amogus-card">
            <Link to={`/details/${name}`} className="amogus-card-link">
                <img src={image} alt={name || "Amogus character"} className="amogus-image" />
                <h3 className="amogus-name">{name}</h3>
                <p>Speed of Crewmate: {speed}</p>
                <p>Color of Crewmate: {color}</p>
            </Link>
            <button className="delete-button" onClick={onDelete}>Delete</button>
            <Link to={`/edit/${id}`} className="edit-button">Edit</Link>
        </div>
    );
};

export default AmogusCard;
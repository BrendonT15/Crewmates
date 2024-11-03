import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../supabase";

const EditCharacter = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({ name: "", speed: "", color: "" });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            const { data, error } = await supabase
                .from("amogus")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                setError("Could not fetch character details.");
                console.error(error);
            } else {
                setCharacter(data);
                setError(null);
            }
        };

        fetchCharacter();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCharacter((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from("amogus")
            .update({
                name: character.name,
                speed: character.speed,
                color: character.color,
            })
            .eq("id", id);

        if (error) {
            console.error("Error updating character:", error);
            setError("Could not save character changes.");
        } else {
            navigate("/gallery");
        }
    };

    return (
        <div className="edit-character-container">
            <div className="edit-character">
                <h1>Edit Character</h1>
                {error && <p>{error}</p>}
                <form onSubmit={handleSave}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={character.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Speed (mph):</label>
                        <input
                            type="number"
                            name="speed"
                            value={character.speed}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Color:</label>
                        <input
                            type="text"
                            name="color"
                            value={character.color}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default EditCharacter;
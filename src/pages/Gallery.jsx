import { useEffect, useState } from "react";
import supabase from "../supabase";
import AmogusCard from "../components/AmogusCard";
import red from "../assets/red.png";

const Gallery = () => {
    const [error, setError] = useState(null);
    const [amogusList, setAmogusList] = useState([]); // Initialize as empty array

    useEffect(() => {
        const fetchAmogus = async () => {
            const { data, error } = await supabase.from("amogus").select("*");

            if (data) {
                setAmogusList(data);
                setError(null);
            } else if (error) {
                setError("Could not fetch Amogus characters.");
                setAmogusList([]);
                console.error(error);
            }
        };

        fetchAmogus();
    }, []);

    const handleDelete = async (id) => {
        const { error } = await supabase.from("amogus").delete().eq("id", id);

        if (error) {
            console.error("Error deleting character:", error);
            setError("Could not delete Amogus character.");
        } else {
            setAmogusList(amogusList.filter((character) => character.id !== id));
            setError(null);
        }
    };

    return (
        <div className="Gallery">
            <h1>Crewmate Gallery</h1>

            {error && <p>{error}</p>}
            <div className="amogus-list">
                {amogusList.length > 0 ? (
                    amogusList.map((character) => (
                        <AmogusCard
                            key={character.id}
                            id={character.id} // Pass the ID as a prop
                            name={character.name}
                            image={character.image_url || red}
                            speed={character.speed}
                            color={character.color}
                            onDelete={() => handleDelete(character.id)}
                        />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Gallery;
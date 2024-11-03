import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../supabase";
import red from "../assets/red.png";

const AmogusDetails = () => {
    const { name } = useParams();
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            const { data, error } = await supabase
                .from("amogus")
                .select("*")
                .eq("name", name)
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
    }, [name]);

    if (error) return <p>{error}</p>;
    if (!character) return <p>Loading...</p>;

    return (
        <div className="amogus-details-container">
            <div className="amogus-details">
                <h1>{character.name}</h1>
                <img src={red} alt={character.name} className="amogus-image" />
                <p>Speed: {character.speed}</p>
                <p>Color: {character.color}</p>
            </div>
        </div>
    );
};

export default AmogusDetails;